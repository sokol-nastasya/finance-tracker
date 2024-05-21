import React from "react";

import './CircularProgress.css';

function CircularProgress({ percentage }) {
    const radius = 100;
    const stroke = 10;
    const normalizedRadius = radius - stroke*2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference; 
    const strokeColor = percentage > 50 ? 'green' : 'tomato';

    return (
        <div className="circle">
            <svg height={radius * 2} width={radius * 2}>
                <circle
                    stroke="lightgray"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <circle
                    stroke={strokeColor}
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeDasharray={`${circumference} ${circumference}`}
                    style={{ strokeDashoffset }}
                    strokeLinecap="round"
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dy=".3em"
                    fontSize="20px"
                    fill="#444"
                >
                    {percentage}%
                </text>
            </svg>
        </div>
    )
};

export default CircularProgress;