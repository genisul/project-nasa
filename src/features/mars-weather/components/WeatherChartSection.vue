<template>
  <section class="flex flex-col gap-40 py-20">
    <TemperatureChart v-if="!isPending" :data="monthData ?? []" />
    <SeasonSunriseSunsetChart v-if="!isPending" :data="yearData ?? []" />
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { TemperatureChart, SeasonSunriseSunsetChart } from './charts'
import { useMarsWeather } from '../hooks'
import { YEAR_OF_MONTH } from '../constants/year-of-mars'

export default defineComponent({
  components: { TemperatureChart, SeasonSunriseSunsetChart },
  setup() {
    const { data, isPending } = useMarsWeather()

    const monthData = computed(() => {
      return data?.value?.slice(1, 31)
    })

    const yearData = computed(() => {
      return data?.value?.slice(1, YEAR_OF_MONTH + 1)
    })

    return { monthData, isPending, yearData }
  },
})
</script>

<style scoped></style>
