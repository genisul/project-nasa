<template>
  <th v-bind="$attrs" :class="[$attrs.class]">
    <div
      class="flex h-full items-center justify-center whitespace-nowrap px-4 text-lg"
    >
      <slot />
    </div>
  </th>
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
