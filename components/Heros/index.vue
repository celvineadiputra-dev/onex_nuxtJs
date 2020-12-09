<template>
  <div class="container">
    <div class="row">
      <div class="d-flex align-items-center">
        <div class="col-sm-12 col-md-6">
          <h1 class="headline">
            Eat What You Cook <br />
            With Us, Together!
          </h1>
          <p class="detailHeadline">
            When you eat something that cooked by <br />
            yourself, the happiness is priceless.
          </p>
          <bread-button
            text="Decide a Menu"
            bgcolor="bg-yellow"
            class="mt-4"
            :style="{
              height: 50 + 'px',
              width: 210 + 'px',
            }"
          />
        </div>
        <div class="col-sm-12 col-md-6">
          <img src="/video.png" alt="imageHeroChef" class="img-fluid" />
        </div>
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
.detailHeadline {
  font-size: 20px;
  line-height: 34px;
  font-family: 'QsRegular';
  color: #8b8ba5;
}
</style>