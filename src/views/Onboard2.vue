<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="onboardContent">
    <span class="mainTitle">Connect Account</span>
    <div class="cardOnboardContent">
      <div class="stepInfoContent">
        <div class="stepNumber">1</div>
        <div class="stepTextContent">
          <span class="stepText1"
            >Cloudshim only require light READ-ONLY permissions. Click the link below to
            continue:</span
          >
          <span class="stepText2"
            >Note: Please onboard your management account (where you receive your
            bill)</span
          >
          <button class="buttonCloudshimStack">Run Cloudshim stack</button>
          <div class="stepSubInfoContent">
            <span class="stepSubInfo1"
              >This template Grants Cloudshim the following permissions:</span
            >
            <span class="stepSubInfo2">Read only access: </span>
            <span class="stepSubInfoList"
              >— provides read-only access to AWS services and resources</span
            >
            <span class="stepSubInfoList"
              >— provides read-only access to AWS services and resources</span
            >
            <span class="stepSubInfoList"
              >— provides read-only access to AWS services and resources</span
            >
            <span class="stepSubInfoDownload"
              >To download/review it <a href="">click here</a></span
            >
          </div>
        </div>
      </div>
      <div class="stepInfoContent" style="margin-top: 50px">
        <div class="stepNumber">2</div>
        <div class="stepTextContent">
          <span class="stepText1">
            Once the status of the CloudshimStack reads
            <div class="stackText">
              <img src="./../assets/onboard/Vectorstack.svg" alt="" />
              <span style="margin-left: 5px">Create_complete</span>
            </div>
            template has been deployed, Cloudshim AI bot will start analysing your
            savings.</span
          >
        </div>
      </div>
      <div class="step2Buttons">
        <button @click="backStep" class="backStepButton">Back</button>
        <button @click="nextStep" class="nextStepButton">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const backStep = () => {
      router.push("/dashboard");
    };

    const nextStep = () => {
      router.push("/dashboard/onboarding-account");
    };

    return {
      backStep,
      nextStep,
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
  margin-top: 30px;
  border-radius: 20px;
  background: var(--bg-1) !important;
  box-shadow: 0px 10px 10px 1px var(--shadow) !important;
  display: flex;
  flex-direction: column;
  padding: 40px 30px;
  box-sizing: border-box;
}

.stepInfoContent {
  display: flex;
  align-items: flex-start;
  width: 100%;
}

.stepNumber {
  width: 36px;
  min-width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25.6px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.09244445711374283px;
  color: rgba(255, 122, 47, 1);
  margin-right: 20px;
  box-shadow: 0px 10px 10px 1px rgba(170, 109, 62, 0.09);
}

.stepTextContent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.stepText1 {
  color: var(--text-1);
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.10000000149011612px;
  display: flex;
  align-items: center;
}

.stepText2 {
  color: var(--text-1);
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0.10000000149011612px;
  text-align: left;
}

.buttonCloudshimStack {
  width: 215px;
  height: 56px;
  border-radius: 12px;
  background: rgba(255, 122, 47, 1);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0.10000000149011612px;
  color: #ffffff;
  margin-top: 10px;
}

.stepSubInfoContent {
  color: var(--text-1);
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 232px;
  border-radius: 20px;
  padding: 20px 40px;
  box-sizing: border-box;
  background: var(--bg-3);
}

.stepSubInfo1 {
  color: var(--text-1);
  font-size: 12px;
  font-weight: 400;
  line-height: 14.06px;
  letter-spacing: 0.10000000149011612px;
  text-align: left;
}

.stepSubInfo2 {
  color: var(--text-1);
  font-size: 18px;
  font-weight: 500;
  line-height: 21.09px;
  letter-spacing: 0.10000000149011612px;
  text-align: left;
  margin-top: 15px;
  margin-bottom: 10px;
}

.stepSubInfoList {
  color: var(--text-1);
  font-size: 14px;
  font-weight: 400;
  line-height: 16.41px;
  letter-spacing: 0.10000000149011612px;
  text-align: left;
  margin: 7.5px 0px;
}

.stepSubInfoDownload {
  color: var(--text-1);
  font-size: 16px;
  font-weight: 400;
  line-height: 18.75px;
  letter-spacing: 0.10000000149011612px;
  text-align: left;
  margin-top: 12.5px;
}

.stepSubInfoDownload > a {
  color: #0062ff;
  text-decoration: none;
}

.stackText {
  width: 149px;
  height: 26px;
  background: rgba(225, 255, 243, 1);
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  margin: 0 5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.41px;
  color: rgba(31, 188, 125, 1);
  justify-content: center;
}

.step2Buttons {
  margin: auto auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.backStepButton {
  width: 128px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid rgba(151, 151, 151, 1);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0.10000000149011612px;
  background: #ffffff;
  margin-right: 10px;
  color: #000000;
}

.nextStepButton {
  width: 130px;
  height: 48px;
  border-radius: 8px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0.10000000149011612px;
  background: rgba(0, 98, 255, 1);
  color: #ffffff;
}
</style>
