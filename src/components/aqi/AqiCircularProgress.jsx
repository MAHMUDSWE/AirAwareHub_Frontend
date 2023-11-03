import React from 'react';
import { getAQIColor, getAQILabel } from '../../utils/aqiColors.util';

const AQICircularProgress = ({ aqi, maxValue }) => {

    const percentage = (aqi / maxValue) * 100;
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = ((100 - percentage) / 100) * circumference;


    const svgWidth = 2 * (radius + 16);
    const svgHeight = 2 * (radius + 16);

    return (
        <svg width={svgWidth} height={svgHeight}>
            <circle
                cx={radius + 16}
                cy={radius + 16}
                r={radius}
                fill="transparent"
                stroke="#ccc"
                strokeWidth="8"
            />
            <circle
                cx={radius + 16}
                cy={radius + 16}
                r={radius}
                fill="transparent"
                stroke={`${getAQIColor(aqi)}`}
                strokeWidth="8"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
            />
            <text x={radius + 16} y={radius + 16} textAnchor="middle" fontSize="16">
                {aqi}
            </text>
            <text x={radius + 16} y={radius + 16 + radius + 14} textAnchor="middle" fontSize="14" fill={`${getAQIColor(aqi)}`}>
                {getAQILabel(aqi)}
            </text>

        </svg>
    );
};

export default AQICircularProgress;
