export interface VisualCrossingDay {
  datetime: string;
  temp: number;
  feelslike: number;
  humidity: number;
  windspeed: number;
  conditions: string;
  icon: string;
}

export interface VisualCrossingTimelineResponse {
  address: string;
  days: VisualCrossingDay[];
}
