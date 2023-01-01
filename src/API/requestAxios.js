/* eslint-disable no-unused-vars */
import axios from 'axios';

export const requestAxios =
  (url, token, callbackSuccess, callbackError) => {
    axios.get(url,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then(({ data }) => {
      callbackSuccess(data);
    }).catch((error) => {
      callbackError(error);
    });
  };
