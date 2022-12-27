<script setup lang="ts">
let carouselItems = [
  {
    src: "./img/test.jpg",
  },
  {
    src: "./img/test2.jpg",
  },
  {
    src: "./img/test3.jpg",
  }
];
</script>

<template>
  <v-col 
  cols="12">
  <v-carousel 
  class="bg-grey-lighten-4"
  :show-arrows="false"
  hide-delimiter-background
  cycle
  height="auto"
  interval="4000">
   <v-carousel-item
     v-for="(item, i) in carouselItems"
     :src="item.src"
     :key="i"
     max-height="500px"
   >
   </v-carousel-item>
  </v-carousel>
  </v-col>

  <v-col
   cols="6">
  </v-col>
</template>

<style scoped>
/**
PC
*/

/**
Tablet
*/
@media (max-width: 1023px){

}
/**
Phone
*/
@media (max-width: 599px){

}
</style>
