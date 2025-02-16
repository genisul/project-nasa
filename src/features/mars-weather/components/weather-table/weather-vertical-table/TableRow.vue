<template>
  <tr>
    <TableItem>{{ dayjs(data.terrestrial_date).format('MM.DD.') }}</TableItem>
    <TableItem>
      <Sun
        v-if="data.atmo_opacity === AtmoOpacity.Sunny"
        class="h-8 w-8 text-[#ff8c69]"
      />
      <template v-else>
        {{ data.atmo_opacity }}
      </template>
    </TableItem>
    <TableItem>{{ data.max_temp }}</TableItem>
    <TableItem>{{ data.min_temp }}</TableItem>
  </tr>
</template>

<script lang="ts">
import { Sun } from 'lucide-vue-next'
import type { MarsWeatherInfo } from '../../../types'
import { AtmoOpacity } from '../../../types'
import { defineComponent, type PropType } from 'vue'
import TableItem from './TableItem.vue'
import dayjs from 'dayjs'

export default defineComponent({
  components: { Sun, TableItem },
  props: {
    data: {
      type: Object as PropType<MarsWeatherInfo>,
      required: true,
    },
  },

  setup() {
    return {
      AtmoOpacity,
      dayjs,
    }
  },
})
</script>

<style scoped></style>
