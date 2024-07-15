/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  profileUrl?: string;
  profession?: string;
  location?: string;
  friends?: Array<any>;
  views?: Array<any>;
  verified?: boolean;
  createdAt?: string;
}

interface UserState {
  user: User | null;
  edit: boolean;
}

const initialState: UserState = {
  user: null,
  edit: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
    },
    updateUserProfile(state, action: PayloadAction<Partial<User>>) {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
    setEditMode(state, action: PayloadAction<boolean>) {
      state.edit = action.payload;
    },
  },
});

export const { setUser, updateUserProfile, setEditMode } = userSlice.actions;
export default userSlice.reducer;
