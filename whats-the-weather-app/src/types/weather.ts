// Developer Note: I have mirrored the interfaces to match the responses for the weather stack

export interface WeatherStackLocation {
  name: string;
  country: string;
  region: string;
  lat: string;
  lon: string;
  timezone_id: string;
  localtime: string;
  localtime_epoch: number;
  utc_offset: string;
}

export interface WeatherStackCurrent {
  observation_time: string;
  temperature: number;
  weather_code: number;
  weather_icons: string[];
  weather_descriptions: string[];
  wind_speed: number;
  wind_degree: number;
  wind_dir: string;
  pressure: number;
  precip: number;
  humidity: number;
  cloudcover: number;
  feelslike: number;
}

export interface WeatherStackCurrentResponse {
  location: WeatherStackLocation;
  current: WeatherStackCurrent;
}

export interface DayWeather {
  date: string;
  temperature: number;
  feelsLike: number;
  description: string;
  iconUrl: string;
  humidity: number;
  windSpeed: number;
}

export interface WeatherData {
  current: DayWeather;
  forecast: DayWeather[];
  history: DayWeather[];
}
