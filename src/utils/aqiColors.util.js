const aqiLevels = [
    { label: 'Good', color: '#00E400', maxAqi: 50 },
    { label: 'Moderate', color: '#FFFF00', maxAqi: 100 },
    { label: 'Poor', color: '#FF7E00', maxAqi: 150 },
    { label: 'Unhealthy', color: '#FF0000', maxAqi: 200 },
    { label: 'Severe', color: '#8B008B', maxAqi: 300 },
    { label: 'Hazardous', color: '#7E0023' },
];

const getAQIColor = (aqi) => {
    for (const level of aqiLevels) {
        if (aqi <= level.maxAqi || !level.maxAqi) {
            return level.color;
        }
    }
    return aqiLevels[aqiLevels.length - 1].color;
};

const getAQILabel = (aqi) => {
    for (const level of aqiLevels) {
        if (aqi <= level.maxAqi || !level.maxAqi) {
            return level.label;
        }
    }
    return aqiLevels[aqiLevels.length - 1].label;
};

export { aqiLevels, getAQILabel, getAQIColor };
