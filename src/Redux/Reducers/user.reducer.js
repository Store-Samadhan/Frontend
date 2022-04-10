import { UPDATE_USER_DATA } from "../ActionTypes";

export const userReducer = (
  state = {
    userData: null,
  },
  action
) => {
  switch (action.type) {
    case UPDATE_USER_DATA: {
      return {
        ...state,
        userData: action.data,
      };
    }
    default:
      return state;
  }
};
