<template>
  <li
    class="parent group flex w-full flex-col items-center justify-center gap-2"
  >
    <span
      class="text-lg transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(120,120,120,1)] sm:text-xl"
      >{{ info.label }}</span
    >
    <span
      class="text-2xl font-bold transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(120,120,120,1)] sm:text-3xl"
      >{{ info.value }}</span
    >
  </li>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

type weatherInfo = {
  label: string
  value: string | undefined
}

export default defineComponent({
  props: {
    info: {
      type: Object as PropType<weatherInfo>,
      required: true,
    },
  },

  setup() {
    return {}
  },
})
</script>

<style scoped></style>
