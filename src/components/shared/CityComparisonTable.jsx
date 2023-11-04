import React from 'react'

export default function CityComparisonTable({ firstCityData, secondCityData }) {

    return (

        <>
            <div className='text-center mx-auto'> <span className='font-bold text-lg'>City Comparison Table</span></div>

            <table className='w-full mt-4'>
                <thead >
                    <tr>
                        <th className='text-center'>Index</th>
                        <th className='text-center'>Dhaka</th>
                        <th className='text-center'>Mumbai</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        Object.keys(firstCityData).filter((key)=>key!="ts").map((key) => (
                            <tr key={key}>
                              <td  className='text-center '>{key}</td>
                              <td  className='text-center '>{firstCityData[key]}</td>
                              <td  className='text-center '>{secondCityData[key]}</td>
                            </tr>
                          ))
                    }
                </tbody>
            </table>
        </>
    )
}
