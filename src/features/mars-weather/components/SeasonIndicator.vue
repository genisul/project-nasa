<template>
  <div
    class="fixed bottom-52 right-0 z-50 hidden h-20 translate-x-28 cursor-pointer items-center justify-center gap-6 rounded-l-full bg-white px-8 shadow-[0_6px_16px_0_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out hover:translate-x-0 sm:flex"
  >
    <div>
      <component
        :is="seasonInfo.icon"
        class="h-10 w-10"
        :class="seasonInfo.color"
      />
    </div>
    <div>
      <div class="whitespace-nowrap text-lg font-semibold">
        {{ seasonInfo.month }}
      </div>
      <div class="text-sm text-gray-500">
        {{ seasonInfo.season }}
      </div>
    </div>
  </div>

  <div
    class="group sticky bottom-16 left-1/2 z-50 flex h-14 w-14 -translate-x-1/2 cursor-pointer items-center justify-between overflow-hidden rounded-full bg-white p-2 shadow-[0_6px_24px_0_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out hover:w-36 hover:p-4 sm:hidden"
  >
    <div>
      <component
        :is="seasonInfo.icon"
        class="h-10 w-10"
        :class="seasonInfo.color"
      />
    </div>
    <div
      class="opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
    >
      <div class="whitespace-nowrap text-base font-semibold leading-tight">
        {{ seasonInfo.month }}
      </div>
      <div class="text-sm leading-tight text-gray-500">
        {{ seasonInfo.season }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, type Component } from 'vue'
import { Flower, Leaf, Snowflake, Sun } from 'lucide-vue-next'
import { useMarsWeather } from '../hooks'

export default defineComponent({
  setup() {
    const { data } = useMarsWeather()
    const seasonInfo = computed(() => {
      const currentMonth =
        data?.value != null && data?.value.length > 0
          ? data?.value[0].season
          : null
      const { icon, season } = getSeasonInfo(currentMonth)
      return {
        month: currentMonth,
        icon: icon[0],
        color: icon[1],
        season,
      }
    })

    const getSeasonInfo = (
      season: string | null,
    ): { icon: [Component, string]; season: string } => {
      if (season == null)
        return { icon: [Sun, 'text-[#ff8c69]'], season: 'Summer' }
      const month = Number(season.split(' ')[1])
      switch (month) {
        case 1:
        case 2:
        case 3:
          return { icon: [Flower, 'text-rose-500'], season: 'Spring' }
        case 4:
        case 5:
        case 6:
          return { icon: [Sun, 'text-[#ff8c69]'], season: 'Summer' }
        case 7:
        case 8:
          return { icon: [Leaf, 'text-amber-700'], season: 'Fall' }
        case 9:
        case 10:
        case 11:
        case 12:
          return { icon: [Snowflake, 'text-blue-500'], season: 'Winter' }
        default:
          return { icon: [Sun, 'text-[#ff8c69]'], season: 'Summer' }
      }
    }

    return { seasonInfo, getSeasonInfo }
  },
})
</script>

<style scoped></style>
