<template>
    <RouterLink to="/">
      <div class="flex items-center gap-2 text-lx font-bold">
      <img
        :src="Logo" alt="logo" class= "h-10 w-10" />
        Project Nasa
      </div>
    </RouterLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from '@/assets/images/logo-icon.png'

export default defineComponent({
  setup() {
    return {Logo}
  },
})
</script>

<style scoped></style>
