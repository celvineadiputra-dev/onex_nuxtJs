<template>
  <div>
    <i
      class="fas fa-heart-circle loveFas"
      v-for="(i, index) in love"
      :key="index"
    ></i>
  </div>
</template>

<script>
export default {
  name: 'Love',
  props: {
    love: Number,
  },
}
</script>

<style scoped>
.loveFas {
  width: 22px;
  height: 22px;
}
</style>