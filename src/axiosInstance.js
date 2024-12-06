import axios from 'axios';

const axiosInstance = axios.create({
baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Accept': 'application/json', 
    'Content-Type': 'application/json',
  },
});
console.log('Axios BaseURL:', axiosInstance.defaults.baseURL);
console.log('Env BaseURL:', import.meta.env);

export default axiosInstance;