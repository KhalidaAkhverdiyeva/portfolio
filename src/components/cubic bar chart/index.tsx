"use client";

import React from "react";

interface CircularProgressProps {
  percentage: number; // Percentage of progress (0-100)
  size?: number; // Size of the donut (in pixels)
  strokeWidth?: number; // Stroke width of the circle
  color?: string; // Color of the progress ring (default: green)
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  size = 100,
  strokeWidth = 10,
  color = "green",
}) => {
  // Calculate stroke-dasharray and stroke-dashoffset values
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {/* Background Circle */}
      <svg
        className="absolute"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e0e0e0"
          strokeWidth={strokeWidth}
          fill="none"
        />
      </svg>

      {/* Foreground Circle (Progress) */}
      <svg
        className="absolute transform -rotate-90"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>

      {/* Center Text */}
      <div className="absolute text-xl font-semibold text-gray-800">
        {percentage}%
      </div>
    </div>
  );
};

export default CircularProgress;
