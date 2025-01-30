<template>
    <section class="matters" :style="{background: `url(${bg} `, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
    backgroundPosition: '50% 50%', backgroundBlendMode: 'soft-light, normal'}">
        <div class="row">
            <div class="content">
                <div class="subline">
                    This fund is designed to give everyone a real shot at achieving the American Dream
                </div>
                <h2>
                    Why this matters?
                </h2>
                <p>
                    This fund is designed to give everyone a real shot at achieving the American Dream—turning it from aspiration to reality. By leveraging AI's unparalleled insights, it aims to elevate the nation to an entirely new economic tier.
                </p>
            </div>
            <div class="image">
                <img :src="logoLarge" alt="USBIF">
            </div>
        </div>
        <div class="mask"></div>
    </section>
</template>
<script setup>
import logoLarge from '@/assets/images/logo_large.webp'
import bg from '@/assets/images/image2.webp'
</script>
<style scoped lang="scss">
.matters {
  padding-top: 86px;
  padding-bottom: 86px;
  box-sizing: border-box;
  position: relative;
  background-blend-mode: soft-light, normal;
  margin-top: 160px;
  margin-bottom: 160px;

  .row {
    position: relative;
  }

  .content {
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .subline {
      color: #26CBFF;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 20px;
    }
  }

  .image {
    width: 45%;
    position: absolute;
    right: 40px;
    top: 50%;
    transform: translateY(-50%);

    img {
      width: 100%;
    }
  }
}

@media screen and (max-width: 1200px) {

}

@media screen and (max-width: 992px) {

}

@media screen and (max-width: 768px) {
    .matters {
      padding-bottom: 200px;

      .content {
        width: 100%;
        text-align: center;
      }
      .image {
        right: 50%;
        top: 100%;
        translate: 50% 70%;
      }
    }
}
</style>