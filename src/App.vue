<template>
  <v-app>
    <v-main class="d-flex justify-center align-center">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss" scoped>
.v-main {
  background: $main-background;
}
</style>
