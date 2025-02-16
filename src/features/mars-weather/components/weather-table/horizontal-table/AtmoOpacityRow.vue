<template>
  <tr>
    <TableHead>Atmospheric Opacity</TableHead>
    <TableData v-for="item in data" :key="item.id" class="border-l">
      <Sun
        class="h-8 w-8 text-[#ff8c69]"
        v-if="item.atmo_opacity === AtmoOpacity.Sunny"
      />
      <template v-else>
        {{ item.atmo_opacity }}
      </template>
    </TableData>
  </tr>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { AtmoOpacity, type MarsWeatherInfo } from '../../../types'
import TableData from './TableData.vue'
import TableHead from './TableHead.vue'
import { Sun } from 'lucide-vue-next'

export default defineComponent({
  components: { TableData, TableHead, Sun },
  props: {
    data: {
      type: Array as PropType<MarsWeatherInfo[]>,
      required: true,
    },
  },

  setup() {
    return { AtmoOpacity }
  },
})
</script>

<style scoped></style>
