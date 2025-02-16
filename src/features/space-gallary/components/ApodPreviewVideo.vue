<template>
  <div
    class="h-[24rem] w-full overflow-hidden rounded-2xl bg-zinc-200 sm:h-[30rem] sm:w-3/5"
  >
    <iframe :src="url" alt="apod" class="h-full w-full object-cover" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    url: {
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
