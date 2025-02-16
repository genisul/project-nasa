<template>
  <MainHeader />
  <main class="flex w-full flex-col items-center">
    <div class="w-full px-4 sm:px-0 xl:w-[60rem] 2xl:w-[80rem]">
      <slot />
    </div>
  </main>
  <MainFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { MainHeader } from '../header'
import { MainFooter } from '../footer'
export default defineComponent({
  setup() {
    return {}
  },
  components: {
    MainFooter,
    MainHeader,
  },
})
</script>

<style scoped></style>
