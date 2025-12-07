// Redux store and types
export { makeStore } from "./index";
export type { AppState, AppDispatch, AppStore } from "./index";

// Typed hooks
export { useAppDispatch, useAppSelector, useAppStore } from "@/hooks/redux";

// Utilities slice
export {
  setLang,
  selectUtilitiesSlice
} from "./reducers/utilitiesSlice";

// Auth user slice
export {
  setToken,
  setUser,
  setAuthData,
  logout,
  selectAuthUserSlice,
} from "./reducers/authUserSlice";

// RTK Query APIs
export { authApi } from "./RTKQuery/auth/authApi";

