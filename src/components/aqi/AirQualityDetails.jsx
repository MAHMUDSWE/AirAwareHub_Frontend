import React from 'react';
import { getAQIColor } from '../../utils/aqiColors.util';
import { AQIHorizontalBar } from './AqiHorizontalBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';

const AirQualityDetails = ({ airqualitydata }) => {
    const {
        city,
        state,
        country,
        coordinates,
        ts,
        pollution,
        weather,
    } = airqualitydata;

    const date = new Date(ts);

    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    return (
        <div className='mt-6 mx-auto justify-center flex flex-col items-center bg-gray-100'>
            <div className=' flex items-center justify-center'>
                <span className='text-lg font-bold'><span className='text-[#FF69B4]'>{city}</span> Real-Time Air Quality Index (AQI)</span> <br />
            </div>
            <div className="flex py-2 pl-6 pr-8 hover:bg-indigo-50 justify-between items-center gap-2">
                <span className="line-clamp-2"><FontAwesomeIcon icon={faLocation} /> {city},  {country}</span>
            </div>
            <div className="flex py-2 pl-6 pr-8 hover:bg-indigo-50 justify-between items-center gap-2">
                <span className="line-clamp-2">Last Update:  {formattedDate}</span>
            </div>

            <div className='flex flex-col sm:flex-row gap-5 mt-4'>
                <div className="max-w-[550px] bg-white px-6 py-4">
                    <h2 className="text-lg font-semibold mb-2">Air Pollution</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>AQI (US)</strong>
                                </td>
                                <td>:{pollution.aqius}</td>
                            </tr>
                            <tr>
                                <td >
                                    <strong>Main Pollutant (US)</strong>
                                </td>
                                <td className={`text-[${getAQIColor(pollution.aqius)}]`}
                                >:{pollution.mainus}</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>AQI (China)</strong>
                                </td>
                                <td>:{pollution.aqicn}</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Main Pollutant (China)</strong>
                                </td>
                                <td>:{pollution.maincn}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className=" sm:ml-5 max-w-[550px] bg-white px-6 py-4">
                    <h2 className="text-lg font-semibold mb-2">Weather Information</h2>
                    <table className="table-auto">
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Temperature:</strong>
                                </td>
                                <td>{weather.tp}°C</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Pressure:</strong>
                                </td>
                                <td>{weather.pr} hPa</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Humidity:</strong>
                                </td>
                                <td>{weather.hu}%</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Wind Speed:</strong>
                                </td>
                                <td>{weather.ws} m/s</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Wind Direction:</strong>
                                </td>
                                <td>{weather.wd}°</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <AQIHorizontalBar />
            <span className='bg-slate-200 rounded-lg py-1 px-2'>AQI US legend</span>
            <div>

            </div>
        </div>
    );
};

export default AirQualityDetails;

