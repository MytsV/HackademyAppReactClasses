import { ForecastResponse } from "./ForecastResponse";

export class Forecast {
    private _date: string;
    
    public get date(): string {
        return this._date;
    }
    private _temperature: string;

    public get temperature(): string {
        return this._temperature;
    }
    
    private _feelsLike: string;

    public get feelsLike(): string {
        return this._feelsLike;
    }

    private _windSpeed: string;
    
    public get windSpeed(): string {
        return this._windSpeed;
    }

    private _weatherInfo: string;

    public get weatherInfo(): string {
        return this._weatherInfo;
    }

    public constructor(response: ForecastResponse) {
        this._date = response.dt_txt;
        this._temperature = response.main.temp;
        this._feelsLike = response.main.feels_like;
        this._windSpeed = response.wind.speed;
        this._weatherInfo = response.weather[0].main;
    }
}