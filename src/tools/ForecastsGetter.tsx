import WeatherApiResponse from "../objects/WeatherApiResponse";
import jQuery from 'jquery';
import $ from 'jquery';

export default class WeatherApi {
    //sorry for using an api key on client side :(
    private static api_key: string = 'f3af2975bdd05e1ed2778f6194218676';
    private static units: string = 'metric';
    private static request_url: string = 'https://api.openweathermap.org/data/2.5/forecast';

    private city: string;

    public constructor(city: string) {
        this.city = city;
    }

    public getForecasts(onResponse: CallableFunction): void {
        let params = this.getQueryParams();
        const settings = this.getQuerySettings(params);
    
        $.ajax(settings).done(function (response: WeatherApiResponse) {
            onResponse(response);
        }).catch((error) => {
            alert('Місто не знайдено');
        });
    }

    private getQueryParams(): string {
        return jQuery.param({
            q: this.city,
            units: WeatherApi.units,
            appid: WeatherApi.api_key
        });
    }

    private getQuerySettings(params: string): Object {
        return {
            "async": true,
            "crossDomain": true,
            "data": params,
            "url": WeatherApi.request_url,
            "method": "GET",
        };
    }
}