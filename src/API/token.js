export const setToken = (token) => {
  localStorage.setItem('Bearer', token);
};

export const getToken = () => {
  let token = '';

  if (new URLSearchParams(location.search).get('code')) {
    token = new URLSearchParams(location.search).get('code');
    setToken(token);
  }

  if (localStorage.getItem('Bearer')) {
    token = localStorage.getItem('Bearer');
  }
  return token;
};
