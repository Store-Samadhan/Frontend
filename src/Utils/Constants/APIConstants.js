export const BASE_URL = "http://localhost:8000/api/v1";
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
export const INITIALIZING_BOOKING_URL = `${BOOKING_URL}/initializeBooking`;
export const PAYMENT_VERIFICATION_URL = `${BOOKING_URL}/verifyBooking`;
