import { Forecast } from "../objects/Forecast";
import React from "react";

interface ForecastRowProps {
  forecast: Forecast;
}

export default class ForecastRow extends React.Component<ForecastRowProps> {
  render() {
    return <tr>
      <td>{this.props.forecast.date}</td>
      <td>{this.props.forecast.temperature + '°C'}</td>
      <td>{this.props.forecast.feelsLike + '°C'}</td>
      <td>{this.props.forecast.windSpeed + 'м/c'}</td>
      <td>{this.props.forecast.weatherInfo}</td>
    </tr>;
  }
}