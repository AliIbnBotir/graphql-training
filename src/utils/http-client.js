import axios from 'axios'

export const request = axios.create({
  baseURL: 'http://localhost:3000/',
})

request.interceptors.response.use(
  (config) => {
    config.headers = {
      'content-type': 'application/json',
    };
    return config;
  },
  (error) => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use((response) => response.data, (err)=> Promise.reject(err));