export const API_URL = 'https://api.unsplash.com';
export const API_URL_AUTH = 'https://unsplash.com/oauth/authorize';

// без авторизации
// список фотографий
// GET https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
// https://api.unsplash.com/photos?page=1

// одна фотография по id В параметрах необходимо будет передавать
// client_id, это ваш Access
// Key приложения
// GET / photos /:id


export const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
export const REDIRECT_URI = 'http://192.168.1.136:3000';
export const RESPONSE_TYPE = 'code';
export const SCOPE = 'public read_user read_photos write_likes';

const url = new URL(API_URL_AUTH);

url.searchParams.append('client_id', ACCESS_KEY);
url.searchParams.append('redirect_uri', REDIRECT_URI);
url.searchParams.append('response_type', RESPONSE_TYPE);
url.searchParams.append('scope', SCOPE);

export default url;
