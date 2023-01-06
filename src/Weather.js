import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [inputcity, setCity] = useState("");
  const [flag, setFlag] = useState(false);

  const [temp, setTemp] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);
  let form = (
    <form onSubmit={handleSearch}>
      <input type="search" placeholder="Enter a city.." onChange={upDateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  function upDateCity(event) {
    setCity(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    let urlApi = `https://api.shecodes.io/weather/v1/current?query=${inputcity}&key=4e3d43265f7f3448fot5bf7a6b40260b&units=metric`;
    axios.get(urlApi).then(handleResponse);
  }

  function handleResponse(response) {
    setTemp(response.data.temperature.current);
    setDescription(response.data.condition.description);
    setHumidity(response.data.temperature.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
    );
    setFlag(true);
  }

  if (flag) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(temp)}</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity} %</li>
          <li>Wind: {wind} km/h</li>
          <li>
            <img src={icon} alt="icon"></img>{" "}
          </li>
        </ul>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
