/* eslint-disable camelcase */
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { urlToken } from '../components/util/const';
import { updateToken } from '../store/tokenReducer';

export const setCode = (code) => {
  localStorage.setItem('code', code);
};

export const setToken = (token) => {
  localStorage.setItem('Bearer', token);
};

export const getToken = () => {
  const dispatch = useDispatch();
  let code = '';
  let token = '';

  if (
    new URLSearchParams(location.search).get('code') &&
    !localStorage.getItem('Bearer')
  ) {
    code = new URLSearchParams(location.search).get('code');

    urlToken.searchParams.append('code', code);

    axios.post(urlToken).then((response) => {
      setToken(response.data.access_token);
      dispatch(updateToken(response.data.access_token));
    });
  }

  if (localStorage.getItem('Bearer')) {
    token = localStorage.getItem('Bearer');
  }
  return token;
};
