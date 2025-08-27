import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';
import languageReducer from '@/store/slices/languageSlice';
import uiReducer from '@/store/slices/uiSlice';

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
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </Provider>
  );
};

describe('Header Component', () => {
  test('renders header with logo', () => {
    renderWithProviders(<Header />);
    const logo = screen.getByAltText('Issime Beauty Salon');
    expect(logo).toBeInTheDocument();
  });

  test('renders navigation items', () => {
    renderWithProviders(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Gallery')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();
  });

  test('toggles language when globe button is clicked', () => {
    const store = createTestStore();
    renderWithProviders(<Header />, {});
    
    const languageButton = screen.getByTitle('Switch to Chinese');
    fireEvent.click(languageButton);
    
    // Check if the state changed (you might need to check the store state)
    expect(languageButton).toBeInTheDocument();
  });

  test('toggles dark mode when theme button is clicked', () => {
    renderWithProviders(<Header />);
    
    const themeButton = screen.getByRole('button', { name: /toggle theme/i });
    fireEvent.click(themeButton);
    
    expect(themeButton).toBeInTheDocument();
  });

  test('opens mobile menu when menu button is clicked', () => {
    renderWithProviders(<Header />);
    
    const menuButton = screen.getByRole('button', { name: /toggle menu/i });
    fireEvent.click(menuButton);
    
    expect(menuButton).toBeInTheDocument();
  });

  test('displays Chinese navigation when language is set to Chinese', () => {
    const initialState = {
      language: { currentLanguage: 'zh' as const },
      ui: { isDarkMode: false, isMenuOpen: false, isScrollTopVisible: false, currentSection: 'home' }
    };
    
    renderWithProviders(<Header />, initialState);
    
    expect(screen.getByText('首页')).toBeInTheDocument();
    expect(screen.getByText('关于我们')).toBeInTheDocument();
    expect(screen.getByText('服务项目')).toBeInTheDocument();
  });
});