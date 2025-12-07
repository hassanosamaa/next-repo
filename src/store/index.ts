import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import utilitiesSlice from "./reducers/utilitiesSlice";
import authUserSlice from "./reducers/authUserSlice";
import { authApi } from "./RTKQuery/auth/authApi";
import { rtkQueryErrorLogger } from "./RTKQuery/rtkQueryErrorLogger";

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      utilitiesSlice,
      authUserSlice,
      [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware, rtkQueryErrorLogger),
  });

  setupListeners(store.dispatch);

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

