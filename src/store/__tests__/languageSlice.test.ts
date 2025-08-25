import languageReducer, { setLanguage, toggleLanguage } from '../slices/languageSlice';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock document
Object.defineProperty(document, 'documentElement', {
  value: {
    setAttribute: jest.fn(),
  },
  writable: true,
});

// Mock window.dispatchEvent
global.dispatchEvent = jest.fn();

describe('languageSlice', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should return the initial state', () => {
    expect(languageReducer(undefined, { type: 'unknown' })).toEqual({
      currentLanguage: 'en',
    });
  });

  test('should handle setLanguage', () => {
    const actual = languageReducer(
      { currentLanguage: 'en' },
      setLanguage('zh')
    );
    expect(actual.currentLanguage).toEqual('zh');
    expect(localStorage.setItem).toHaveBeenCalledWith('language', 'zh');
    expect(document.documentElement.setAttribute).toHaveBeenCalledWith('lang', 'zh');
  });

  test('should handle toggleLanguage from English to Chinese', () => {
    const actual = languageReducer(
      { currentLanguage: 'en' },
      toggleLanguage()
    );
    expect(actual.currentLanguage).toEqual('zh');
    expect(localStorage.setItem).toHaveBeenCalledWith('language', 'zh');
  });

  test('should handle toggleLanguage from Chinese to English', () => {
    const actual = languageReducer(
      { currentLanguage: 'zh' },
      toggleLanguage()
    );
    expect(actual.currentLanguage).toEqual('en');
    expect(localStorage.setItem).toHaveBeenCalledWith('language', 'en');
  });
});