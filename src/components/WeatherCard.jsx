import React from 'react';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  const {
    name,
    main: { temp, humidity },
    weather,
    wind: { speed },
    dt
  } = weatherData;

  const date = new Date(dt * 1000).toLocaleString();

  return (
    <div className="p-4 mt-4 bg-teal-900 dark:bg-gray-700 dark:text-yellow-500 text-yellow-600 shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p>{date}</p>
      <p className="text-3xl font-bold mb-2">{temp}°C</p>
      <p>{weather[0].description}</p>
      <div className="flex justify-between mt-4">
        <p>Humidity: {humidity}%</p>
        <p>Wind Speed: {speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;
