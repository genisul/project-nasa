<template>
  <header
    class="fixed left-0 top-0 z-50 flex h-14 w-full justify-center bg-white px-4 py-4 font-semibold text-foreground sm:px-28"
  >
    <div
      class="flex w-full items-center justify-between gap-4 sm:justify-center sm:gap-12"
    >
      <MainLogo />
      <MainNav />
      <DropdownNav />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { MainLogo } from '../logo'
import { MainNav, DropdownNav } from '../nav'

export default defineComponent({
  components: { MainLogo, MainNav, DropdownNav },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
