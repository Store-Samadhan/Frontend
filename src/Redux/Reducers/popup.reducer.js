import { UPDATE_BOOK_STORAGE_POPUP_STATE } from "../ActionTypes";

export const popUpReducer = (
  state = {
    bookStorage: false,
  },
  action
) => {
  switch (action.type) {
    case UPDATE_BOOK_STORAGE_POPUP_STATE: {
      return {
        ...state,
        bookStorage: action.value,
      };
    }

    default:
      return state;
  }
};
