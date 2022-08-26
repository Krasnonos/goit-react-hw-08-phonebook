import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { authSlice } from './authSlice';
import { contactsSlice } from './contactsSlice';
import { themeSlice } from './themeSlise';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistAuth = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistAuth, authSlice.reducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contacts: contactsSlice.reducer,
    theme: themeSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
