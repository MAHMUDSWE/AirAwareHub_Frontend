const apiEndpoint = {
    base: import.meta.env.VITE_API_HOST,

    city: {
        topTenPollutedCity: "/top-10-polluted-city",
        topTenCleanCity: "/top-10-clean-city"
    }
};

export default apiEndpoint;