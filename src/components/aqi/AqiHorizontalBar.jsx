import React from 'react';
import { aqiLevels } from '../../utils/aqiColors.util';

const AQIHorizontalBar = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-center items-center text-center">
            {aqiLevels.map((level, index) => (
                <div key={index} className="flex flex-col items-center">
                    <div

                        className=" w-[84px] h-2 flex items-center justify-center"
                        style={{
                            backgroundColor: level.color,
                            color: index < aqiLevels.length - 1 ? 'white' : 'black',
                        }}
                    ></div>
                    <div className="mt-1 text-sm">{level.label}</div>
                </div>
            ))}
        </div>
    );
};

export { AQIHorizontalBar };
