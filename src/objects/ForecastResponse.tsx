export interface ForecastResponse {
    dt_txt: string,
    main: ForecastMainInfo,
    wind: ForecastWindInfo,
    weather: ForecastWeatherInfo[]
}

interface ForecastMainInfo {
    temp: string,
    feels_like: string
}

interface ForecastWeatherInfo {
    main: string,
}

interface ForecastWindInfo {
    speed: string
}