import React, { useEffect, useState } from 'react'
import AQICircularProgress from '../aqi/AqiCircularProgress'
import axios from 'axios';

export default function CurrentLocation() {
    const [location, setLocation] = useState('Dhaka');
    const [weatherData, setWeatherData] = useState({
        temperature: 25,
        localTime: new Date().toLocaleTimeString(),
    });

    useEffect(() => {

        const mockWeatherData = {
            temperature: 25,
            localTime: new Date().toLocaleTimeString(),
        };

        setWeatherData(mockWeatherData);
    }, [location]);

    if (!weatherData) {
        return <div>Loading weather data...</div>;
    }

    return (
        <div className='bg-white px-6 py-4'>
            <span className='text-lg font-bold'><span className='text-[#FF69B4]'>{location}</span> Real-Time Air Quality Index(AQI)</span> <br />

            <span className='text-sm text-gray-800'>
                Current air pollution level and weather condition of your location with the aggregate levels of major air pollutants in the ambient air.
            </span>

            <div className='flex flex-col sm:flex-row justify-evenly'>
                <div>
                    <AQICircularProgress aqi={200} maxValue={360} />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h2>Weather in {location}</h2>
                    <p>Temperature: {weatherData.temperature}°C</p>
                    <p>Local Time: {weatherData.localTime}</p>
                </div>
            </div>
        </div>
    )
}
