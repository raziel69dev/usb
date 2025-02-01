<template>
    <section v-animate-inview="'fadeInSlide'"
             class="w-1/2 h-96 bg-gray-500 mx-auto opacity-0 row text-only">
        <h2>
            <slot name="headline"></slot>
        </h2>
        <p>
            <slot name="description"></slot>
        </p>
    </section>
</template>
<script setup>

</script>
<style scoped lang="scss">
.text-only {
  text-align: center;
  margin-top: 250px;
  margin-bottom: 150px;
  flex-wrap: wrap;
  gap: 55px;
  justify-content: center;

  h2 {
    max-width: 768px;
    width: 100%;
  }
  p {
    max-width: 768px;
    width: 100%;
  }
}
</style>