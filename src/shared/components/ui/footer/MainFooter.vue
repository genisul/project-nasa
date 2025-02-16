<template>
  <footer class="flex h-[350px] w-full flex-col items-center py-20">
    <div
      class="flex w-[90%] items-center justify-between border-t border-slate-300 py-6 text-lg font-semibold text-foreground xl:w-[60rem] 2xl:w-[80rem]"
    >
      <MainLogo />
      <MainNav />
      <img :src="NasaLogo" alt="Nasa Logo" class="h-16 w-16" />
    </div>
    <div class="text-grey-600 text-center text-sm">
      © 2023 Genisul. All right reserved.
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { MainLogo } from '../logo'
import { MainNav } from '../nav'
import NasaLogo from '@/assets/images/nasa-logo.png'
export default defineComponent({
  components: { MainLogo, MainNav },
  setup() {
    return { NasaLogo }
  },
})
</script>

<style scoped></style>
