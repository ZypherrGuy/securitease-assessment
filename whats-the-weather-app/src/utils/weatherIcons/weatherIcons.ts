const WEATHER_ICON_BASE = "/assets/icons/weather";

const WEATHER_ICONS: Record<string, string> = {
  "clear-day": `${WEATHER_ICON_BASE}/clear-day.png`,
  "clear-night": `${WEATHER_ICON_BASE}/clear-night.png`,
  cloudy: `${WEATHER_ICON_BASE}/cloudy.png`,
  fog: `${WEATHER_ICON_BASE}/fog.png`,
  hail: `${WEATHER_ICON_BASE}/hail.png`,
  "partly-cloudy-day": `${WEATHER_ICON_BASE}/partly-cloudy-day.png`,
  "partly-cloudy-night": `${WEATHER_ICON_BASE}/partly-cloudy-night.png`,
  rain: `${WEATHER_ICON_BASE}/rain.png`,
  "showers-day": `${WEATHER_ICON_BASE}/rain.png`,
  "showers-night": `${WEATHER_ICON_BASE}/showers-night.png`,
  "rain-snow": `${WEATHER_ICON_BASE}/rain-snow.png`,
  "rain-snow-showers-day": `${WEATHER_ICON_BASE}/rain-snow.png`,
  "rain-snow-showers-night": `${WEATHER_ICON_BASE}/rain-snow.png`,
  sleet: `${WEATHER_ICON_BASE}/rain-snow.png`,
  snow: `${WEATHER_ICON_BASE}/snow.png`,
  "snow-showers-day": `${WEATHER_ICON_BASE}/snow.png`,
  "snow-showers-night": `${WEATHER_ICON_BASE}/snow.png`,
  thunder: `${WEATHER_ICON_BASE}/thunder.png`,
  "thunder-rain": `${WEATHER_ICON_BASE}/thunder-rain.png`,
  "thunder-showers-day": `${WEATHER_ICON_BASE}/thunder-rain.png`,
  "thunder-showers-night": `${WEATHER_ICON_BASE}/thunder-rain.png`,
  wind: `${WEATHER_ICON_BASE}/wind.png`,
};

export function getWeatherIconUrl(icon: string): string {
  return WEATHER_ICONS[icon] ?? WEATHER_ICONS.cloudy; // this is just a temporary fallback - I will think of something
}
