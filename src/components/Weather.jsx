import React, { useState, useEffect } from "react";

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const WeatherKeyEnv = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${WeatherKeyEnv}&q=Guadalajara&days=4&aqi=no&alerts=no`,
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, []);

  const getParsedDate = (date) => {
    const parsedDate = new Date(date);
    // return formated date as "Mon 01" Weekday and day of the month
    return `${parsedDate.toDateString().slice(0, 3)} ${parsedDate.getDate()}`;
  };

  return (
    <div className="flex justify-between text-black">
      {/* for each item in weather forcast */}
      {weather?.forecast?.forecastday.map((day, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2 text-center text-sm text-slate-500"
        >
          <div className="font-semibold uppercase">
            {getParsedDate(day.date)}
          </div>
          <div className="inline-block rounded-full border-2 border-white from-slate-50 to-slate-200 p-2 bg-radient-circle-c">
            <img
              className="h-10 w-10 rounded-full"
              src={day.day.condition.icon}
              alt={day.day.condition.text}
            />
          </div>
          <div>
            {index == 0 && <span className="font-bold">C </span>}
            {Math.floor(day.day.mintemp_c)}° - {Math.round(day.day.maxtemp_c)}°
          </div>
          <div>
            {index == 0 && <span className="font-bold">F </span>}
            {Math.floor(day.day.mintemp_f)}° - {Math.round(day.day.maxtemp_f)}°
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherWidget;
