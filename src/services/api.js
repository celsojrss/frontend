import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistackbckend.herokuapp.com',
});

export default api;