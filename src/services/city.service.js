import axiosInstance from "../utils/axios.util";
import apiEndpoint from "../utils/endpoint.util";

const CityService = {
    getTopTenPollutedCity: async () => {
        const endpoint = apiEndpoint.city.topTenPollutedCity;
        const response = await axiosInstance.get(endpoint);
        return response.data;
    },
    getTopTenCleanCity: async () => {
        const endpoint = apiEndpoint.city.topTenCleanCity;
        const response = await axiosInstance.get(endpoint);
        return response.data;
    },
};

export default CityService;
