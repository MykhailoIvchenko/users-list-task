import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState: IUser | null = {
  id: 0,
  name: '',
  username: '',
  email: '',
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    geo: {
      lat: '',
      lng: '',
    },
  },
  phone: '',
  website: '',
  company: {
    name: '',
    catchPhrase: '',
    bs: '',
  }
};

export const selectedUserSlice = createSlice({
  name: 'selectedUser',
  initialState,
  reducers: {
    setUser: (_state, action) => action.payload,
  },
});

export const selectUser = (state: RootState) => state.selectedUser;

export const { setUser } = selectedUserSlice.actions;

export default selectedUserSlice.reducer;
