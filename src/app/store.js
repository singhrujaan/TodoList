import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/counter/TodoSlice';
import toastReducer from '../features/counter/ToastSlice'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  todo: todoReducer,
  toast: toastReducer
});
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer:
    persistedReducer
  ,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
