export const BASE_URL =
  "https://store-samadhan-backend.centralindia.cloudapp.azure.com/api/v1";
export const CLOUD_URL =
  "https://storesamadhan-storage.centralindia.cloudapp.azure.com/images";
export const AUTH_URL = `${BASE_URL}/auth`;
export const STORAGE_URL = `${BASE_URL}/storage`;
export const USER_URL = `${BASE_URL}/user`;
export const BOOKING_URL = `${BASE_URL}/booking`;

export const SIGNUP_USER_URL = `${AUTH_URL}/signupuser`;
export const SIGNUP_STORAGE_URL = `${AUTH_URL}/signupStorage`;
export const GET_USER_URL = `${AUTH_URL}/getUserDetails`;
export const GET_FILTERED_STORAGE_URL = `${STORAGE_URL}/getFilteredStorage`;
export const GET_STORAGE_INFO_BY_ID_URL = `${STORAGE_URL}/getStorage`;
export const ADD_REVIEW_URL = `${USER_URL}/addRating`;
export const UPDATE_USER_DATA_URL = `${USER_URL}/updateUser`;
export const UPDATE_STORAGE_DATA_URL = `${STORAGE_URL}/updateStorage`;
export const INITIALIZING_BOOKING_URL = `${BOOKING_URL}/initializeBooking`;
export const PAYMENT_VERIFICATION_URL = `${BOOKING_URL}/verifyBooking`;
export const GET_USER_BOOKINGS_URL = `${USER_URL}/bookings`;
export const GET_STORAGE_BOOKINGS_URL = `${STORAGE_URL}/bookings`;
