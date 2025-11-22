import axios from 'axios';

// Create an axios instance with a base URL
// In development, this will be empty (using package.json proxy)
// In production, this should be set to your backend URL
const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || ''
});

export default api;
