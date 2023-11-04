import React from 'react';
import Navbar from '../components/nav/navbar';

const CitySocialEconomicFactors = () => {
    const cityData = [
        {
            city: 'Dhaka',
            aqius: 182,
            socialFactors: {
                totalGdp: 40000000000,
                gdpPerCapita: 1200,
                gdpGrowth: 5.2,
                totalPopulation: 160000000,
                populationGrowth: 1.8,
            },
        },
        {
            city: 'Mumbai',
            aqius: 168,
            socialFactors: {
                totalGdp: 40000000000,
                gdpPerCapita: 1200,
                gdpGrowth: 5.2,
                totalPopulation: 160000000,
                populationGrowth: 1.8,
            },
        },
        {
            city: 'Oslo',
            aqius: 4,
            socialFactors: {
                totalGdp: 80000000000,
                gdpPerCapita: 1500,
                gdpGrowth: 6.0,
                totalPopulation: 200000000,
                populationGrowth: 2.0,
            },
        }
    ];

    return (
        <>
            <Navbar />
            <div className="container mx-auto">
                <h1 className="text-2xl font-semibold my-4">City Social & Economic Factors</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {cityData.map((data, index) => (
                        <div key={index} className="bg-white rounded p-4 shadow-md">
                            <h2 className="text-lg font-semibold mb-2">{data.city}</h2>
                            <ul>
                                <li>Total GDP: {data.socialFactors.totalGdp} USD</li>
                                <li>GDP per Capita: {data.socialFactors.gdpPerCapita} USD</li>
                                <li>GDP Growth: {data.socialFactors.gdpGrowth}%</li>
                                <li>Total Population: {data.socialFactors.totalPopulation}</li>
                                <li>Population Growth: {data.socialFactors.populationGrowth}%</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CitySocialEconomicFactors;
