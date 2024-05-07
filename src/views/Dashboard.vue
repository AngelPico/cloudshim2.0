<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Header from "../components/Layout/Header.vue";
import Menu from "../components/Layout/Menu.vue";
</script>

<template>
  <div class="dashboardContent">
    <Header />
    <div class="appContent">
      <Menu />
      <div class="routesContent">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./../main.scss";

.dashboardContent {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.routesContent {
  width: 100%;
  height: 100%;
  background: var(--bg-2);
}
</style>
