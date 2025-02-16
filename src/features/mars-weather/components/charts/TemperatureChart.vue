<template>
  <ChartFrame title="Temperature">
    <AreaChart
      class="w-full min-w-[50rem]"
      :data="temp_data"
      index="id"
      :categories="['min_temp', 'max_temp']"
      :colors="['#ffd2a8', '#ff8c69']"
      :show-gradiant="false"
    />
  </ChartFrame>
</template>

<script lang="ts">
import { AreaChart } from '@/shared/components/ui/chart-area'
import { defineComponent, type PropType } from 'vue'
import { type MarsWeatherInfo } from '../../types'
import ChartFrame from './ChartFrame.vue'

export default defineComponent({
  components: { AreaChart, ChartFrame },
  props: {
    data: {
      type: Array as PropType<MarsWeatherInfo[]>,
      required: true,
    },
  },
  setup(props) {
    const temp_data = props.data.map(item => ({
      id: item.id,
      min_temp: Number(item.min_temp),
      max_temp: Number(item.max_temp),
    }))
    return { temp_data }
  },
})
</script>

<style scoped></style>
