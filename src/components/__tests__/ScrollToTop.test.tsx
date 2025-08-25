import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ScrollToTop from '../buttons/ScrollToTop';
import languageReducer from '../../store/slices/languageSlice';
import uiReducer from '../../store/slices/uiSlice';

const createTestStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      language: languageReducer,
      ui: uiReducer,
    },
    preloadedState: initialState,
  });
};

const renderWithProviders = (component: React.ReactElement, initialState = {}) => {
  const store = createTestStore(initialState);
  return render(
    <Provider store={store}>
      {component}
    </Provider>
  );
};

describe('ScrollToTop Component', () => {
  beforeEach(() => {
    // Reset scroll position
    Object.defineProperty(window, 'pageYOffset', {
      writable: true,
      value: 0,
    });
  });

  test('renders scroll to top button', () => {
    renderWithProviders(<ScrollToTop />);
    const button = screen.getByLabelText('Scroll to top');
    expect(button).toBeInTheDocument();
  });

  test('button is hidden when scroll position is less than 300px', () => {
    const initialState = {
      language: { currentLanguage: 'en' as const },
      ui: { isDarkMode: false, isMenuOpen: false, isScrollTopVisible: false, currentSection: 'home' }
    };
    
    renderWithProviders(<ScrollToTop />, initialState);
    const button = screen.getByLabelText('Scroll to top');
    
    expect(button).toHaveClass('opacity-0');
    expect(button).toHaveClass('pointer-events-none');
  });

  test('button is visible when scroll position is greater than 300px', () => {
    const initialState = {
      language: { currentLanguage: 'en' as const },
      ui: { isDarkMode: false, isMenuOpen: false, isScrollTopVisible: true, currentSection: 'home' }
    };
    
    renderWithProviders(<ScrollToTop />, initialState);
    const button = screen.getByLabelText('Scroll to top');
    
    expect(button).toHaveClass('opacity-100');
    expect(button).toHaveClass('pointer-events-auto');
  });

  test('scrolls to top when button is clicked', () => {
    const scrollToSpy = jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
    
    const initialState = {
      language: { currentLanguage: 'en' as const },
      ui: { isDarkMode: false, isMenuOpen: false, isScrollTopVisible: true, currentSection: 'home' }
    };
    
    renderWithProviders(<ScrollToTop />, initialState);
    const button = screen.getByLabelText('Scroll to top');
    
    fireEvent.click(button);
    
    expect(scrollToSpy).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
    
    scrollToSpy.mockRestore();
  });
});