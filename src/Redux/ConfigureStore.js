import { createStore, combineReducers } from "redux";

import { userReducer } from "./Reducers/user.reducer";
import { popUpReducer } from "./Reducers/popup.reducer";

export const ConfigureStore = () => {
  const store = createStore(combineReducers({ userReducer, popUpReducer }));

  return store;
};
