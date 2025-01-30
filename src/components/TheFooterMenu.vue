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
        <the-button href="https://t.me/usbifstellar" style="width: fit-content">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                <path d="M6.83516 8.58718L15.0246 0.94372M6.93467 8.826L8.98445 13.7455C9.16503 14.1789 9.25531 14.3956 9.38541 14.4588C9.49819 14.5137 9.63254 14.5137 9.74538 14.459C9.87556 14.3959 9.96612 14.1793 10.1472 13.7461L15.2873 1.4527C15.4508 1.06166 15.5326 0.86614 15.4879 0.741204C15.449 0.632704 15.3578 0.547557 15.2416 0.511311C15.1077 0.469573 14.8982 0.545874 14.4793 0.698474L1.30773 5.49591C0.843605 5.66495 0.611543 5.74948 0.543914 5.87098C0.485287 5.9763 0.485366 6.10169 0.544126 6.20695C0.611908 6.32837 0.844076 6.41264 1.30841 6.58118L6.57929 8.49431C6.67354 8.52852 6.72067 8.54563 6.76035 8.57205C6.79553 8.59546 6.82629 8.62417 6.85138 8.657C6.87968 8.69404 6.89801 8.73803 6.93467 8.826Z"
                      stroke="#CEE1E7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>
                      Telegram
                  </span>
        </the-button>




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
    align-items: center;
    flex-shrink: 0;
    gap: 20px;
    justify-content: end;

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
      position: relative;
      flex-direction: column;
      align-items: center;

      .links {
        margin-top: 40px;
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;

        .link {
          width: 100%;
          text-align: center;
        }
      }
    }
  .tg {
    display: none;
  }
}

</style>