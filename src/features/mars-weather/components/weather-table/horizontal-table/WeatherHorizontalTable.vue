<template>
  <table class="w-full">
    <tbody>
      <WeatherDataRow :data="tableData" />
      <AtmoOpacityRow :data="tableData" />
      <MaxTempRow :data="tableData" />
      <MinTempRow :data="tableData" />
    </tbody>
  </table>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from 'vue'
import type { MarsWeatherInfo } from '../../../types'
import WeatherDataRow from './WeatherDataRow.vue'
import AtmoOpacityRow from './AtmoOpacityRow.vue'
import MaxTempRow from './MaxTempRow.vue'
import MinTempRow from './MinTempRow.vue'

export default defineComponent({
  components: {
    WeatherDataRow,
    AtmoOpacityRow,
    MaxTempRow,
    MinTempRow,
  },
  props: {
    data: {
      type: Array as PropType<MarsWeatherInfo[]>,
      required: true,
    },
  },

  setup(props) {
    const tableData = computed(() =>
      props.data.map(item => ({
        ...item,
        min_temp: `${item.min_temp}°`,
        max_temp: `${item.max_temp}°`,
      })),
    )
    return { tableData }
  },
})
</script>

<style scoped></style>
