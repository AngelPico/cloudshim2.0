<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="onboardContent">
    <span class="mainTitle">Onboarding account</span>
    <div class="cardOnboardContent">
      <div v-if="!band" class="loadingOnboardContent">
        <div class="animationContent">
          <img src="./../assets/onboard/animation1.svg" alt="Imagen 1" class="myImg1" />
          <img src="./../assets/onboard/animation2.svg" alt="Imagen 2" class="myImg2" />
          <img src="./../assets/onboard/animation3.svg" alt="Imagen 3" class="myImg3" />
          <img src="./../assets/onboard/animation4.svg" alt="Imagen 3" class="myImg4" />
          <!-- Agrega más imágenes aquí -->
        </div>
        <div class="loadingOnboardMini">
          <!-- <img src="./../assets/onboard/copper-loader 1loadingOnboard2.svg" alt=""> -->
          <span>Populating Estimated Costs</span>
        </div>
      </div>
      <div v-if="band" class="loadingOnboardContent">
        <img
          src="./../assets/onboard/FramecheckOnboard.svg"
          style="filter: drop-shadow(0px 7px 8px #cecece)"
          alt=""
        />
        <span class="onboardingDoneText">Everything went well and is ready to go.</span>
        <div class="onboardingDoneButtons">
          <button class="onboardingBackButton" @click="backStep">Back</button>
          <button class="onboardingNextButton" @click="nextStep">Finish</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const band = ref(false);

    onMounted(() => {
      setTimeout(() => {
        band.value = true;
      }, 5000);
    });

    const backStep = () => {
      router.push("/dashboard/connect-account");
    };

    const nextStep = () => {
      router.push("/dashboard");
    };

    return {
      backStep,
      nextStep,
      band,
    };
  },
};
</script>

<style lang="scss">
@import "./../main.scss";
.onboardContent {
  padding: 30px 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.mainTitle {
  color: var(--text-1);
  font-family: Poppins;
  font-size: 48px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: 0.1300000101327896px;
}

.cardOnboardContent {
  width: 100%;
  height: 679px;
  background: var(--bg-1);
  margin-top: 30px;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0px 10px 10px 1px var(--shadow);
  display: flex;
  flex-direction: column;
  padding: 40px 30px;
  box-sizing: border-box;
}

.loadingOnboardContent {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.loadingOnboardMini {
  display: flex;
  align-items: center;
}

.loadingOnboardMini > img {
  margin-left: -60px;
}

.loadingOnboardMini > span {
  color: var(--text-1);
  margin-top: 50px;
}

.onboardingDoneText {
  color: var(--text-1);
  font-family: Poppins;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0.10000000149011612px;
  margin-top: -50px;
}

.onboardingDoneButtons {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.onboardingBackButton {
  width: 128px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid rgba(151, 151, 151, 1);
  background: #ffffff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0.10000000149011612px;
  margin-right: 10px;
  color: #000000;
}

.onboardingNextButton {
  width: 130px;
  height: 48px;
  border-radius: 8px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0.10000000149011612px;
  color: #ffffff;
  background: rgba(255, 122, 47, 1);
}

/* Configuración de la animación */
.myImg1 {
  animation-name: img1;
  animation-duration: 4s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  position: relative;
}

/* Definición de los fotogramas */
@keyframes img1 {
  0% {
    transform: translateX(75%) scale(1);
    z-index: 1;
  }
  25% {
    transform: translateX(0%) scale(1.25);
    z-index: 2;
  }
  50% {
    transform: translateX(-75%) scale(1);
    z-index: 1;
  }
  75% {
    transform: translateX(0%);
    z-index: 0;
  }
  100% {
    transform: translateX(75%) scale(1);
    z-index: 1;
  }
}

.myImg2 {
  animation-name: img2;
  animation-duration: 4s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  position: absolute;
  top: 41%;
  left: 50%;
}

/* Definición de los fotogramas */
@keyframes img2 {
  0% {
    transform: translateX(0%) scale(1);
    z-index: 0;
    // opacity: 1;
  }
  25% {
    transform: translateX(75%) scale(1);
    // opacity: 1;
    z-index: 1;
  }
  50% {
    transform: translateX(0%) scale(1.25);
    z-index: 2;
  }
  75% {
    transform: translateX(-75%) scale(1);
    z-index: 1;
  }
  100% {
    transform: translateX(0%);
    z-index: 0;
  }
}

.myImg3 {
  animation-name: img3;
  animation-duration: 4s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  position: absolute;
  top: 41%;
  left: 50%;
}

/* Definición de los fotogramas */
@keyframes img3 {
  0% {
    transform: translateX(-75%) scale(1);
    z-index: 1;
    // opacity: 0;
  }
  25% {
    transform: translateX(0%);
    z-index: 0;
    // opacity: 1;
  }
  50% {
    transform: translateX(75%) scale(1);
    z-index: 1;
  }
  75% {
    transform: translateX(0%) scale(1.25);
    z-index: 2;
  }
  100% {
    transform: translateX(-75%) scale(1);
    z-index: 1;
  }
}

.myImg4 {
  animation-name: img4;
  animation-duration: 4s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  position: absolute;
  top: 41%;
  left: 50%;
}

/* Definición de los fotogramas */
@keyframes img4 {
  0% {
    transform: translateX(0%) scale(1.25);
    z-index: 2;
  }
  25% {
    transform: translateX(-75%) scale(1);
    z-index: 1;
    // opacity: 0;
  }
  50% {
    transform: translateX(0%);
    z-index: 0;
    // opacity: 1;
  }
  75% {
    transform: translateX(75%) scale(1);
    z-index: 1;
  }
  100% {
    transform: translateX(0%) scale(1.25);
    z-index: 2;
  }
}
</style>
