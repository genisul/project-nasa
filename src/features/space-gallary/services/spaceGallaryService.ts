import { ApiClient } from '@/shared/services'
import type { Apod } from '../types'

const baseUrl = '/api/apod'
const nasaApi = new ApiClient(baseUrl)

export const spaceGallaryService = {
  getApod: async () => {
    const response = await nasaApi.get<Apod>('')
    return response
  },
  getApodRange: async (startDate?: string, endDate?: string) => {
    const response = await nasaApi.get<Apod[]>('', {
      params: {
        start_date: startDate,
        end_date: endDate,
      },
    })
    return response
  },
}
