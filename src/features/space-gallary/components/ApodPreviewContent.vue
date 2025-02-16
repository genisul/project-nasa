<template>
  <div
    class="flex w-full flex-1 flex-col items-start justify-center gap-2 pl-1 sm:items-center sm:pl-0"
  >
    <h3 class="text-xl font-bold">{{ apodTitle }}</h3>
    <p>{{ apodDate }}</p>
    <!-- <p>{{ apodExplanation.slice(0, 200) }}</p> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    explanation: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return {
      apodTitle: props.title,
      apodDate: props.date,
      apodExplanation: props.explanation,
    }
  },
})
</script>

<style scoped></style>
