export const API_URL = 'https://api.unsplash.com';
export const API_URL_AUTH = 'https://unsplash.com/oauth/authorize';
export const API_URL_AUTH_TOKEN = 'https://unsplash.com/oauth/token';

// без авторизации
// список фотографий
// GET https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
// https://api.unsplash.com/photos?page=1

// одна фотография по id В параметрах необходимо будет передавать
// client_id, это ваш Access
// Key приложения
// GET / photos /:id


export const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
export const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;
export const REDIRECT_URI = 'https://spa-gallery-three.vercel.app/';
export const RESPONSE_TYPE = 'code';
export const SCOPE = 'public read_user read_photos write_likes';

export const url = new URL(API_URL_AUTH);

url.searchParams.append('client_id', ACCESS_KEY);
url.searchParams.append('redirect_uri', REDIRECT_URI);
url.searchParams.append('response_type', RESPONSE_TYPE);
url.searchParams.append('scope', SCOPE);

export const urlToken = new URL(API_URL_AUTH_TOKEN);

urlToken.searchParams.append('client_id', ACCESS_KEY);
urlToken.searchParams.append('client_secret', SECRET_KEY);
urlToken.searchParams.append('redirect_uri', REDIRECT_URI);
urlToken.searchParams.append('grant_type', 'authorization_code');
