import React from "react"


export default class FetchWeather extends React.Component {


  state = {
    temp: null
  };

  async componentDidMount() {

    const url = "http://api.openweathermap.org/data/2.5/weather?id=" + this.props.countryId + "&appid=92cd0c11cf4b16aeda1776f3537e7d26";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ temp: data.main.temp })
  }



  render() {
    return (
      <div>
        {!this.state.temp ? <div>Loading...</div> : <div><div>Temperatura: {(this.state.temp - 273.15).toFixed(0)}</div>  </div>}
      </div>
    )
  }

}

