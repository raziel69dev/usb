<template>
    <section class="text-only row">
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