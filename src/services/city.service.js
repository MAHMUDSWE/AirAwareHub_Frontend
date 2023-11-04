import axiosInstance from "../utils/axios.util";
import apiEndpoint from "../utils/endpoint.util";

const CityService = {
    getTopTenPollutedCity: async () => {
        const endpoint = apiEndpoint.city.topTenPollutedCity;
        const response = await axiosInstance.get(endpoint);
        console.log(response)
        return response.data;
    },
    getTopTenCleanCity: async () => {
        const endpoint = apiEndpoint.city.topTenCleanCity;
        const response = await axiosInstance.get(endpoint);
        return response.data;
    },
    getListOfCities: async (searchText) => {

        const endpoint = apiEndpoint.city.listOfCities;

        const response = await axiosInstance.get(endpoint, {
            params: {
                city_name: searchText
            }
        });

        return response.data;
    },
    getAirQualityDataOfCity: async ({ city, state, country }) => {
        const endpoint = apiEndpoint.city.cityAirQualityData;
        const response = await axiosInstance.get(endpoint, {
            params: {
                city, state, country
            }
        });
        console.log(response);
        console.log(Object.keys(response));
        const data = response.data;

        return data;
    }

};

export default CityService;
