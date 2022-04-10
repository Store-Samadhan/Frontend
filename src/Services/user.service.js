import axios from "axios";

import {
  GET_USER_URL,
  ADD_REVIEW_URL,
  UPDATE_USER_DATA_URL,
} from "../Utils/Constants/APIConstants";

export const getUser = async (accessToken) => {
  try {
    const { data } = await axios.get(GET_USER_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};

export const addReview = async (review, accessToken) => {
  try {
    const { data } = await axios.post(
      `${ADD_REVIEW_URL}`,
      { ...review },
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

export const updateUser = async (userData, accessToken) => {
  try {
    const { data } = await axios.put(
      `${UPDATE_USER_DATA_URL}`,
      { userData },
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
