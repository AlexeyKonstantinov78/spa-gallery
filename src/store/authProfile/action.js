export const AUTH_PROFILE_REQUEST = 'AUTH_PROFILE_REQUEST';
export const AUTH_PROFILE_REQUEST_SUCCESS = 'AUTH_PROFILE_REQUEST_SUCCESS';
export const AUTH_PROFILE_REQUEST_ERROR = 'AUTH_PROFILE_REQUEST_ERROR';

export const authProfileRequest = () => ({
  type: AUTH_PROFILE_REQUEST,
});

export const authProfileRequestSuccess = (data) => ({
  type: AUTH_PROFILE_REQUEST_SUCCESS,
  data,
});

export const authProfileRequestError = (error) => ({
  type: AUTH_PROFILE_REQUEST_ERROR,
  error,
});
