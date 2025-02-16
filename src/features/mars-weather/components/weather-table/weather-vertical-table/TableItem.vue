<template>
  <td class="h-12">
    <div class="flex items-center justify-center">
      <slot />
    </div>
  </td>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
