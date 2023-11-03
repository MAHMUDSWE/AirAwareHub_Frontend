
import React, { useState } from 'react';

function ToggleSwitch() {
    const [activeValue, setActiveValue] = useState('us');

    const toggleValue = () => {
        setActiveValue(activeValue === 'us' ? 'ch' : 'us');
    };

    return (
        <div className="flex items-center">
            <span
                className={`text-sm font-semibold cursor-pointer ${activeValue === 'us' ? 'text-blue-500' : 'text-gray-600'
                    }`}
                onClick={() => setActiveValue('us')}
            >
                AQI-US
            </span>
            <label className="relative mx-2 w-10 h-6 bg-gray-400 rounded-full">
                <input
                    type="checkbox"
                    className="opacity-0 w-0 h-0"
                    checked={activeValue === 'ch'}
                    readOnly
                />
                <span
                    className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${activeValue === 'ch' ? 'translate-x-full' : 'translate-x-0'
                        } cursor-pointer`}
                    onClick={toggleValue}
                />
            </label>
            <span
                className={`text-sm font-semibold cursor-pointer ${activeValue === 'ch' ? 'text-blue-500' : 'text-gray-600'
                    }`}
                onClick={() => setActiveValue('ch')}
            >
                AQI-CN
            </span>
        </div>
    );
}

export default ToggleSwitch;
