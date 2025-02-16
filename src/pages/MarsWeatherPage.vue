<template>
  <LatestWeatherOfMarsSection />
  <WeatherListOfMarsSection />
  <WeatherChartSection />
  <SeasonIndicator />
</template>

<script lang="ts">
import {
  LatestWeatherOfMarsSection,
  SeasonIndicator,
} from '@/features/mars-weather/components'
import { WeatherListOfMarsSection } from '@/features/mars-weather/components'
import { WeatherChartSection } from '@/features/mars-weather/components'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    LatestWeatherOfMarsSection,
    WeatherListOfMarsSection,
    WeatherChartSection,
    SeasonIndicator,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
