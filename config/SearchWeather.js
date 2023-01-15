import React, { useEffect, useState } from "react";
import { WEATHER_URL, WEATHER_API_KEY } from "@env";

export function SearchWeather(city) {
  const [error, setError] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    fetch(`${WEATHER_URL}?q=${city}&appid=${WEATHER_API_KEY}`)
      .then((res) => res.json())
      .then((res) => setResult(res))
      .catch((err) => setError(err));
  }, [city]);

  return result;
}
