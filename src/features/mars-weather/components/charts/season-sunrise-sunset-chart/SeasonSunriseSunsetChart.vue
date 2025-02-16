<template>
  <ChartFrame title="Season Sunrise and Sunset">
    <BarChart
      class="w-full min-w-[50rem]"
      :data="seasonDataAverageSorted"
      index="season"
      :colors="['#ffd2a8', '#ff8c69']"
      :categories="['averageSunrise', 'averageSunset']"
      :y-formatter="
        tick => {
          return typeof tick === 'number'
            ? `${Math.floor(tick / 60)}:${tick % 60}`
            : ''
        }
      "
      :custom-tooltip="CustomTooltip"
      :margin="{ left: 20, right: 20 }"
    />
  </ChartFrame>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from 'vue'
import type { MarsSeason, MarsWeatherInfo } from '../../../types'
import { BarChart } from '@/shared/components/ui/chart-bar'
import CustomTooltip from './CustomTooltip.vue'
import ChartFrame from '../ChartFrame.vue'

export default defineComponent({
  components: { BarChart, ChartFrame },
  props: {
    data: {
      type: Array as PropType<MarsWeatherInfo[]>,
      required: true,
    },
  },

  setup(props) {
    const seasonDataAverageSorted = computed(() => {
      //시간을 숫자로 변환
      const seasonDataTimeToNumber = (time: string) => {
        const [hours, minutes] = time.split(':').map(Number)
        return hours * 60 + minutes
      }

      type ProcessedData = (Omit<MarsWeatherInfo, 'sunrise' | 'sunset'> & {
        sunrise: number
        sunset: number
      })[]

      // 날씨 데이터의 sunrise, sunset을 숫자로 변환
      const seasonData: ProcessedData = props.data.map(item => {
        return {
          ...item,
          season: item.season,
          sunrise: seasonDataTimeToNumber(item.sunrise),
          sunset: seasonDataTimeToNumber(item.sunset),
        }
      })

      // 달 별로 그룹화화
      const seasonDataGroupBySeason: Record<MarsSeason, ProcessedData> =
        Object.groupBy(
          seasonData,
          ({ season }: { season: MarsSeason }) => season,
        ) as Record<MarsSeason, ProcessedData>

      // 달 별로 평균 일출, 일몰 계산
      const seasonDataAverage = Object.entries(seasonDataGroupBySeason).map(
        ([season, data]: [string, ProcessedData]) => {
          const averageSunrise = Math.round(
            data.reduce((acc, curr) => acc + curr.sunrise, 0) / data.length,
          )
          const averageSunset = Math.round(
            data.reduce((acc, curr) => acc + curr.sunset, 0) / data.length,
          )
          return {
            season: Number(season.split('Month ')[1]),
            seasonName: season,
            averageSunrise,
            averageSunset,
            sol: Number(data[0].sol),
          }
        },
      )

      const seasonDataAverageSorted = seasonDataAverage.sort(
        (a, b) => a.sol - b.sol,
      )
      return seasonDataAverageSorted
    })

    return { seasonDataAverageSorted, CustomTooltip }
  },
})
</script>

<style scoped></style>
