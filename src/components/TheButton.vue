<template>
    <a :href="props.href" class="btn" target="_blank">
        <slot />
    </a>
</template>
<script setup>
const props = defineProps(['href'])
</script>
<style scoped lang="scss">
.btn {
  color: #CEE1E7;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 130% */
  letter-spacing: 0.1px;
  min-width: 190px;
  display: flex;
  width: fit-content;
  box-sizing: border-box;
  padding: 10px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  border-radius: 8px;
  background: #2990FF;
  cursor: pointer;
  transition: .3s ease;
  text-decoration: none;


  &:hover {
    opacity: .8;
  }
}

@media screen and (max-width: 1200px) {

}

@media screen and (max-width: 992px) {

}

@media screen and (max-width: 768px) {
  .btn {
    width: 100%;
    padding: 10px;
    min-width: 36px;
    span {
      display: none;
    }
  }
}

</style>