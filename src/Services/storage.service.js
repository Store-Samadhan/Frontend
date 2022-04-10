import axios from "axios";
import {
  GET_FILTERED_STORAGE_URL,
  GET_STORAGE_INFO_BY_ID_URL,
  UPDATE_STORAGE_DATA_URL,
  GET_STORAGE_BOOKINGS_URL,
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

export const updateStorage = async (storageData, accessToken) => {
  try {
    const { data } = await axios.put(
      `${UPDATE_STORAGE_DATA_URL}`,
      { storageData },
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

export const fetchStorageBookings = async (accessToken) => {
  try {
    const { data } = await axios.get(`${GET_STORAGE_BOOKINGS_URL}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
