import { Forecast } from "../objects/Forecast";
import ForecastRow from "./ForecastRow";
import React from 'react';

interface ForecastTableProps {
  forecasts: Forecast[];
}

export default class ForecastTable extends React.Component<ForecastTableProps> {
  render() {
    if (this.props.forecasts.length === 0) {
      return <div></div>;
    } else {
      return <table id="forecast-table">
        <thead>
          <tr>
            <th>Дата</th>
            <th>Температура</th>
            <th>Відчувається, як</th>
            <th>Швидкість вітру</th>
            <th>Погода</th>
          </tr>
        </thead>
        <tbody>
          {this.props.forecasts.map((item) => {
            return <ForecastRow forecast={item}/>;
          })}
        </tbody>
      </table>;
    }
  }
}