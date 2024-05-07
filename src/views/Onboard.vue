<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="onboardContent">
    <span class="mainTitle">Onboard in 3 Simple Steps</span>
    <span class="subTitle">Your AI driven FinOps Copilot</span>
    <div class="cardsContent">
      <div class="cardContent">
        <div class="cardImgContent" style="background: rgba(255, 132, 19, 0.15)">
          <img src="./../assets/onboard/Group 1086Onboard1.svg" alt="" />
        </div>
        <div class="cardTextContent">
          <span class="cardStepText">Step 1: </span>
          Connect AWS account to View estimated Savings
        </div>
      </div>

      <div class="cardContent">
        <div class="cardImgContent" style="background: rgba(47, 80, 255, 0.15)">
          <img src="./../assets/onboard/Group 1122331406Onboard2.svg" alt="" />
        </div>
        <div class="cardTextContent">
          <span class="cardStepText">Step 2: </span>
          Authorize Cloudshim AI Savings Bot
        </div>
      </div>

      <div class="cardContent">
        <div class="cardImgContent" style="background: rgba(13, 195, 31, 0.15)">
          <img src="./../assets/onboard/Group 1088Onboard3.svg" alt="" />
        </div>
        <div class="cardTextContent">
          <span class="cardStepText">Step 3: </span>
          Complete Onboarding and automate savings
        </div>
      </div>
    </div>
    <button class="connectAWSButton" @click="nextStep">
      Connect Account
      <img src="./../assets/onboard/image 8aws.svg" alt="" />
    </button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const nextStep = () => {
      router.push("/dashboard/connect-account");
    };
    return {
      nextStep,
    };
  },
};
</script>

<style lang="scss">
@import "./../main.scss";
.onboardContent {
  padding: 30px 30px;
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

.subTitle {
  color: var(--text-1);
  font-family: Poppins;
  font-size: 28px;
  font-weight: 500;
  line-height: 42px;
  letter-spacing: 0.1300000101327896px;
}

.cardsContent {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 50px;
}

.cardContent {
  width: 403px;
  height: 455px;
  border-radius: 20px;
  background: var(--bg-1);
  box-shadow: 0px 10px 10px 1px var(--shadow);
  display: flex;
  flex-direction: column;
  padding: 40px 30px;
  box-sizing: border-box;
  transition: 0.2s all;
  border: 3px solid var(--bg-1);
}

.cardContent:hover {
  transform: scale(1.025);
  box-shadow: 0px 10px 25px -10px rgba(255, 122, 47, 1);
  border: 3px solid rgba(255, 122, 47, 1);
}

.cardImgContent {
  width: 333px;
  height: 290px;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}

.cardImgContent > img {
  width: 75%;
}

.cardTextContent {
  color: var(--text-1);
  font-family: Poppins;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.10000000149011612px;
  text-align: left;
  margin-top: 20px;
}

.cardStepText {
  color: var(--text-1);
  font-family: Poppins;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.10000000149011612px;
  text-align: left;
}

.connectAWSButton {
  color: #000000;
  width: 247px;
  height: 56px;
  border-radius: 12px;
  background: #ffffff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0.10000000149011612px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 70px auto 0 auto;
}
</style>
