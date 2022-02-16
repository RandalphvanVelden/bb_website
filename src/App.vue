<template>
<the-header></the-header>
  <router-view v-slot="slotProps">
    <transistion name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transistion>
  </router-view>
</template>

<script>


export default {

  
}
</script>

<style>

</style>