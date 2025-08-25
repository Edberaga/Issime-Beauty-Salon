import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Language = 'en' | 'zh';

interface LanguageState {
  currentLanguage: Language;
}

const initialState: LanguageState = {
  currentLanguage: (localStorage.getItem('language') as Language) || 'en',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.currentLanguage = action.payload;
      localStorage.setItem('language', action.payload);
      document.documentElement.setAttribute('lang', action.payload);
      
      // Dispatch custom event for SEO updates
      window.dispatchEvent(new CustomEvent('languageChange', { detail: action.payload }));
    },
    toggleLanguage: (state) => {
      const newLanguage = state.currentLanguage === 'en' ? 'zh' : 'en';
      state.currentLanguage = newLanguage;
      localStorage.setItem('language', newLanguage);
      document.documentElement.setAttribute('lang', newLanguage);
      
      // Dispatch custom event for SEO updates
      window.dispatchEvent(new CustomEvent('languageChange', { detail: newLanguage }));
    },
  },
});

export const { setLanguage, toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;