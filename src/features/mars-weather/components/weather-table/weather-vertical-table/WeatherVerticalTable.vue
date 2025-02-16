<template>
  <table class="w-full table-fixed">
    <thead class="border-b">
      <tr>
        <TableHeader>Date</TableHeader>
        <TableHeader>Opacity</TableHeader>
        <TableHeader>Max°</TableHeader>
        <TableHeader>Min°</TableHeader>
      </tr>
    </thead>

    <tbody>
      <TableRow v-for="item in data" :key="item.id" :data="item" />
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { MarsWeatherInfo } from '../../../types'
import TableRow from './TableRow.vue'
import TableHeader from './TableHeader.vue'

export default defineComponent({
  components: { TableRow, TableHeader },
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
