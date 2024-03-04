
import { getToken } from '../utils/authUtils';
import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'https://order-mgmt-services.onrender.com/api',
});



axiosInstance.interceptors.request.use((config) => {
    const token = getToken();


    if (token) {
        console.log(token);
        config.headers.Authorization = `Bearer ${token}`;
        console.log(token);
    }
    return config;
});

export default axiosInstance;
