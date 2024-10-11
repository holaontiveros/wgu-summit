import Header from "components/Header";
import React, { useContext, useEffect, useState } from "react";
import { WeatherContext } from "App";
import useWeather from "utils/hooks/useWeather";
import WeatherWidget, { getParsedWeatherDate } from "components/Weather";
import { MapPinIcon } from "@heroicons/react/20/solid";

const WeatherWeek = () => {
  const { weather, isLoading } = useWeather(WeatherContext);

  const [currentDay, setCurrentDay] = useState(null);

  useEffect(() => {
    if (!weather) {
      return;
    }
    setCurrentDay(weather.current);
  }, [weather]);

  return (
    <div className="min-h-screen">
      <Header title="Guadalajar's Weather Now"></Header>

      <div className="container flex flex-col gap-6 px-6">
        <div className="rounded-lg bg-secondary-500 bg-opacity-70 p-6 text-white">
          <div className="flex items-start justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 font-semibold">
                <MapPinIcon className="h-6 w-6"></MapPinIcon>{" "}
                {weather?.location.name}, {weather?.location.country} .
              </div>
              <div className="flex text-2xl font-bold">
                {currentDay?.temp_c}°C - {currentDay?.temp_f}°F
              </div>
            </div>
            <div className="block rounded-full border-2 border-white from-slate-50 to-slate-200 p-2 bg-radient-circle-c">
              <img
                className="h-22 w-22 rounded-full"
                src={currentDay?.condition.icon}
                alt={currentDay?.condition.text}
              />
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-secondary-500 bg-opacity-70 p-6 text-white">
          <WeatherWidget></WeatherWidget>
        </div>
      </div>
    </div>
  );
};

export default WeatherWeek;
