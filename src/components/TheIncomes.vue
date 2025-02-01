<template>
    <section class="fluid">
        <div v-animate-inview="'fadeInSlide'"
             class="w-1/2 h-96 bg-gray-500 mx-auto opacity-0 row hero">
            <div class="content">
                <div class="subline">
                    Experience variable
                </div>
                <h2 class="green">
                    1,000% to 1,000,000% daily returns
                </h2>
                <p>
                    By investing and get rewarded in 100 top-performing crypto assets, with a Special Focus on XLM and XRP.
                </p>
                <the-button href="https://t.me/usbifstellar">
                    Try now
                </the-button>
            </div>
            <div class="image">
                <img :src="device" alt="">
            </div>
        </div>
    </section>
</template>
<script setup>
import device from '@/assets/images/2devices.webp'
import TheButton from "@/components/TheButton.vue";
</script>

<style scoped lang="scss">
.fluid {
  padding-top: 140px;
  margin-top: -60px;

  .hero {
    position: relative;
    border-radius: 20px;
    border: 2px solid rgba(206, 225, 231, 0.20);
    background: rgba(206, 225, 231, 0.10);
    padding: 40px;
    box-sizing: border-box;
    margin-bottom: 80px;


    .content {
      width: 40%;
      display: flex;
      gap: 20px;
      flex-direction: column;

      .subline {
        color: #26CBFF;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
    }
    .image {
      position: absolute;
      right: 40px;
      top: 0;
      transform: translateY(-15%);

      img {
        width: 100%;
      }
    }
  }
}


@media screen and (max-width: 1200px) {

}

@media screen and (max-width: 992px) {

}

@media screen and (max-width: 768px) {
  .fluid {
    padding-bottom: 200px;
    margin-bottom: -200px;
    margin-top: -60px;
    .hero {
      flex-direction: column;
      text-align: center;
      align-items: center;


      .content {
        padding-bottom: 100px;
        display: flex;
        justify-content: center;
        width: 100%;
      }
      .image {
        right: 50%;
        bottom: -50%;
        translate: 50% 65%;

      }
    }
  }
}

</style>