<template>
  <tr>
    <TableHead>Terrestrial Data</TableHead>
    <TableData v-for="item in data" :key="item.id" class="border-l">
      {{ dayjs(item.terrestrial_date).format('MM.DD.') }}
    </TableData>
  </tr>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { MarsWeatherInfo } from '../../../types'
import TableData from './TableData.vue'
import TableHead from './TableHead.vue'
import dayjs from 'dayjs'

export default defineComponent({
  components: { TableData, TableHead },
  props: {
    data: {
      type: Array as PropType<MarsWeatherInfo[]>,
      required: true,
    },
  },

  setup() {
    return { dayjs }
  },
})
</script>

<style scoped></style>
