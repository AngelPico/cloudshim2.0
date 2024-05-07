<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="menuContent">
    <div class="optionMenu optionMenuActive">
      <img src="./../../assets/layout/cloudBlueprint.svg" alt="">
      <span>Cloud Blueprint</span>
    </div>
    <div class="optionMenu">
      <img src="./../../assets/layout/costAnalytics.svg" alt="">
      <span>Cost Analysis</span>
    </div>
  </div>
</template>

<script>
// import router from '@/router';

export default {
  setup() {    

    return {
    };
  }
};
</script>


<style lang="scss">
@import './../../main.scss';
 
  .menuContent {
    width: 250px;
    background: var(--bg-1);
    display: flex;
    flex-direction: column;
    padding: 30px 0px;
    box-sizing: border-box;
  }

  .optionMenu {
    width: 100%;
    height: 46px;
    display: flex;
    align-items: center;
    padding: 11px 21px;
    box-sizing: border-box;
    transition: 0.2s all;
    margin-bottom: 10px;
    border-left: 4px solid var(--bg-1);
    cursor: pointer;
  }

  .optionMenuActive {    
    background: rgba(255, 122, 47, 0.1);
    border-left: 4px solid #FF7A2F;
  }

  .optionMenu:hover {
    background: rgba(255, 122, 47, 0.1);
    border-left: 4px solid rgba(255, 122, 47, 0.1);
  }

  .optionMenu:hover > img{
    fill: #FF7A2F;
  }

  .optionMenu > span {
    color:  var(--text-1);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.1px;
    margin-left: 19px;
  }

  .optionMenu > img {
    width: 24px;
  }
</style>