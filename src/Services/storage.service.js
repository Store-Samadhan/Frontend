import axios from "axios";
import { GET_FILTERED_STORAGE_URL } from "../Utils/Constants/APIConstants";

export const fetchFilteredStorage = async (
  filter,
  filterValue,
  accessToken
) => {
  try {
    const { data } = await axios.get(
      `${GET_FILTERED_STORAGE_URL}?filter=${filter}&values=${filterValue}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
