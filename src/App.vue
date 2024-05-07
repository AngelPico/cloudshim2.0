<template>
  <div id="vueApp" data-bs-theme="dark">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100%;
  font-family: Roboto;
}
</style>
