<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Login from "../components/Auth/Login.vue";
import Register from "../components/Auth/Register.vue";

const route = useRoute();
const router = useRouter();
const currentPath = ref(route.path);

router.afterEach((to) => (currentPath.value = to.path));
</script>

<template>
  <div class="mainContent">
    <div class="authCard">
      <div class="authFlows">
        <div class="cloudshimTitle">
          <img src="./../assets/auth/UnioncloudshimLogo.png" alt="" />
          <span><b>Cloud</b>shim</span>
        </div>
        <Login v-if="currentPath.includes('login')" />
        <Register v-if="currentPath.includes('register')" />
      </div>
      <div class="authInfo">
        <div class="infoCard">
          <img src="./../assets/auth/Group 1085auth1.png" alt="" />
          <span class="infoText">Your FinOps copilot</span>
        </div>
        <div class="infoCard">
          <img src="./../assets/auth/Group 1087auth2.png" alt="" />
          <span class="infoText">10+ Resources Covered</span>
        </div>
        <div class="infoCard">
          <img src="./../assets/auth/Group 1086auth3.png" alt="" />
          <span class="infoText">Up to 70% Savings</span>
        </div>
        <div class="infoCard">
          <img src="./../assets/auth/Group 1088auth4.png" alt="" />
          <span class="infoText"> AI Driven - <br />Set & Forget</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.mainContent {
  width: 100vw;
  height: 100vh;
  background: #f1f1f1;
  display: flex;
}

.authCard {
  max-width: 922px;
  max-height: 548px;
  width: 80%;
  height: 80%;
  border-radius: 16px;
  background: #ffffff;
  margin: auto;
  display: flex;
}

.authFlows {
  width: 532px;
  height: 100%;
  background: #f6f6f6;
  border-radius: 16px 0 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  box-sizing: border-box;
}

.authInfo {
  width: 390px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding-left: 60px;
  padding-top: 10px;
  box-sizing: border-box;
}

.infoCard {
  display: flex;
  width: 90%;
  align-items: center;
}

.infoCard > img {
  width: 35%;
}

.infoText {
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  text-align: left;
  margin-left: 20px;
}

.cloudshimTitle {
  display: flex;
  align-items: center;
}

.cloudshimTitle > span {
  font-size: 24.26px;
  line-height: 36.38px;
  margin-left: 10px;
}

.cloudshimTitle > img {
  width: 63.7px;
  height: 41.5px;
}
</style>
