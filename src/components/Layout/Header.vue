<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import supabase from '../../supabase/init';
import router from '@/router';
import { onMounted, ref } from "vue";
import { useStore } from 'vuex';

const store = useStore();
const theme = ref();
const showPopover = ref(false);
const avatar = ref({
  type: 9,
  skin: 0
});
const dataUser = ref({});
const colors = ['#FF994E', '#FF7979', '#FF72C4', '#FFC748', '#8BFFD1', '#E394FF', '#838FFF', '#FFF8B5', '#FFD9BD']
const colorsSkin = ['#FFFFFF', '#FAE1C5', '#E5AD7B', '#C88255', '#985830', '#7B442B']

onMounted(() => {
  avatar.value = store.getters.getAvatar;
  dataUser.value = store.getters.getDataUser;
  console.log("dataUser", dataUser.value);
  const localValue = localStorage.getItem('theme');
  if (localValue) {
    document.getElementById('vueApp').setAttribute('data-bs-theme', localValue);
    theme.value = localValue;
  } else {
    document.getElementById('vueApp').setAttribute('data-bs-theme', 'light');
    theme.value = 'light';
  }
})

const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) console.log('Error al cerrar sesión:', error.message);
  else {
    console.log('Sesión cerrada');
    store.dispatch('signOut');
    router.push('/login');
  } 
};

const changeTheme = () => {
  if (theme.value == 'dark') theme.value = 'light';
  else theme.value = 'dark';
  document.getElementById('vueApp').setAttribute('data-bs-theme', theme.value) 
  localStorage.setItem('theme', theme.value)
}

const getAvatarURL = (type = -1) => {
  if (type == -1) type = avatar.value.type;
  if (type == 9) return require(`./../../assets/avatars/avatar_${type}.svg`)
  else return require(`./../../assets/avatars/avatar_${type}_skin_${avatar.value.skin}.svg`)
}

const togglePopover = () => {
  showPopover.value = !showPopover.value;
}

const updateAvatar = (number) => {
  store.dispatch('updateAvatarType', number)
}
const updateSkin = (skin) => {
  store.dispatch('updateAvatarSkin', skin + 1)
}

</script>

<template>
    <div class="headerContent">
      <div class="mainLogo">
          <img src="./../../assets/auth/UnioncloudshimLogo.png" alt="">
          <span class="titleCloudshim"><b>Cloud</b>shim</span>
          <span class="betaText">BETA</span>
      </div>
      <img class="awsLogo" v-if="theme == 'light'" src="./../../assets/layout/awsSmall_light.svg" alt="">
      <img class="awsLogo" v-if="theme == 'dark'" src="./../../assets/layout/awsSmall_dark.svg" alt="">
      <div class="separatorHeader" style="margin-left: auto"></div>
      <div class="custom-popover">
        <button
          class="avatarContent" 
          :style="{background: theme == 'dark' ? colors[avatar.type - 1] : '#FFFFFF'}"
          @click="togglePopover"
        >
            <img
              :src="getAvatarURL()"
            >
        </button>
        <div v-if="showPopover" class="custom-popover-content">
          <div class="avatarsContent">
            <div v-for="number in 9" :key="number"
              class="avatarContentPopover"
              :style="{background: theme == 'dark' ? colors[number - 1] : '#FFFFFF'}"
              :class="[avatar.type != number && 'avatarOption']"
              @click="updateAvatar(number)"
            >
              <img :src="getAvatarURL(number)" :style="{height: number == 9 && '28px'}">
            </div>
          </div>
          <div class="skinsContent">
            <div
              v-for="(skin, index) in colorsSkin"
              :key="skin"
              :style="{background: skin, borderRadius: index == 0 ? '6px 0 0 6px' : index == 5 && '0 6px 6px 0'}"
              :class="[avatar.skin == index + 1 && 'skinSelected']"
              class="skinContent"
              @click="updateSkin(index)"
            ></div>
          </div>
          <div class="infoPopover">
            <span class="namePopover">{{dataUser.name}}</span>
            <span class="emailPopover">{{dataUser.email}}</span>
          </div>
          <div class="buttonContentPopover">
            <button class="signOutPopoverButton" @click="logout">Sign Out</button>
            <button class="settingsPopoverButton">
              <img src="./../../assets/layout/settings.svg" alt="">
              Settings
            </button>
          </div>
        </div>
      </div>
      <div class="separatorHeader"></div>
      <div class="themeSwitch" @click="changeTheme">
          <div :class="[theme == 'dark' ? 'darkTheme' : 'lightTheme' ,'ballTheme']" ></div>
          <img v-if="theme == 'dark'"  src="./../../assets/layout/sun_dark.svg">
          <img v-if="theme == 'dark'"  src="./../../assets/layout/moon_dark.svg">
          <img v-if="theme == 'light'"  src="./../../assets/layout/sun_light.svg">
          <img v-if="theme == 'light'"  src="./../../assets/layout/moon_light.svg">
      </div>
    </div>
