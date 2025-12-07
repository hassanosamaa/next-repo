import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthUserModel } from "@/models/user";
import { AppState } from "@/store";

interface IAuthUserState {
  token: string | null;
  user: IAuthUserModel | null;
  isAuthenticated: boolean;
}

const initialState: IAuthUserState = {
  token: null,
  user: null,
  isAuthenticated: false,
};

const authUserSlice = createSlice({
  name: "authUserSlice",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    setUser: (state, action: PayloadAction<IAuthUserModel | null>) => {
      state.user = action.payload;
    },
    setAuthData: (
      state,
      action: PayloadAction<{ token: string; user: IAuthUserModel }>
    ) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const selectAuthUserSlice = (state: AppState) => state.authUserSlice;

export const { setToken, setUser, setAuthData, logout } =
  authUserSlice.actions;

export default authUserSlice.reducer;

