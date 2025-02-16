<template>
  <div class="flex w-full flex-col items-center gap-28 rounded sm:p-10">
    <div
      class="flex h-fit w-fit items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
    >
      <Sun class="h-28 w-28 animate-pulse text-[#ff8c69] drop-shadow-xl" />
    </div>
    <ul
      class="grid w-full grid-cols-2 flex-col items-center justify-center gap-2 gap-y-6 font-semibold text-gray-700 sm:flex sm:flex-row sm:gap-y-2"
    >
      <WeatherInfoCard
        v-for="info in weatherInfo"
        :key="info.label"
        :info="info"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from 'vue'
import { AtmoOpacity } from '../../types'
import { Sun } from 'lucide-vue-next'
import WeatherInfoCard from './WeatherInfoCard.vue'

export default defineComponent({
  components: {
    Sun,
    WeatherInfoCard,
  },
  props: {
    atmoOpacity: {
      type: String as PropType<AtmoOpacity>,
    },
    minTemp: {
      type: String,
    },
    maxTemp: {
      type: String,
    },
    terrestrialDate: {
      type: String,
    },
  },

  setup(props) {
    const weatherInfo = computed(() => [
      {
        label: 'Atmo-Opacity',
        value: props.atmoOpacity,
      },
      {
        label: 'Terrestrial Date',
        value: props.terrestrialDate,
      },
      {
        label: 'Min Temp',
        value: `${props.minTemp}°`,
      },
      {
        label: 'Max Temp',
        value: `${props.maxTemp}°`,
      },
    ])

    return { weatherInfo }
  },
})
</script>

<style scoped></style>
