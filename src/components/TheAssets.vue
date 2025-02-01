<template>
    <section class="assets">
        <div v-animate-inview="'fadeInSlide'"
             class="w-1/2 h-96 bg-gray-500 mx-auto opacity-0 row assets">
            <h2>Top 100 Crypto assets</h2>
            <div class="coins">
                <div class="images">
                    <img :src="item" alt="" v-for="item of logos" :key="item">
                </div>

            </div>
            <the-button href="https://t.me/usbifbot">
                Invest now
            </the-button>
        </div>
    </section>
</template>
<script setup>
import TheButton from '@/components/TheButton.vue'


import stellar from '@/assets/images/crypto/stellar.webp'
import btc from '@/assets/images/crypto/btc.webp'
import x from '@/assets/images/crypto/x.webp'
import doge from '@/assets/images/crypto/doge.webp'
import atom from '@/assets/images/crypto/atom.webp'
import ton from '@/assets/images/crypto/ton.webp'
import flower from '@/assets/images/crypto/flower.webp'
import monero from '@/assets/images/crypto/monero.webp'
import tusd from '@/assets/images/crypto/tusd.webp'
import binance from '@/assets/images/crypto/bnb.webp'
import s from '@/assets/images/crypto/s.webp'
import trx from '@/assets/images/crypto/trx.webp'
import bep from '@/assets/images/crypto/bep.webp'
import solana from '@/assets/images/crypto/solana.webp'
import mountains from '@/assets/images/crypto/mountains.webp'
import eth from '@/assets/images/crypto/eth.webp'
import s2 from '@/assets/images/crypto/s2.webp'


const logos = [stellar, btc, x, doge, atom, ton, flower, monero, tusd, binance, s, trx, bep, solana, mountains, eth, s2]
</script>
<style scoped lang="scss">
.assets {
  background: #1E2C35;
  padding-top: 40px;
  padding-bottom: 40px;

  .row {
    flex-direction: column;

    .coins {
      width: 100%;
    }

    .images {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 60px;
      margin-bottom: 60px;
      width: 100%;
      max-width: 1200px;

      img {
        width: 30px;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .assets {
    .row {
      .coins {
        overflow-x: auto;
        overflow-y: hidden;
        margin-bottom: 20px;
        .images {
          width: 1200px;
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {

}

@media screen and (max-width: 768px) {

}
</style>