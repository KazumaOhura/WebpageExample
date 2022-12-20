<script setup lang="ts">
import "vuetify";
import router from "@/router/index";
import { ref, watch, type Ref } from "vue";

const ROUTES = router.options.routes;

var drawer:Ref<boolean> = ref(false);
</script>

<template>
  <v-app-bar>
    <v-app-bar-nav-icon variant="text" class="d-md-none" @click="drawer = !drawer;" />
    <v-container
    class="d-flex d-md-none">
    <v-app-bar-title
    class="grow">
      {{ $route.name }}
    </v-app-bar-title>
  </v-container>
  <v-container>
    <v-tabs
    class="d-none d-md-flex"
    align-tabs="center">
    <v-tab
    class="font-weight-bold text-h5"
    v-for="(menuItem, index) in ROUTES"
    :key="index"
    :to="menuItem.path"
    >
      {{ menuItem.name }}
      <v-menu
      activator="parent"
      open-on-hover
      >
        <v-list
        class="bg-transparent"
        :elevation="1"
        v-if="menuItem.children"
        >
          <v-list-item
          class="justify-center"
          v-for="subItem in menuItem.children"
          >
            <router-link
            :to="subItem.path"
            class="text-decoration-none font-weight-medium text-h5 text-black"> 
            {{ subItem.name }}
            </router-link>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-tab>
    </v-tabs>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer
   width="128"
   v-model="drawer"
   location="start"
   class="d-md-none"
   fixed
   temporary>
    <v-list
    class="d-flex justify-center"
    v-for="(menuItem, index) in ROUTES"
    :key="index">
     <v-list-item
      :to="menuItem.path"> 
        {{ menuItem.name }}
     </v-list-item>
    </v-list>
  </v-navigation-drawer>
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
