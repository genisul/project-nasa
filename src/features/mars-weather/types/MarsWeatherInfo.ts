export type MarsSeason =
  | 'Month 1'
  | 'Month 2'
  | 'Month 3'
  | 'Month 4'
  | 'Month 5'
  | 'Month 6'
  | 'Month 7'
  | 'Month 8'
  | 'Month 9'
  | 'Month 10'
  | 'Month 11'
  | 'Month 12'

export enum AtmoOpacity {
  Sunny = 'Sunny',
  Unknown = '--',
}

export enum LocalUvIrradianceIndex {
  Moderate = 'Moderate',
  High = 'High',
  Low = 'Low',
  Very_High = 'Very_High',
  Unknown = '--',
}

export interface MarsWeatherInfo {
  id: string
  terrestrial_date: string
  sol: string
  ls: string
  season: MarsSeason
  min_temp: string
  max_temp: string
  pressure: string
  pressure_string: string
  abs_humidity: string
  wind_speed: string
  wind_direction: string
  atmo_opacity: AtmoOpacity
  sunrise: string
  sunset: string
  local_uv_irradiance_index: LocalUvIrradianceIndex
  min_gts_temp: string
  max_gts_temp: string
}
