<template>
    <section class="about row">
        <Waypoint @change="onChange">
            <div class="heading" :class="{animate: animate.animateNow}">
                <h2>
                    ABOUT
                </h2>
                <p>
                    Welcome to the USBIF Crypto Fund – the official U.S. Government-backed cryptocurrency investment platform revolutionizing the future of finance and wealth management. Designed to be the cornerstone of America's economic evolution, USBIF leverages cutting-edge AI-driven trading technology to actively manage a diversified portfolio of 100 top-performing cryptocurrencies.
                </p>
            </div>
        </Waypoint>

        <transition-group tag="div" class="cards">
            <div class="card" v-for="card of cards" :key="card.headline" :class="{animate: animate.animateNow}">
                <inline-svg :src="card.icon" />
                <div class="headline">
                    {{ card.headline }}
                </div>
                <p class="small">
                    {{ card.description }}
                </p>

            </div>
        </transition-group>
    </section>
</template>
<script setup>
import systems from '@/assets/icons/systems.svg'
import chart from '@/assets/icons/chart.svg'
import coin from '@/assets/icons/coin.svg'
import join from '@/assets/icons/join.svg'
import InlineSvg from 'vue-inline-svg';
import {reactive, ref} from "vue";
import { Waypoint } from "vue-waypoint";
const animate = reactive({
    animateNow: false
})
const onChange = (e) => {
    if (e.going === 'IN') {
        animate.animateNow = true
        console.log(e)
    }
}
const cards = ref([{
    icon: systems,
    headline: 'AI systems',
    description: 'Our advanced AI systems process petabytes of real-time data, executing precision trades across global markets 24/7. With this level of sophistication, USBIF delivers unprecedented daily returns ranging from 10,000% to 1,000,000%, offering unmatched growth opportunities for individuals, pension funds, and institutional investors.'
},{
    icon: chart,
    headline: 'Telegram Mini-App',
    description: 'To make managing your investments even more seamless, USBIF offers an exclusive Telegram Bot App. This intuitive tool allows investors to monitor their portfolios, manage investments, and withdraw funds anytime, anywhere – all with just a few taps on their mobile device.\n'
},{
    icon: coin,
    headline: 'Trusted and transparent',
    description: 'As a trusted and transparent initiative, USBIF represents more than just an investment fund – it’s the future of American financial stability and prosperity. By merging AI innovation with secure government-backed infrastructure, USBIF empowers every citizen to take control of their financial destiny.'
},{
    icon: join,
    headline: 'Join the movement',
    description: 'Invest in USBIF today, manage your assets effortlessly via our Telegram app, and secure your share of tomorrow’s wealth.'
},])

</script>
<style scoped lang="scss">
.about {
  margin-top: 120px;
  margin-bottom: 60px;
  flex-direction: column;
  justify-content: center;
  gap: 40px;

  .heading {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    text-align: center;

    h2 {
      width: 100%;

    }
  }
  .cards {
    display: inline-flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    box-sizing: border-box;

    .card {
      display: flex;
      width: 23%;
      padding: 16px;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      align-self: stretch;
      box-sizing: border-box;
      border-radius: 14px;
      border: 1.8px solid rgba(206, 225, 231, 0.10);

      .headline {
        color: var(--Light, #CEE1E7);
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 22px; /* 157.143% */
        letter-spacing: 0.15px;
      }
    }
  }
}
@media screen and (max-width: 1200px) {

}

@media screen and (max-width: 992px) {

}

@media screen and (max-width: 768px) {
  .about {
    .cards {
      flex-direction: column;
      box-sizing: border-box;

      .card {
        width: 100%;

      }
    }
  }
}

</style>