import { ForecastResponse } from "./ForecastResponse";

export default interface WeatherApiResponse {
    list: ForecastResponse[];
}