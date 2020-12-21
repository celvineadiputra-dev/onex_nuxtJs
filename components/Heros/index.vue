<template>
  <div class="container">
    <div class="row">
        <div class="col-sm-12 col-md-6 d-flex justify-content-center flex-column order-sm-1 order-md-0 order-1">
          <h1 class="headline col-sm-12 col-md-10" data-aos="fade-right" data-aos-duration="2000">
            Eat What You Cook
            With Us, Together!
          </h1>
          <p class="detailHeadline col-sm-12 col-md-8">
            When you eat something that cooked by
            yourself, the happiness is priceless.
            <br>
            {{code}}.
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
        <div class="col-sm-12 col-md-6 order-sm-0 order-md-1 order-0">
          <img class="Sirv img-fluid" data-src="https://ouscerea.sirv.com/onexFoods/Hero.png?format=webp&q=80" alt="imageHeroChef" />
        </div>
    </div>
  </div>
</template>

<script>
import breadButton from '../Buttons/breadButton.vue'
export default {
  components: { breadButton },
  name: 'Hero',
  data : function(){
    return{
      code : []
    }
  },
  async fetch(){
    this.code = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res=>res.json()).then(res=>{
      console.log(res);
      return res;
    });
  }
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