export const BASE_URL = "http://localhost:8000/api/v1";
export const AUTH_URL = `${BASE_URL}/auth`;
export const STORAGE_URL = `${BASE_URL}/storage`;

export const SIGNUP_USER_URL = `${AUTH_URL}/signupuser`;
export const SIGNUP_STORAGE_URL = `${AUTH_URL}/signupStorage`;
export const GET_USER_URL = `${AUTH_URL}/getUserDetails`;
export const GET_FILTERED_STORAGE_URL = `${STORAGE_URL}/getFilteredStorage`;
