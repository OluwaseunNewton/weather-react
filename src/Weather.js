import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  // create temp state
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [description, setDescription] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  // axios function
  function showTemperature(response) {
    console.log("response", response);
    setTemperature(Math.round(response.data.main.temp));
    setHumidity(response.data.main.humidity);
    setDescription(response.data.weather[0].description);
    setWind(response.data.wind.speed);
    let iconCode = response.data.weather[0].icon;
    setIcon(`http://openweathermap.org/img/wn/${iconCode}@2x.png`);
  }

  // form function
  function handleSubmit(event) {
    event.preventDefault();
    // axios info
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(showTemperature);
  }

  // city function
  function updateCity(event) {
    setCity(event.target.value);
  }

  //need a search bar and button
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a city"
          onChange={updateCity}
        />
        <input type="submit" />
      </form>
      {temperature ? (
        <ul>
          <li>Temperature: {temperature}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}</li>
          <li>Wind: {wind} km/hr</li>
          <li>
            <img src={icon} alt="weatherIcon" />
          </li>
        </ul>
      ) : null}
    </div>
  );
}
