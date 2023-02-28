import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = { weather: [] };

  async componentDidMount() {
    const success = async ({ coords }) => {
      console.log(coords);

      const lat = coords.latitude;
      const lon = coords.longitude;
      const units = `metric`;
      const resultCount = 3;
      const apiKey = `db9f0fffb47e5ae21795c55afdc6a165`;

      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=${resultCount}&units=${units}&appid=${apiKey}`
      );

      this.state.weather = data;
    };

    navigator.geolocation.getCurrentPosition(success);
  }

  render() {
    console.log(this.state.weather);

    return (
      <>
        <h1>hello</h1>
      </>
    );
  }
}

export default App;
