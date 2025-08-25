import uiReducer, {
  toggleDarkMode,
  setDarkMode,
  toggleMenu,
  setMenuOpen,
  setScrollTopVisible,
  setCurrentSection,
} from '../slices/uiSlice';

// Mock document
Object.defineProperty(document, 'documentElement', {
  value: {
    classList: {
      toggle: jest.fn(),
    },
  },
  writable: true,
});

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
  })),
});

describe('uiSlice', () => {
  const initialState = {
    isDarkMode: false,
    isMenuOpen: false,
    isScrollTopVisible: false,
    currentSection: 'home',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should return the initial state', () => {
    expect(uiReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  test('should handle toggleDarkMode', () => {
    const actual = uiReducer(initialState, toggleDarkMode());
    expect(actual.isDarkMode).toBe(true);
    expect(document.documentElement.classList.toggle).toHaveBeenCalledWith('dark', true);
  });

  test('should handle setDarkMode', () => {
    const actual = uiReducer(initialState, setDarkMode(true));
    expect(actual.isDarkMode).toBe(true);
    expect(document.documentElement.classList.toggle).toHaveBeenCalledWith('dark', true);
  });

  test('should handle toggleMenu', () => {
    const actual = uiReducer(initialState, toggleMenu());
    expect(actual.isMenuOpen).toBe(true);
  });

  test('should handle setMenuOpen', () => {
    const actual = uiReducer(initialState, setMenuOpen(true));
    expect(actual.isMenuOpen).toBe(true);
  });

  test('should handle setScrollTopVisible', () => {
    const actual = uiReducer(initialState, setScrollTopVisible(true));
    expect(actual.isScrollTopVisible).toBe(true);
  });

  test('should handle setCurrentSection', () => {
    const actual = uiReducer(initialState, setCurrentSection('about'));
    expect(actual.currentSection).toBe('about');
  });
});