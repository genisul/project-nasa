<template>
  <tr>
    <TableHead>Min Temp</TableHead>
    <TableData class="border-l" v-for="item in data" :key="item.id">
      {{ item.min_temp }}
    </TableData>
  </tr>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { MarsWeatherInfo } from '../../../types'
import TableData from './TableData.vue'
import TableHead from './TableHead.vue'

export default defineComponent({
  components: { TableData, TableHead },
  props: {
    data: {
      type: Array as PropType<MarsWeatherInfo[]>,
      required: true,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
