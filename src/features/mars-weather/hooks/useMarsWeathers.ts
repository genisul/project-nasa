import { useQuery } from '@tanstack/vue-query'
import { marsWeatherService } from '../services'
import { MARS_WEATHER_QUERY_KEYS } from '../constants'

export const useMarsWeather = () => {
  const { isPending, isError, data } = useQuery({
    queryKey: [MARS_WEATHER_QUERY_KEYS.MARS_WEATHER],
    queryFn: () => marsWeatherService.getMarsWeather(),
  })

  return { isPending, isError, data }
}
