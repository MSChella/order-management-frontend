
import { getToken } from '../utils/authUtils';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://order-mgmt-services.onrender.com/api',
});



instance.interceptors.request.use((config) => {
    const token = getToken();

    if (token) {
        console.log(token);
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default instance;
