import React from "react";
import styles from './../css/darkinputs.module.css';
import { ForecastResponse } from "../objects/ForecastResponse";
import WeatherApiResponse from '../objects/WeatherApiResponse';
import { Forecast } from "../objects/Forecast";
import ForecastTable from "../components/ForecastTable"
import WeatherApi from "../tools/ForecastsGetter";
import Header from "../components/Header";
import MenuItemInfo from "../objects/MenuItemInfo";
import '../css/Weather.css';

interface WeatherProps {
}

interface WeatherState {
  location: string;
  forecasts: Forecast[];
}

class Weather extends React.Component<WeatherProps, WeatherState> {

  constructor(props: any) {
    super(props);
    this.state = { location: '', forecasts: [] };
  }

  handleChange = (event: React.ChangeEvent): void => {
    const input: any = event.target;
    this.setState({ location: input.value, forecasts: this.state.forecasts });
  }

  handleForecasts = () => {
    let api: WeatherApi = new WeatherApi(this.state.location);
    api.getForecasts(this.onResponse);
  };

  onResponse = (response: WeatherApiResponse) => {
    let list: ForecastResponse[] = response.list;
    let newForecasts: Forecast[] = [];
    list.forEach((item) => {
      newForecasts.push(new Forecast(item));
    });
    this.setState({ location: this.state.location, forecasts: newForecasts });
  };

  render() {
    return <div>
      <Header menuItems={[new MenuItemInfo('/', 
      'Головна'), new MenuItemInfo('/forecast', 'Погода')]} activeIndex={1}/>
      <h1 className='weather-headline py-5'>Прогноз погоди</h1>
      <input id="city" name="city" placeholder="Місто" onChange={this.handleChange} className={styles.field + ' block m-5'} />
      <input type="button" onClick={this.handleForecasts} value="Шукати" className="button block m-5" />
      <ForecastTable forecasts={this.state.forecasts}/>
    </div >
  }

}

export default Weather;