</template>

<style lang="scss">
@import './../../main.scss';

.headerContent {
    width: 100%;
    height: 70px;
    background: var(--bg-1);
    box-shadow: 0px -1px 0px 0px var(--border-header) inset;
    display: flex;
    align-items: center;
    padding: 20px 43px;
    box-sizing: border-box;
  }

  .mainLogo {
    display: flex;
    align-items: center;
  }

  .titleCloudshim {
    color: var(--text-1);
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    line-height: normal;
    margin-left: 11px;
  }

  .betaText {
    color: #FF7A2F;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.1px;
    margin-left: 3px;
    margin-top: -15px;
  }

  .awsLogo {
    margin-left: 41px;
  }

  .separatorHeader {
    height: 100%;
    border-left: 1px var(--border-header) dotted;
  }

  .appContent {
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;
  }

  .themeSwitch {
    margin-left: 27px;
    display: flex;
    border-radius: 100px;
    background: var(--theme-switch-bg);
    border: 1px solid var(--border-header);
    width: 64px;
    height: 30px;
    padding: 6px 8px;
    position: relative;
    justify-content: space-between;
    box-sizing: border-box;
    cursor: pointer;
  }

  .themeSwitch > img {
    width: 18px;
    z-index: 1;
    transition: .25s linear;
  }

  .ballTheme {
    position: absolute;
    width: 23px;
    height: 23.82px;
    background: var(--ball-theme-switch);
    border-radius: 100%;
    bottom: 2px;
    left: 5px;
    transition: .25s linear;
  }

  .darkTheme {
    left: 33px;
  }

  .lightTheme {
    left: 5px;
  }

  .avatarContent {
    margin: 0 18px;
    width: 38px;
    height: 38px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .avatarContentPopover {
    width: 55px;
    height: 55px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .avatarContentPopover:hover {
    opacity: 1;
    cursor: pointer;
  }

  .avatarContentPopover > img {
    height: 41px;
  }

  .custom-popover {
    position: relative;
    cursor: pointer;
  }

  .custom-popover-content {
    position: absolute;
    top: 53px;
    left: -87.5px;
    width: 249px;
    height: 428px;
    background-color: var(--bg-1);
    border: 1px solid var(--border-header);
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    padding: 30px 15px;
    z-index: 10;
  }

  .avatarsContent {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    width: 100%;
  }
  
  .avatarOption {
    opacity: 0.65;
  }

  .skinsContent {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 31px;
    margin: 25px 0;
  }

  .skinContent {
    width: 34px;
    height: 100%;
    border-top: 2px solid var(--bg-1);
    border-bottom: 2px solid var(--bg-1);
  }

  .skinSelected {
    border: 2px solid #FF7A2F;
  }

  .infoPopover {
    margin-bottom: 18px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .namePopover {
    font-family: Roboto;
    color: var(--text-1);
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
  }

  .emailPopover {
    font-family: Roboto;
    color: var(--text-2);
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
  }

  .signOutPopoverButton {
    width: 121px;
    height: 38px;
    background: var(--button-1);
    color: var(--text-3);
    font-family: Poppins;
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    text-align: center;
  }

  .settingsPopoverButton {
    width: 121px;
    height: 38px;
    background: transparent;
    color: var(--text-4);
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .buttonContentPopover {
    display: flex;
  }
</style>