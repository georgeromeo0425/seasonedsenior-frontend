import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  username: string,
  role: string
}

const initialState: AuthState = {
  username: '',
  role: 'caregiver'
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRole: (state: any, action: any) => {
      state.username = action.payload
    }
  },
});


export const authReducer = authSlice.reducer;

export const {
  setRole
} = authSlice.actions