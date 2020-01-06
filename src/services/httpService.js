import axios from 'axios';

import { baseURL } from '../config.json';

axios.defaults.baseURL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : baseURL;

axios.defaults.headers.common['Cache-Control'] = 'no-cache';

axios.interceptors.response.use(null, error => {
  console.log('axios interceptor triggered...');
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log('unexpected: ', error.response.data);
    return Promise.reject(error);
  }
  console.log(error.response);
  // toast.error(`⚠️ ${error.response.data}`);
  return Promise.reject(error);
});

function setJwt(jwt) {
  if (jwt) axios.defaults.headers.common['office-mobile-token'] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};
