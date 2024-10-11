import * as localForage from "localforage";
import React, { useContext, useEffect, useState } from "react";

const WeatherKeyEnv = process.env.REACT_APP_WEATHER_API_KEY;

window.localForage = localForage;

const useWeather = (WeatherContext) => {
  const { weather, setWeather } = useContext(WeatherContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStoredWeather = async () => {
      const storedWeather = await localForage.getItem("weather");
      const storedWeatherDate = await localForage.getItem("weatherDate");
      if (storedWeather) {
        setWeather(storedWeather);
      }

      // if weather was stored more than an 30 mins ago, fetch new weather data
      const partsedStoredDate = new Date(storedWeatherDate);
      const now = new Date();

      if (storedWeather && now - partsedStoredDate < 1000 * 60 * 30) {
        setIsLoading(false);
        return;
      }

      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${WeatherKeyEnv}&q=Guadalajara&days=8&aqi=no&alerts=no`,
      )
        .then((response) => response.json())
        .then((data) => {
          setWeather(data);
          localForage.setItem("weather", data);
          localForage.setItem("weatherDate", new Date());
        })
        .catch((error) => {
          console.log("Error while fetching weather data");
        });

      setIsLoading(false);
    };

    fetchStoredWeather();
  }, [WeatherKeyEnv, setWeather]);

  return { weather, isLoading };
};

export default useWeather;
