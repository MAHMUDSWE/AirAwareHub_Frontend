import axiosInstance from "../utils/axios.util";
import apiEndpoint from "../utils/endpoint.util";

const mapService = {
    getMapData: async function () {
        const endpoint = apiEndpoint.map.mapData;
        const response = await axiosInstance.get(endpoint);
        return response.data;
    }

};

export default mapService;