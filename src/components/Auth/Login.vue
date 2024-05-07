<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from "vue";
import supabase from "./../../supabase/init";
import router from "@/router";
const email = ref("");
const password = ref("");

const login = async () => {
  const { error, data } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  if (error) console.log("Error en el inicio de sesión:", error.message);
  else {
    console.log("Inicio de sesión exitoso", data);
    router.push("/dashboard");
  }
};

const loginGoogle = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) console.log("Error en el inicio de sesión:", error.message);
  else console.log("Inicio de sesión exitoso");
};

const signUp = (e) => {
  e.preventDefault();
  router.push("/register");
};
</script>

<template>
  <div class="loginContent">
    <form @submit.prevent="login" class="formLogin">
      <div class="navSigIn">
        <h2>Sign In</h2>
        <button class="googleButton" v-on:click="loginGoogle">
          <img src="./../../assets/auth/image 20google.svg" alt="" />
        </button>
      </div>
      <div class="inputsLoginContent">
        <div class="inputLoginForm">
          <div class="inputLoginFormImg">
            <img src="./../../assets/auth/Email.svg" alt="" />
          </div>
          <input type="email" v-model="email" placeholder="Email address" required />
        </div>
        <div class="inputLoginForm" style="border: none">
          <div class="inputLoginFormImg">
            <img src="./../../assets/auth/Password.svg" alt="" />
          </div>
          <input type="password" v-model="password" placeholder="Password" required />
        </div>
      </div>
      <button class="signUpButton" type="submit">Login</button>
    </form>
    <div class="bottomLoginInfo">
      <span class="signUpMessage"
        >Dont have an account? <a href="" @click="signUp">Signup</a></span
      >
      <a class="forgotPassword">Forgot password?</a>
    </div>
  </div>
</template>

<style lang="scss">
.googleButton {
  width: 32px;
  height: 28px;
  background: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loginContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.formLogin {
  display: flex;
  flex-direction: column;
  margin: auto 0;
}

.formLogin > h2 {
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
}

.inputsLoginContent {
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 114px;
  border-radius: 14px;
  background: #ffffff;
}

.inputLoginForm {
  height: 50%;
  display: flex;
  border-bottom: 1px solid #f1f3f4;
}

.inputLoginFormImg {
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.inputLoginForm > input {
  width: 85%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 15px;
  font-weight: 400;
  line-height: 17.58px;
  color: #000000;
}

.inputLoginForm > input::placeholder {
  color: #b6b6b6;
}

.signUpButton {
  width: 154px;
  height: 38px;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
  background: #0062ff;
  margin: 20px auto;
  font-family: Poppins;
  cursor: pointer;
}

.navSigIn {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.bottomLoginInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.signUpMessage {
  font-size: 14px;
  font-weight: 400;
  line-height: 14.06px;
}

.signUpMessage > a {
  font-size: 14px;
  font-weight: 400;
  line-height: 14.06px;
  color: #0062ff;
  text-decoration: none;
}

.forgotPassword {
  margin-top: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 14.06px;
  color: #b6b6b6;
  text-decoration: none;
}
</style>
