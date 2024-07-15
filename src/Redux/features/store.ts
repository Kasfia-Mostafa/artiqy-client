// store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slice/userSlice'; // Adjust the path as necessary
import { authApi } from '../Api/authApi';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
