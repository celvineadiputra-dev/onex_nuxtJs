<template>
  <div class="text-center">
    <p class="text-sm-small">
      {{ text }}
    </p>
    <div class="container mt-4">
      <div class="row">
        <div class="col-sm-12 text-center d-flex justify-content-center">
          <img v-bind:src="image" :alt="name" width="90" height="86" />
          <div class="d-flex flex-column ml-2">
            <label class="name">{{ name }}</label>
            <span class="job">{{ job }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testinomial',
  props: {
    text: String,
    image: String,
    name: String,
    job: String,
  },
}
</script>

<style scoped>
p {
  font-family: 'QsRegular';
  line-height: 1.5;
  font-size: 30px;
}
label.name {
  font-family: 'QsMedium';
  font-size: 22px;
}
span.job {
  font-family: 'QsRegular';
  font-size: 16px;
}
.ml-2 {
  margin-left: 15px !important;
}
</style>
