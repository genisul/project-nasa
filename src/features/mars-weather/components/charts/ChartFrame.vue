<template>
  <div class="flex w-full flex-col items-center gap-6">
    <ChartTitle :title="title" />
    <div class="w-full overflow-x-scroll rounded-2xl border py-5">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ChartTitle from './ChartTitle.vue'

export default defineComponent({
  components: { ChartTitle },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
