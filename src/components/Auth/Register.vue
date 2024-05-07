<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from "vue";
import supabase from "./../../supabase/init";
import router from "@/router";

const email = ref("");
const name = ref("");
const company = ref("");
const password = ref("");
const focus = ref("");
const errors = ref([]);
const errorMessage = ref("");
const passwordRules = ref({
  least8Characters: false,
  upperCase: false,
  number: false,
  specialCharacters: false,
})

const register = async () => {
  console.log("Ad");
  if (checkForm()) {
    const { error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          name: name.value,
          full_name: name.value,
          company: company.value,
        },
      },
    });
    if (error) console.log("Error en el registro:", error.message);
    else {
      console.log("Registro exitoso");
      router.push("/login");
    }
  }
};

const checkForm = () => {
  errors.value = [];
  if (name.value == '') errors.value.push('name');
  if (email.value == '') errors.value.push('email');
  if (company.value == '') errors.value.push('company');
  if (password.value == '') errors.value.push('password');

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(this.correo)) {
    errors.value.push('email');
    errorMessage.value = "The email address is not valid";
  }

  if (errors.value.length > 0) return false;
  else return true;
}

const checkPassword = (e) => {
  console.log(e.target.value);
  console.log(passwordRules.value);
}

const signIn = (e) => {
  e.preventDefault();
  router.push("/login");
};

const setFocus = (value) => {
  focus.value = value;
}

</script>

<template>
  <div class="registerContent">
    <form @submit.prevent="register" class="formRegister">
      <h2>Create Your Account</h2>
      <div class="inputsContent">
        <div class="inputForm">
          <div class="inputFormImg">
            <img v-if="!errors.includes('name')" src="./../../assets/auth/Name.svg" alt="" :class="[(focus == 'name' || name != '') && 'focusInput']"/>
            <img v-if="errors.includes('name')" src="./../../assets/auth/NameRed.svg" alt=""/>
          </div>
          <input type="text" v-model="name" placeholder="Fullname" @focus="setFocus('name')" :class="[errors.includes('name') && 'redText']"/>
        </div>
        <div class="inputForm">
          <div class="inputFormImg">
            <img v-if="!errors.includes('email')" src="./../../assets/auth/Email.svg" alt="" :class="[(focus == 'email' || email != '') && 'focusInput']"/>
            <img v-if="errors.includes('email')" src="./../../assets/auth/EmailRed.svg" alt=""/>
          </div>
          <input type="text" v-model="email" placeholder="Email address" @focus="setFocus('email')" :class="[errors.includes('email') && 'redText']"/>
        </div>
        <div class="inputForm">
          <div class="inputFormImg">
            <img v-if="!errors.includes('company')" src="./../../assets/auth/Company.svg" alt="" :class="[(focus == 'company' || company != '') && 'focusInput']"/>
            <img v-if="errors.includes('company')" src="./../../assets/auth/CompanyRed.svg" alt=""/>
          </div>
          <input type="text" v-model="company" placeholder="Company" @focus="setFocus('company')" :class="[errors.includes('company') && 'redText']"/>
        </div>
        <div class="inputForm" style="border: none">
          <div class="inputFormImg">
            <img v-if="!errors.includes('password')" src="./../../assets/auth/Password.svg" alt="" :class="[(focus == 'password' || password != '') && 'focusInput']"/>
            <img v-if="errors.includes('password')" src="./../../assets/auth/PasswordRed.svg" alt=""/>
          </div>
          <input type="password" v-model="password" placeholder="Password" @focus="setFocus('password')" @keyup="checkPassword" :class="[errors.includes('password') && 'redText']"/>
        </div>
      </div>
      <span v-if="errorMessage != ''" class="errorMessage">{{errorMessage}}</span>
      <button class="signUpButton" type="submit">Sign Up</button>
    </form>
    <div class="bottomSignUpInfo">
      <span class="loginMessage"
        >Already have an account? <a href="" @click="signIn">Login</a></span
      >
      <span class="loginMessage2"
        >By signing up, you acknowledge that you have read and accept our
        <a href="">Terms of Use</a></span
      >
    </div>
  </div>
</template>

<style lang="scss">
.registerContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.formRegister {
  display: flex;
  flex-direction: column;
  margin: auto 0;
}

.formRegister > h2 {
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
}

.inputsContent {
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 228px;
  border-radius: 14px;
  background: #ffffff;
}

.inputForm {
  height: 25%;
  display: flex;
  border-bottom: 1px solid #f1f3f4;
}

.inputFormImg {
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.inputForm > input {
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

.inputForm > input::placeholder {
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
}

.bottomSignUpInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loginMessage {
  font-size: 14px;
  font-weight: 400;
  line-height: 14.06px;
}

.loginMessage > a {
  font-size: 14px;
  font-weight: 400;
  line-height: 14.06px;
  color: #0062ff;
  text-decoration: none;
}

.loginMessage2 {
  margin-top: 20px;
  font-size: 13px;
  font-weight: 400;
  line-height: 14.06px;
}

.loginMessage2 > a {
  font-size: 13px;
  font-weight: 400;
  line-height: 14.06px;
  color: #0062ff;
  text-decoration: none;
}

.focusInput {
  filter: invert(1);
}

.redText::placeholder {
  color: #FB5647 !important;
}

.redText {
  color: #FB5647 !important;
}

.errorMessage {
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.06px;
  text-align: left;
  color: #FB5647;
}
</style>
