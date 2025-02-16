import { ApiClient } from '@/shared/services'
import type { MarsWeatherInfo } from '../types'

const baseUrl = '/api/mars'
const marsWeatherApi = new ApiClient(baseUrl)

interface MarsWeatherResponse {
  description: Record<string, string>
  soles: MarsWeatherInfo[]
}

export const marsWeatherService = {
  getMarsWeather: async (): Promise<MarsWeatherInfo[]> => {
    const response = await marsWeatherApi.get<MarsWeatherResponse>('/', {
      params: {
        feed: 'weather',
        category: 'msl',
        feedtype: 'json',
      },
    })
    return response.soles
  },
}
