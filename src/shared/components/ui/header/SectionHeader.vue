<template>
  <div class="mb-12 flex flex-col items-center gap-4">
    <SectionTitle>{{ props.title }}</SectionTitle>
    <p class="max-w-[40rem] text-center text-gray-500">
      {{ props.description }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SectionTitle } from '../title'
export default defineComponent({
  components: { SectionTitle },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return { props }
  },
})
</script>

<style scoped></style>
