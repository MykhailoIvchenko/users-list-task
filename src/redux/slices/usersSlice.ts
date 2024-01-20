import {createAction, createSlice} from '@reduxjs/toolkit';
import { RootState } from '../store';
import {usersService} from "../../services/users.service";
import { put } from "redux-saga/effects";

const initialState: IUsersState = {
  users: [],
  status: 'idle',
};

export function* getUsersSaga(): Generator<any, void, IUser[]> {
  try {
    yield put(getUsersPending());

    const payload = yield usersService.getUsers();

    yield put(getUsersFulfilled(payload));
  } catch (error) {
    yield put(getUsersRejected());
  }
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsersPending: (state) => {
      state.status = 'loading';
    },
    getUsersFulfilled: (state, action) => {
      state.status = 'idle';
      state.users = action.payload;
    },
    getUsersRejected: (state) => {
      state.status = 'failed';
    },
  },
});

export const GET_USERS = 'users/get';
export const selectUsers = createAction(GET_USERS);

export const { getUsersPending, getUsersFulfilled, getUsersRejected } = usersSlice.actions;

export const getAllUsers = (state: RootState) => state.users;

export default usersSlice.reducer;
