import axios from "axios";
import {
  GET_FILTERED_STORAGE_URL,
  GET_STORAGE_INFO_BY_ID_URL,
} from "../Utils/Constants/APIConstants";

export const fetchFilteredStorage = async (
  filter,
  filterValue,
  accessToken
) => {
  try {
    const { data } = await axios.get(`${GET_FILTERED_STORAGE_URL}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: filter
        ? {
            filter: filter,
            values: filterValue,
          }
        : {},
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchStorageInfoById = async (id, accessToken) => {
  try {
    const { data } = await axios.get(`${GET_STORAGE_INFO_BY_ID_URL}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        storageId: id,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
