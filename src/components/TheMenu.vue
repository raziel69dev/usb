<template>
    <nav class="nav">
        <div class="links">
            <div class="link">
                <a href="#">
                    HOME
                </a>
            </div>
            <div class="link">
                <a href="#">
                    ABOUT
                </a>
            </div>
            <div class="link">
                <a href="#">
                    CRYPTO ASSETS
                </a>
            </div>

        </div>
        <the-button-white style="width: fit-content" class="menu" @click="toggleMenu(false)">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                <path d="M1 7.5H16M1 1H16M1 14H16" stroke="#CEE1E7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </the-button-white>
        <the-button href="https://t.me/usbifstellar" style="width: fit-content">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                <path d="M6.83516 8.58718L15.0246 0.94372M6.93467 8.826L8.98445 13.7455C9.16503 14.1789 9.25531 14.3956 9.38541 14.4588C9.49819 14.5137 9.63254 14.5137 9.74538 14.459C9.87556 14.3959 9.96612 14.1793 10.1472 13.7461L15.2873 1.4527C15.4508 1.06166 15.5326 0.86614 15.4879 0.741204C15.449 0.632704 15.3578 0.547557 15.2416 0.511311C15.1077 0.469573 14.8982 0.545874 14.4793 0.698474L1.30773 5.49591C0.843605 5.66495 0.611543 5.74948 0.543914 5.87098C0.485287 5.9763 0.485366 6.10169 0.544126 6.20695C0.611908 6.32837 0.844076 6.41264 1.30841 6.58118L6.57929 8.49431C6.67354 8.52852 6.72067 8.54563 6.76035 8.57205C6.79553 8.59546 6.82629 8.62417 6.85138 8.657C6.87968 8.69404 6.89801 8.73803 6.93467 8.826Z"
                      stroke="#CEE1E7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="tg">
                      Telegram
                  </span>
        </the-button>

        <teleport to="body">
        <div class="mobile-menu" v-show="!menu.collapsed">

            <div class="absolute-button">
                <the-button-white style="width: fit-content" class="menu" @click="toggleMenu(true)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M13 1L1 13M1 1L13 13" stroke="#CEE1E7" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </the-button-white>
            </div>
            <div class="logo">
                <img :src="logo" alt="">
                USBIF
            </div>

            <div class="link">
                <a href="#">
                    HOME
                </a>
            </div>
            <div class="link">
                <a href="#">
                    ABOUT
                </a>
            </div>
            <div class="link">
                <a href="#">
                    CRYPTO ASSETS
                </a>
            </div>

            <the-button href="https://t.me/usbifstellar" style="width: fit-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                    <path d="M6.83516 8.58718L15.0246 0.94372M6.93467 8.826L8.98445 13.7455C9.16503 14.1789 9.25531 14.3956 9.38541 14.4588C9.49819 14.5137 9.63254 14.5137 9.74538 14.459C9.87556 14.3959 9.96612 14.1793 10.1472 13.7461L15.2873 1.4527C15.4508 1.06166 15.5326 0.86614 15.4879 0.741204C15.449 0.632704 15.3578 0.547557 15.2416 0.511311C15.1077 0.469573 14.8982 0.545874 14.4793 0.698474L1.30773 5.49591C0.843605 5.66495 0.611543 5.74948 0.543914 5.87098C0.485287 5.9763 0.485366 6.10169 0.544126 6.20695C0.611908 6.32837 0.844076 6.41264 1.30841 6.58118L6.57929 8.49431C6.67354 8.52852 6.72067 8.54563 6.76035 8.57205C6.79553 8.59546 6.82629 8.62417 6.85138 8.657C6.87968 8.69404 6.89801 8.73803 6.93467 8.826Z"
                          stroke="#CEE1E7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>
                      Telegram
                  </span>
            </the-button>

            <p>
                Control your future with the USBIF Crypto Fund – the cornerstone of a revolutionary new America. Powered by cutting-edge AI and real-time data analysis, USBIF processes petabytes of information to drive smarter investments and unparalleled financial growth.
            </p>
        </div>
        </teleport>

    </nav>
</template>
<script setup>
import logo from '@/assets/images/logo.png'
import TheButton from '@/components/TheButton.vue'
import TheButtonWhite from '@/components/TheButtonWhite.vue'
import {reactive} from "vue";


const menu = reactive({
    collapsed: true
})

const toggleMenu = (hide) => {
    if (hide) {
        menu.collapsed = hide
        document.body.style.maxHeight = 'auto'
        document.body.style.overflow = 'hidden scroll'

    } else {
        menu.collapsed = hide
        document.body.style.maxHeight = '100vh'
        document.body.style.overflow = 'hidden hidden'
    }
}
</script>
<style scoped lang="scss">
.nav {
  width: 60%;
  display: flex;
  justify-content: end;
  gap: 20px;

  .links {
    display: flex;
    width: 100%;
    justify-content: end;
    align-items: center;
    flex-shrink: 0;
    gap: 20px;

    .link {
      a {
        color: #FFF;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 125% */
        transition: .3s ease;
        text-decoration: none;
        border-bottom: 1px solid transparent;

        &:hover {
          border-bottom-color: #fff;
        }
      }
    }
  }
}

.menu {
  display: none;
}

.mobile-menu {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(30, 44, 53, 0.90);
  padding: 10px 20px 20px 20px;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: hidden;
  max-width: 100vw;
  display: flex;
  justify-content: start;
  backdrop-filter: blur(5px);
  z-index: 50;

  .logo {
    display: flex;
    gap: 20px;
    color: var(--Light, #CEE1E7);
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 107.692% */
    letter-spacing: 0.15px;
    align-items: center;
  }

  .absolute-button {
    position: fixed;
    right: 20px;
    top: 20px;
  }

  p {
    text-align: center;
    margin-top: 50px;
  }
  .link a {
    color: #FFF;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
    text-decoration: none;
  }
}

@media screen and (max-width: 1200px) {

}

@media screen and (max-width: 992px) {

}

@media screen and (max-width: 768px) {
  .menu {
    display: flex;
  }
    .nav {
      width: 100%;
      justify-content: end;
      max-width: 100%;
      gap: 20px;

      .links {
        display: none;
      }
    }
  .tg {
    display: none;
  }
}

</style>