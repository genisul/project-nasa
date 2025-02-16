<template>
  <TableTitle />
  <div class="hidden w-full rounded-2xl border sm:block">
    <WeatherHorizontalTable :data="tableData" />
  </div>
  <div class="w-full rounded-2xl border sm:hidden">
    <WeatherVerticalTable :data="tableData" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from 'vue'
import type { MarsWeatherInfo } from '../../types'
import { WeatherHorizontalTable } from './horizontal-table'
import TableTitle from './TableTitle.vue'
import { WeatherVerticalTable } from './weather-vertical-table'

export default defineComponent({
  components: {
    WeatherHorizontalTable,
    TableTitle,
    WeatherVerticalTable,
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
        min_temp: `${item.min_temp}`,
        max_temp: `${item.max_temp}`,
      })),
    )
    return { tableData }
  },
})
</script>

<style scoped></style>
