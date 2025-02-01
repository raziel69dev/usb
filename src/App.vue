<script setup>
import logo from '@/assets/images/logo.png'
import logoBlack from '@/assets/images/logoblack.webp'
import TheHero from "@/components/TheHero.vue";
import TextOnly from "@/components/TextOnly.vue";
import TheAbout from "@/components/TheAbout.vue";
import TheMatters from "@/components/TheMatters.vue";
import TheAssets from "@/components/TheAssets.vue";
import TheIncomes from "@/components/TheIncomes.vue";
import TheMenu from "@/components/TheMenu.vue";
import TheTimer from "@/components/TheTimer.vue";
import TheFooterMenu from "@/components/TheFooterMenu.vue";</script>


<template>
  <header v-animate-inview="'fadeInSlide'"
          class="w-1/2 h-96 bg-gray-500 mx-auto opacity-0 row">
      <div class="logo">
          <img :src="logo" alt="" >
          <span>USBIF</span>
      </div>
      <the-menu />

  </header>

  <main>
      <the-hero />


      <the-timer  />

      <the-about />

      <the-matters />

      <text-only>
          <template #headline>
              Take control of your future with this revolutionary AI-powered crypto fund
          </template>
          <template #description>
              building a legacy for generations while reshaping America’s leadership and prosperity on the global stage.
          </template>
      </text-only>

      <the-incomes />

      <text-only>
          <template #headline>
              Let’s make America rise to new
              heights — together.
          </template>
          <template #description>
              This initiative isn’t just about finances; it’s about progress—empowering individuals, creating opportunities, and redefining the future of our economy to usher in a new chapter of greatness.
          </template>
      </text-only>

      <the-assets />
  </main>
    <footer >
        <div v-animate-inview="'fadeInSlide'"
             class="w-1/2 h-96 bg-gray-500 mx-auto opacity-0 row">
            <div class="logo">
                <img :src="logoBlack" alt="" >
                <p>
                    Control your future with the USBIF Crypto Fund – the cornerstone of a revolutionary new America. Powered by cutting-edge AI and real-time data analysis, USBIF processes petabytes of information to drive smarter investments and unparalleled financial growth.
                </p>
            </div>
            <the-footer-menu />
        </div>

    </footer>
</template>
<style scoped lang="scss">
header {
  .logo {
    display: flex;
    gap: 20px;
    align-items: center;
    cursor: default;
    box-sizing: border-box;
    width: 100%;

    span {
      color: var(--Light, #CEE1E7);
      font-size: 26px;
      font-style: normal;
      font-weight: 600;
      line-height: 28px; /* 107.692% */
      letter-spacing: 0.15px;
    }
  }
}

footer {
  background: #0E181E;
  padding-top: 20px;
  padding-bottom: 40px;

  .logo {
    display: flex;
    gap: 20px;
    align-items: center;
    cursor: default;

    p {
      color: #CEE1E7;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      max-width: 450px;
      line-height: 20px; /* 125% */
    }
  }
}

@media screen and (max-width: 1200px) {

}

@media screen and (max-width: 992px) {

}

@media screen and (max-width: 768px) {
  footer {
    .row {
      flex-direction: column;

    }
    .logo {
      flex-direction: column;
      text-align: center;
    }
  }
}
</style>
