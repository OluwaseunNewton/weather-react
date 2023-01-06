import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <br />
      <br />
      <br />
      <hr />
      <p>
        This code is{" "}
        <a
          href="https://github.com/OluwaseunNewton/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          open-source
        </a>
        , created by Oluwaseun Newton 🤠
      </p>
    </div>
  );
}
