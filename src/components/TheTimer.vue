<template>
    <section class="timer">
            <div v-animate-inview="'fadeInSlide'"
                      class="w-1/2 h-96 bg-gray-500 mx-auto opacity-0 row">
                <div class="time" :class="{animate: animate.animateNow}">
                    <div class="card">
                        {{ timer.days }}
                        <span>days</span>
                    </div>
                    <div class="sep">:</div>
                    <div class="card">
                        {{ timer.hour }}
                        <span>hours</span>
                    </div>
                    <div class="sep">:</div>
                    <div class="card">
                        {{ timer.minutes }}
                        <span>minutes</span>
                    </div>
    <!--                <p>-->
    <!--                    Until something significant happens.-->
    <!--                </p>-->
                </div>
            </div>


    </section>
</template>
<script setup>
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

const date = new Date(1739393999000)
const dateNow = new Date()

let distance = date - dateNow

const _second = 1000;
const _minute = _second * 60;
const _hour = _minute * 60;
const _day = _hour * 24;

const timer = reactive({
    days: Math.floor(distance / _day),
    hour: Math.floor((distance % _day) / _hour),
    minutes: Math.floor((distance % _hour) / _minute),
})

</script>
<style scoped lang="scss">
.timer {
  background: #1E2C35;
  background-blend-mode: soft-light;
  padding-top: 100px;
  padding-bottom: 100px;
  flex-direction: column;

  .time {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 20px;
    flex-wrap: wrap;
    width: 100%;


    .card {
      width: 80px;
      display: flex;
      padding: 10px 20px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      border-radius: 10px;
      background: linear-gradient(180deg, #3D627A 0%, #1E2C35 100%);
      color: var(--Light, #CEE1E7);
      text-align: center;
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;

      span {
        color: rgba(255, 255, 255, 0.50);
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
    .sep {
      color: var(--Light, #CEE1E7);
      text-align: center;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      transition: .3s ease;
      animation: pulse infinite 3s;

      @keyframes pulse {
        0% { opacity: 1 }
        30% { opacity: 1 }
        50% { opacity: 0 }
        80% { opacity: 1 }
        100% { opacity: 1 }
      }
    }
  }
}

footer {
  background: #0E181E;
  padding-top: 20px;
  padding-bottom: 40px;

}

@media screen and (max-width: 1200px) {

}

@media screen and (max-width: 992px) {

}

@media screen and (max-width: 768px) {
  .timer .time {
    gap: 10px;
    .card {
      padding: 10px 20px;
      width: 30px;
      font-size: 22px;
      span {
        font-size: 14px;
      }
    }
  }
}
</style>