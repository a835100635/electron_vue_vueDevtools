import Axios from 'axios';

const isDevelopment = process.env.NODE_ENV !== 'production'

const axios = Axios.create({
  baseURL: isDevelopment ? '/' : 'https://test-brm.comein.cn',
});


axios.interceptors.request.use((config) => {
  console.log('request', config);
  return config;
},
  (error) => {
    Promise.reject(error)
  });

axios.interceptors.response.use((response) => {
  console.log('response', response);
  return response;
},
  (error) => {
    Promise.reject(error)
  });


export const instance = axios;