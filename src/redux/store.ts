import { configureStore } from '@reduxjs/toolkit';
import selectedUserReducer from './slices/userSlice';
import usersReducer, { GET_USERS, getUsersSaga } from './slices/usersSlice';
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

function* sagas() {
  yield takeEvery(GET_USERS, getUsersSaga)
}

export const store = configureStore({
  reducer: {
    selectedUser: selectedUserReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false })
    .concat(sagaMiddleware),
});

sagaMiddleware.run(sagas)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
