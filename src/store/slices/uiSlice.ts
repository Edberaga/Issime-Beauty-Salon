import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  isDarkMode: boolean;
  isMenuOpen: boolean;
  isScrollTopVisible: boolean;
  currentSection: string;
}

const initialState: UiState = {
  isDarkMode: false,
  isMenuOpen: false,
  isScrollTopVisible: false,
  currentSection: 'home',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      document.documentElement.classList.toggle('dark', state.isDarkMode);
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
      document.documentElement.classList.toggle('dark', action.payload);
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload;
    },
    setScrollTopVisible: (state, action: PayloadAction<boolean>) => {
      state.isScrollTopVisible = action.payload;
    },
    setCurrentSection: (state, action: PayloadAction<string>) => {
      state.currentSection = action.payload;
    },
  },
});

export const {
  toggleDarkMode,
  setDarkMode,
  toggleMenu,
  setMenuOpen,
  setScrollTopVisible,
  setCurrentSection,
} = uiSlice.actions;

export default uiSlice.reducer;