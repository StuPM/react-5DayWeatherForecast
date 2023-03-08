import React, { Component } from "react";
import axios from "axios";
import "../App.scss";

class Forecast extends Component {
  state = { test: "TEST", filteredWeather: [] };

  async componentDidMount() {
    const success = async ({ coords }) => {
      const lat = coords.latitude;
      const lon = coords.longitude;
      const units = `metric`;
      const resultCount = 3;
      const apiKey = `db9f0fffb47e5ae21795c55afdc6a165`;

      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=${resultCount}&units=${units}&appid=${apiKey}`
      );

      const filteredWeather = data.list.map(function (fore) {
        return [
          fore.dt_txt,
          fore.main.temp,
          fore.main.feels_like,
          fore.weather[0].description,
          fore.weather[0].icon,
        ];
      });

      this.setState({ filteredWeather });
    };

    navigator.geolocation.getCurrentPosition(success);
  }

  render() {
    const weatherList = this.state.filteredWeather;

    return (
      <>
        {weatherList.map((element) => (
          // <p>{element[0]} - </p>
          <div class="forecastTile">
            <div class="forecastDate">{element[0]}</div>
            <div class="forecastTempDescriptionContainer">
              <div class="forecastTempContainer">
                <div class="forecastActualTempContainer">
                  <div>Actual temp:</div>
                  <div>
                    {element[1]}
                    {"\u2103"}
                  </div>
                </div>
                <div class="forecastFeelsLikeTempContainer">
                  <div>Feels like:</div>
                  <div>
                    {element[2]}
                    {"\u2103"}
                  </div>
                </div>
              </div>
              <img
                class="forecastIcon"
                src={"https://openweathermap.org/img/wn/element[4]@2x.png"}
              />
            </div>
            <div class="forecastDescription">{element[3]}</div>
          </div>
        ))}
      </>
    );
  }
}

export default Forecast;
