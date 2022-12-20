<script lang="ts" setup>
import Navbar from "@/components/Navbar.vue";
import Copyright from "@/components/Copyright.vue";
</script>
<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
    <copyright />
  </v-app>
</template>
<style>
</style>
