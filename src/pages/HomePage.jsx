import React, { useState } from 'react';
import Navbar from '../components/nav/navbar';
import { getAQIColor, getAQILabel } from '../utils/aqiColors.util';
import { AQIHorizontalBar } from '../components/aqi/AqiHorizontalBar';
import AQICircularProgress from '../components/aqi/AqiCircularProgress';

export default function HomePage() {
    const [rankingType, setRankingType] = useState('mostPolluted');

    const cityRankings = [
        { locationid: 1, cityName: 'City 1', aqi: 50 },
        { locationid: 1, cityName: 'City 1', aqi: 70 },
        { locationid: 2, cityName: 'City 2', aqi: 100 },
        { locationid: 3, cityName: 'City 3', aqi: 150 },
        { locationid: 4, cityName: 'City 4', aqi: 250 },
        { locationid: 4, cityName: 'City 4', aqi: 200 },
        { locationid: 5, cityName: 'City 5', aqi: 300 },
        { locationid: 6, cityName: 'City 6', aqi: 330 },
        { locationid: 6, cityName: 'City 6', aqi: 260 },
        { locationid: 6, cityName: 'City 6', aqi: 400 },
    ];

    return (
        <>
            <Navbar />
            <div className='mt-6 mx-auto justify-center flex flex-col-reverse sm:flex-row bg-gray-100'>
                <div className='max-w-[550px]'>
                    <div className='bg-white px-6 py-4'>
                        {/* <span className='text-lg font-semibold'>World Most Polluted Cities</span> <br /> */}
                        <span className='text-lg font-bold'>Live Air Quality Ranking</span> <br />
                        <span className='text-sm text-gray-800'>
                            Air Quality Index depicts the extent of air pollution at a particular location. These are world rankings of cities with the best or worst air quality in real-time. Find out whether your location is among the most polluted or cleanest.
                        </span>

                        <div className='mt-2 flex flex-col gap-2 sm:flex-row justify-evenly'>
                            <button
                                className={`px-2 py-1 rounded-lg ${rankingType === 'mostPolluted'
                                    ? 'bg-primary text-white hover:bg-primaryHover'
                                    : 'bg-white border border-black text-black hover:bg-gray-300'
                                    }`}
                                onClick={() => setRankingType('mostPolluted')}
                            >
                                Top 10  Most Polluted City
                            </button>
                            <button
                                className={`px-2  py-1 rounded-lg ${rankingType === 'cleanest'
                                    ? 'bg-primary text-white hover:bg-primaryHover'
                                    : 'bg-white border border-black  text-black hover:bg-gray-300'
                                    }`}
                                onClick={() => setRankingType('cleanest')}
                            >
                                Top 10 Cleanest City
                            </button>
                        </div>
                    </div>

                    <div className='bg-white px-6 py-4 mt-4'>
                        <h2 className='text-lg font-semibold text-center'>
                            {rankingType === 'mostPolluted'
                                ? 'Most Polluted Cities'
                                : 'Cleanest Cities'}
                        </h2>

                        <div className='h-96 overflow-y-auto'>
                            <table className='w-full text-center'>
                                <thead className='sticky top-0 bg-white'>
                                    <tr >
                                        <th className='text-center '>Rank</th>
                                        <th className='text-center'>City Name</th>
                                        <th className='text-center'>AQI</th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    {cityRankings

                                        .sort((a, b) => (rankingType === 'cleanest' ? a.aqi - b.aqi : b.aqi - a.aqi))
                                        .slice(0, 10)
                                        .map((city, index) => (
                                            <tr key={index} className=''>
                                                <td className='py-2 mt-1'>{index + 1}</td>
                                                <td>{city.cityName}</td>
                                                <td className='mt-1' style={{ backgroundColor: getAQIColor(city.aqi) }}>
                                                    {city.aqi}
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='mt-4'>
                            <AQIHorizontalBar />
                        </div>

                    </div>
                    <div className='text-center border border-b rounded-b-md py-2 text-white bg-primary mb-4'>
                        View Full Ranking
                    </div>


                </div>

                <div className='max-w-[550px] mb-7 sm:ml-7'>
                    <div className='bg-white px-6 py-4'>
                        <span className='text-lg font-bold'><span className='text-[#FF69B4]'>Dhaka Banani</span> Real-Time Air Quality Index(AQI)</span> <br />

                        <span className='text-sm text-gray-800'>
                            Current air pollution level and weather condition of your location with the aggregate levels of major air pollutants in the ambient air.
                        </span>

                        <div className=''>
                            <AQICircularProgress aqi={270} maxValue={360} />
                            {/* <span>{getAQILabel(270)}</span> */}
                        </div>
                    </div>



                </div>
            </div>
        </>
    );
}
