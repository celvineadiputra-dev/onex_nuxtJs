<template>
  <div>
    <Hero class="mt-5" />
    <div class="container mt-5">
      <div class="row">
        <div class="col-12 text-center">
          <span class="titleSpan">Watch Now</span>
          <h3 class="title">Special to Try</h3>
        </div>
      </div>
      <div class="row mt-4">
        <div
          class="col-6 col-md-3 text-center mt-sm-3 mt-2 cursor-pointer font-regular"
          v-bind:class="menuSpecialActive == item.id ? 'activeFood' : ''"
          v-for="item in specialTryMenu"
          :key="item.id"
          v-on:click="menuSpecialActive = item.id"
        >
          {{ item.title }}
        </div>
      </div>
      <div v-for="item in specialTryMenu" :key="item.id">
        <div class="row mt-4" v-if="menuSpecialActive == item.id">
          <div
            class="col-md-3 col-sm-6 col-6 text-center"
            v-for="itemMenu in item.menu"
            :key="itemMenu.id"
          >
            <div class="skleton">
              <img
                class="Sirv"
                :data-src="itemMenu.image"
                :alt="itemMenu.title"
              />
            </div>
            <div>
              <span class="foodTitle text-cs-sm-15px">{{
                itemMenu.title
              }}</span>
              <span class="foodChef text-cs-sm-13px">{{ itemMenu.chef }}</span>
              <Love v-bind:love="itemMenu.rating" class="mt-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-6 offset-md-3">
          <Testimonial
            class="pt-4"
            image="/images/pic.png"
            name="Camella Sarrah"
            job="Vege Master Foods"
            text="Awalnya saya malu dengan mertua karena tidak bisa memasak, kini mereka lebih suka makan malam di rumah demi menyantap masakan yang saya buat sendiri"
          />
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-12">
          <Jumbotron :data="dataJumbotron"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Heros/index'
import Love from '@/components/Love/index'
import Testimonial from '@/components/Testimonial/index'
import Jumbotron from '@/components/Jumbotron/index'
export default {
  components: {
    Hero,
    Love,
    Testimonial,
    Jumbotron
  },
  data() {
    return {
      menuSpecialActive: '1',
      active: '1',
      specialTryMenu: [],
      dataJumbotron:[
        {
          id : 1,
          number : "180.0000 +",
          title : "Menu Foods"
        },
        {
          id : 2,
          number : "20.000 +",
          title : "Chefs"
        },
        {
          id : 3,
          number : "40.000 +",
          title : "Cource"
        },
        {
          id : 4,
          number : "150.000 +",
          title : "Students"
        },
      ]
    }
  },
  created() {
    fetch(process.env.baseUrl+'/data/Foods.json')
      .then((res) => res.json())
      .then((res) => {
        this.specialTryMenu = res.data
      })
  },
}
</script>

<style scoped>
span.titleSpan {
  font-family: 'QsRegular';
  font-size: 20px;
}

span.foodTitle {
  display: block;
  font-family: 'QsMedium';
  font-size: 22px;
}

span.foodChef {
  display: block;
  font-family: 'QsRegular';
  font-size: 16px;
}

h3.title {
  font-size: 32px;
}

li:not(:last-child) {
  margin-right: 2.5rem;
}

.font-regular {
  font-family: 'QsRegular';
}
</style>
