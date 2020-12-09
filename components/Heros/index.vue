<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="headline">
          Eat What You Cook <br />
          With Us, Together!
        </h1>
        <p class="detailHeadline">
          When you eat something that cooked by <br> yourself, the happiness is
          priceless.
        </p>
        <bread-button text="Decide a Menu" bgcolor="bg-yellow"/>
      </div>
    </div>
  </div>
</template>

<script>
import breadButton from '../Buttons/breadButton.vue'
export default {
  components: { breadButton },
  name: 'Hero',
}
</script>

<style>
.headline {
  font-size: 46px;
}
.detailHeadline{
  font-size: 20px;
  line-height: 34px;
  font-family: 'QsRegular';
  color: #8B8BA5;
}
</style>