import React, { useEffect, useState } from 'react'
import Navbar from '../components/nav/navbar'
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import CityService from '../services/city.service';
import AirQualityDetails from '../components/aqi/AirQualityDetails';
import { toast } from 'react-toastify';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function () {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const city = queryParams.get('city');
    const state = queryParams.get('state');
    const country = queryParams.get('country');
    const [airQualityData, setAirQualityData] = useState(null);

    const { data, isError } = useQuery({
        enabled: !!city,
        queryKey: ['isFetching', 'getAirQualityData', city],
        queryFn: async () => await CityService.getAirQualityDataOfCity({ city, state, country }),
        staleTime: 15000
    });
    useEffect(() => {
        if (data) {
            console.log(data);
            setAirQualityData(data);
        }
    }, [data]);
    useEffect(() => {
        if (isError) {
            toast.error('Something went wrong!');
        }
    }, [isError]);
    return (
        <>
            <Navbar />
            {(isError || data?.data == "") && <div className='mt-6 mx-auto justify-center flex flex-col items-center bg-gray-100'>
                <div className=' flex items-center justify-center'>
                    <span className='text-lg font-bold'><span className='text-[#FF69B4]'>{city}</span> Real-Time Air Quality Index (AQI)</span> <br />
                </div>
                <div className="flex py-2 pl-6 pr-8 hover:bg-indigo-50 justify-between items-center gap-2">
                    <span className="line-clamp-2"><FontAwesomeIcon icon={faLocation} /> {city},  {country}</span>
                </div>
            </div>}
            {airQualityData && <AirQualityDetails airqualitydata={airQualityData} />}
        </>
    )
}
