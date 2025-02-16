<template>
  <section class="py-20">
    <div class="flex w-full flex-col items-center justify-center gap-6">
      <WeatherTable v-if="!isPending" :data="weatherList" />
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useMarsWeather } from '../hooks'
import { WeatherTable } from './weather-table'

export default defineComponent({
  components: { WeatherTable },
  setup() {
    const { data, isPending } = useMarsWeather()
    const weatherList = computed(() => data?.value?.slice(1, 10) ?? [])

    return { weatherList, isPending }
  },
})
</script>

<style scoped></style>
