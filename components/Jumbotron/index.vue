<template>
  <div class="container mb-2">
    <div class="row">
      <div
        class="col-sm-3 text-center cardHover"
        v-for="item in data"
        :key="item.id"
      >
        <h1>{{ item.number }}</h1>
        <h6>{{ item.title | upperCase }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Jumbotron',
  props: {
    data: Array,
  },
  filters: {
    upperCase: function (val) {
      return val.toUpperCase()
    },
  },
}
</script>

<style scoped>
h1 {
  font-family: 'QsBold';
  font-size: 32px;
}
h6 {
  font-family: 'QsRegular';
}
.cardHover:hover {
  background-color: #f4f4f496;
  border-radius: 50px;
  transition: 0.3s;
  cursor: pointer;
  box-shadow: 2px 0 3px #eeebeb;
}
</style>