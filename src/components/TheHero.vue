<template>
    <section class="fluid" :style="{background: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: '50% 50%'}">
        <Waypoint @change="onChange">
            <div v-animate-inview="'fadeInSlide'"
                 class="w-1/2 h-96 bg-gray-500 mx-auto opacity-0 row hero">
                <div class="content">
                    <h2>
                        The AI-Driven Crypto Fund
                    </h2>
                    <p>
                        Control your future with the USBIF Crypto Fund – the cornerstone of a revolutionary new America. Powered by cutting-edge AI and real-time data analysis, USBIF processes petabytes of information to drive smarter investments and unparalleled financial growth.
                    </p>
                    <the-button href="https://t.me/usbifbot">
                        Invest now
                    </the-button>
                </div>
                <div class="image">
                    <img :src="device" alt="">
                </div>
            </div>
        </Waypoint>

    </section>
</template>
<script setup>
import device from '@/assets/images/devices_apple_iphone_x.webp'
import bg from '@/assets/images/image.webp'
import TheButton from "@/components/TheButton.vue";


import {defineComponent, reactive} from "vue";
import { Waypoint } from "vue-waypoint";
const animate = reactive({
    animateNow: false
})
const onChange = (e) => {
    if (e.going === 'IN') {
        animate.animateNow = true
    }
}
</script>

<style scoped lang="scss">
.fluid {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  padding-top: 140px;
  padding-bottom: 80px;
  margin-top: -60px;

  .hero {
    position: relative;
    border-radius: 20px;
    border: 2px solid rgba(206, 225, 231, 0.20);
    background: rgba(206, 225, 231, 0.10);
    padding: 40px;
    box-sizing: border-box;
    margin-top: 160px;
    margin-bottom: 80px;


    .content {
      width: 45%;
      display: flex;
      gap: 20px;
      flex-direction: column;
    }
    .image {
      position: absolute;
      right: 40px;
      top: 0;
      transform: translateY(-25%);
    }
  }
}


@media screen and (max-width: 1200px) {

}

@media screen and (max-width: 992px) {

}

@media screen and (max-width: 768px) {
  .fluid {
    margin-top: -220px;
    padding-bottom: 200px;
    .hero {
      flex-direction: column;
      text-align: center;
      align-items: center;


      .content {
        padding-bottom: 200px;
        display: flex;
        justify-content: center;
        width: 100%;
      }
      .image {
        right: 50%;
        top: 100%;
        translate: 50% -20%;
        height: fit-content;

      }
    }
  }
}


</style>