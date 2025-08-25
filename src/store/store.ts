import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './slices/languageSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    language: languageReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;