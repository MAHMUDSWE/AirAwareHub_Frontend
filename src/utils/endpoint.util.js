const apiEndpoint = {
    base: import.meta.env.VITE_API_HOST,

    city: {
        topTenPollutedCity: "/api/v1/top-10-polluted-city",
        topTenCleanCity: "/api/v1/top-10-clean-city",
        listOfCities: "/api/v1/search-city",
        cityAirQualityData: "/api/v1/city"
    },
    map: {
        mapData: "/api/v1/map-view"
    }
};

export default apiEndpoint;