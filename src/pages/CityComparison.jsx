import React, { useState } from 'react'
import Select from 'react-select';
import '../styles/styles.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList } from 'recharts';
import CityComparisonTable from '../components/shared/CityComparisonTable';
import Navbar from '../components/nav/navbar';
import { getAQIColor } from '../utils/aqiColors.util';

export default function CityComparison() {
    const [firstSelectedCity, setFirstSelectedCitie] = useState();
    const [secondSelectedCity, setSecondSelectedCitie] = useState();
    const [showGraph, setShowGraph] = useState(false);
    const cities = [
        { label: 'Bangladesh', value: 'bd' },
        { label: 'India', value: 'ind' },
        { label: 'United State', value: 'us' },
    ];

    const firstCityData =
    {
        "ts": "2019-08-05T03:00:00.000Z",
        "aqius": 41,
        "aqicn": 14,
        "tp": 25,
        "tp_min": 25,
        "pr": 962,
        "hu": 65,
        "ws": 1,
        "wd": 228,
        "ic": "03n"
    };
    const secondCityData = {
        "ts": "2019-08-05T06:00:00.000Z",
        "aqius": 68,
        "aqicn": 29,
        "tp": 22,
        "tp_min": 22,
        "pr": 962,
        "hu": 74,
        "ws": 0,
        "wd": 253,
        "ic": "10n"
    };
    const data = [
        {
            name: 'AQI',
            firstCity: firstCityData.aqius,
            secondCity: secondCityData.aqius,
        },
    ];

    const compare = () => {
        if (firstSelectedCity && secondSelectedCity) {
            console.log(firstCityData.aqicn);
            console.log(secondCityData.aqicn);

            setShowGraph(true);
        }
    };

    return (<>
        <Navbar />
        <div className='mt-6 mx-auto justify-center flex flex-col-reverse sm:flex-row bg-gray-100'>
            <div className='main'>
                <div className='text-center mx-auto'> <span className='font-bold text-lg'>Select two cities</span></div>
                <div className='selectCityContainer'>
                    <Select
                        className='citySelect'
                        options={cities}
                        onChange={setFirstSelectedCitie}
                    />

                    <Select
                        className='citySelect'
                        options={cities}
                        onChange={setSecondSelectedCitie}
                    />
                </div>
                <button className='compareButton' onClick={compare}>Compare</button>

                <BarChart width={400} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="firstCity" fill={getAQIColor(firstCityData.aqius)} barSize={30}>
                        <LabelList dataKey="firstCity" position="top" />
                    </Bar>
                    <Bar dataKey="secondCity" fill={getAQIColor(secondCityData.aqius)} barSize={30}>
                        <LabelList dataKey="secondCity" position="top" />
                    </Bar>
                </BarChart>

                <CityComparisonTable firstCityData={firstCityData} secondCityData={secondCityData} />

            </div>
        </div>
    </>
    )
}