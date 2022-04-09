import notify from "../../../Utils/Helpers/notifyToast";

export const fetchAndSetUserData = async (
  accessToken,
  uid,
  dispatch,
  history,
  message
) => {

  // const userdata = await getUser(accessToken);
  const userdata = [];

  dispatch({
    type: "UPDATE_USER_DATA",
    data: { ...userdata, accessToken, uid },
  });

  notify(message, "success");
};
