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
        <div class="col-6 col-md-3 text-center mt-sm-3 mt-2 cursor-pointer font-regular" v-bind:class="menuSpecialActive == item.id ? 'activeFood': ''" v-for="item in specialTryMenu"
              :key="item.id" v-on:click="menuSpecialActive = item.id">
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
          <img class="Sirv" :data-src="itemMenu.image" :alt="itemMenu.title" />
            <div>
              <span class="foodTitle text-cs-sm-15px">{{ itemMenu.title }}</span>
              <span class="foodChef text-cs-sm-13px">{{ itemMenu.chef }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Heros/index'
export default {
  components: {
    Hero,
  },
  data() {
    return {
      menuSpecialActive: '1',
      active: '1',
      specialTryMenu: [
        {
          id: 1,
          title: 'Healthy Food',
          menu: [
            {
              id: 1,
              image: 'https://ouscerea.sirv.com/onexFoods/pic(2).png?w=287&format=webp&q=50',
              title: 'Salad Kiwi Sugga',
              chef: 'ChefLook',
              rating: 5,
            },
            {
              id: 2,
              image: 'https://ouscerea.sirv.com/onexFoods/pic.png?w=287&h=300&format=webp&q=50',
              title: 'Bayam Red Poppeye',
              chef: 'GoldTeamFoods',
              rating: 5,
            },
            {
              id: 3,
              image: 'https://ouscerea.sirv.com/onexFoods/pic2.png?w=287&h=300&format=webp&q=50',
              title: 'Avocado Muscle1',
              chef: 'QuitFoods',
              rating: 5,
            },
            {
              id: 4,
              image: 'https://ouscerea.sirv.com/onexFoods/pic(1).png?w=287&h=300&format=webp&q=50',
              title: 'Naga Fruity Joss',
              chef: 'ThingFood',
              rating: 5,
            },
          ],
        },
        {
          id: 2,
          title: 'Launch',
          menu: [
            {
              id: 1,
              image: 'https://ouscerea.sirv.com/onexFoods/pic2.png?w=287&h=300&format=webp&q=50',
              title: 'Avocado Muscle2',
              chef: 'JhoneDoe',
              rating: 5,
            },
            {
              id: 2,
              image: 'https://ouscerea.sirv.com/onexFoods/pic2.png?w=287&h=300&format=webp&q=50',
              title: 'Avocado Muscle',
              chef: 'JhoneDoe',
              rating: 5,
            },
            {
              id: 3,
              image: 'https://ouscerea.sirv.com/onexFoods/pic2.png?w=287&h=300&format=webp&q=50',
              title: 'Avocado Muscle',
              chef: 'JhoneDoe',
              rating: 5,
            },
            {
              id: 4,
              image: 'https://ouscerea.sirv.com/onexFoods/pic2.png?w=287&h=300&format=webp&q=50',
              title: 'Avocado Muscle',
              chef: 'JhoneDoe',
              rating: 5,
            },
          ],
        },
        {
          id: 3,
          title: 'Vege Desert',
          menu: [
            {
              id: 1,
              image: 'https://ouscerea.sirv.com/onexFoods/pic2.png?w=287&h=300&format=webp&q=50',
              title: 'Avocado Muscle3',
              chef: 'JhoneDoe',
              rating: 5,
            },
            {
              id: 2,
              image: 'https://ouscerea.sirv.com/onexFoods/pic2.png?w=287&h=300&format=webp&q=50',
              title: 'Avocado Muscle',
              chef: 'JhoneDoe',
              rating: 5,
            },
            {
              id: 3,
              image: 'https://ouscerea.sirv.com/onexFoods/pic2.png?w=287&h=300&format=webp&q=50',
              title: 'Avocado Muscle',
              chef: 'JhoneDoe',
              rating: 5,
            },
            {
              id: 4,
              image: 'https://ouscerea.sirv.com/onexFoods/pic2.png?w=287&h=300&format=webp&q=50',
              title: 'Avocado Muscle',
              chef: 'JhoneDoe',
              rating: 5,
            },
          ],
        },
        {
          id: 4,
          title: 'Shake',
          menu: [
            {
              id: 1,
              image: 'https://ouscerea.sirv.com/onexFoods/pic2.png?w=287&h=300&format=webp&q=50',
              title: 'Avocado Muscle4',
              chef: 'JhoneDoe',
              rating: 5,
            },
            {
              id: 2,
              image: 'https://ouscerea.sirv.com/onexFoods/pic2.png?w=287&h=300&format=webp&q=50',
              title: 'Avocado Muscle',
              chef: 'JhoneDoe',
              rating: 5,
            },
            {
              id: 3,
              image: 'https://ouscerea.sirv.com/onexFoods/pic2.png?w=287&h=300&format=webp&q=50',
              title: 'Avocado Muscle',
              chef: 'JhoneDoe',
              rating: 5,
            },
            {
              id: 4,
              image: 'https://ouscerea.sirv.com/onexFoods/pic2.png?w=287&h=300&format=webp&q=50',
              title: 'Avocado Muscle',
              chef: 'JhoneDoe',
              rating: 5,
            },
          ],
        },
      ],
    }
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
.font-regular{
  font-family: 'QsRegular';
}
</style>