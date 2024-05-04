<template>
    <div>
      <DashboardNavbar />
      <Support />
      <DashboardFooter />
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineComponent } from "vue";
  import DashboardNavbar from "@/components/Header/Dashboard-Navbar.vue";
  import Support from "@/components/Dashboard/Support.vue"
  import DashboardFooter from "@/components/Footer/Dashboard-Footer.vue"
  
  // Set the title for the page
  document.title = "Dashboard | Bulls Signal";
  </script>
  
  <script lang="ts">
  export default defineComponent({
    name: "YourComponent",
    components: {
      DashboardNavbar,
      Support,
      DashboardFooter,
    },
  });
  </script>
  
  <style scoped>
  
  </style>
  