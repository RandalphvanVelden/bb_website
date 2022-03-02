<template>
<the-header></the-header>
  <router-view v-slot="slotProps">
    <transistion name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transistion>
  </router-view>
  <!-- add the following to the <head> in the published view:
<meta name="csrf-token" content="{{ csrf_token() }}"> -->
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'

export default {
components: {
  TheHeader
}
  
}
</script>

<style>

</style>
