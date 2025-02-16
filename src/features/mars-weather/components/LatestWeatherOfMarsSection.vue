<template>
  <section class="flex w-full flex-col items-center py-40">
    <SectionHeader
      title="Mars Weather"
      description="Please note: The weather information displayed here represents the most
      recent available data from Mars, not real-time conditions."
    />

    <LatestWeatherCard
      :atmo-opacity="data?.at(0)?.atmo_opacity"
      :min-temp="data?.at(0)?.min_temp"
      :max-temp="data?.at(0)?.max_temp"
      :terrestrial-date="data?.at(0)?.terrestrial_date"
    />
    <!-- <div>{{ data }}</div> -->
  </section>
</template>

<script lang="ts">
import SectionHeader from '@/shared/components/ui/header/SectionHeader.vue'
import { defineComponent } from 'vue'
import LatestWeatherCard from './latest-weather-card/LatestWeatherCard.vue'
import { useMarsWeather } from '../hooks'
export default defineComponent({
  components: { SectionHeader, LatestWeatherCard },
  setup() {
    const { data } = useMarsWeather()

    return { data }
  },
})
</script>
<style scoped></style>
