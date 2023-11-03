import axios from 'axios';
import apiEndpoint from './endpoint.util';


export const axiosInstance = axios.create({
    baseURL: apiEndpoint.base,
    headers: {
        'Content-Type': 'application/json',
    },
});


axiosInstance.interceptors.request.use((req) => {

    return req;
}
);

export default axiosInstance;
