<template>
  <button class="btn" v-bind:class="[bgcolor]">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'breadButton',
  props: ['text', 'bgcolor'],
}
</script>

<style scoped>
.btn {
  border-top-left-radius: 27px;
  border-top-right-radius: 27px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-family: 'QsMedium';
  font-size: 18px;
}
</style>