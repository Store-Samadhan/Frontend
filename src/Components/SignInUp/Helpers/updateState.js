import notify from "../../../Utils/Helpers/notifyToast";
import { getUser } from "./../../../Services/user.service";
import { UPDATE_USER_DATA } from "./../../../Redux/ActionTypes";

export const fetchAndSetUserData = async (
  accessToken,
  uid,
  dispatch,
  navigate,
  message
) => {
  const localeUserData = await getUser(accessToken);

  dispatch({
    type: UPDATE_USER_DATA,
    data: { ...localeUserData, accessToken, uid },
  });

  notify(message, "success");

  navigate("/");
};
