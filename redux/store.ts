import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth.slice';
import { createWrapper } from "next-redux-wrapper";

const reducer = {
  auth: authReducer,
};

const makeStore = () => configureStore({
  reducer,
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export const wrapper = createWrapper<AppStore>(makeStore);

export default wrapper;