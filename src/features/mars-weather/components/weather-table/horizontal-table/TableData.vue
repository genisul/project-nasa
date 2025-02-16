<template>
  <td v-bind="$attrs" :class="[$attrs.class, 'h-10 border-l']">
    <div class="flex h-full items-center justify-center px-4 text-lg">
      <slot />
    </div>
  </td>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
