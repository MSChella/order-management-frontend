// Create a file axios-config.js

import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://order-mgmt-services.onrender.com', // Update with your server URL
});

// Add a request interceptor to include the token in headers
instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default instance;
