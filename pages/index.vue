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
        <div class="col-12 d-flex justify-content-center">
          <ul class="d-flex list-unstyled">
            <li
              v-for="item in specialTryMenu"
              :key="item.id"
              class="listSpecial"
              v-on:click="menuSpecialActive = item.id"
            >
              {{ item.title }}
            </li>
          </ul>
        </div>
      </div>
      <div v-for="item in specialTryMenu" :key="item.id">
        <div class="row mt-4" v-if="menuSpecialActive == item.id">
          <div
            class="col-md-3 col-sm-12 col-12 text-center"
            v-for="itemMenu in item.menu"
            :key="itemMenu.id"
          >
            <img
              v-bind:src="itemMenu.image"
              :alt="itemMenu.title"
              class="img-fluid"
              style="width: 287px"
            />
            <div>
              <span class="foodTitle">{{ itemMenu.title }}</span>
              <span class="foodChef">{{ itemMenu.chef }}</span>
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
      specialTryMenu: [
        {
          id: 1,
          title: 'Healthy Food',
          menu: [
            {
              id: 1,
              image: '/Foods/HealthyFoods/pic2.png',
              title: 'Avocado Muscle1',
              chef: 'JhoneDoe',
              rating: 5,
            },
            {
              id: 2,
              image: '/Foods/HealthyFoods/pic2.png',
              title: 'Avocado Muscle1',
              chef: 'JhoneDoe',
              rating: 5,
            },
            {
              id: 3,
              image: '/Foods/HealthyFoods/pic2.png',
              title: 'Avocado Muscle1',
              chef: 'JhoneDoe',
              rating: 5,
            },
            {
              id: 4,
              image: '/Foods/HealthyFoods/pic2.png',
              title: 'Avocado Muscle1',
              chef: 'JhoneDoe',
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
              image: '/Foods/HealthyFoods/pic2.png',
              title: 'Avocado Muscle2',
              chef: 'JhoneDoe',
              rating: 5,
            },
            {
              id: 2,
              image: '/Foods/HealthyFoods/pic2.png',
              title: 'Avocado Muscle',
              chef: 'JhoneDoe',
              rating: 5,
            },
            {
              id: 3,
              image: '/Foods/HealthyFoods/pic2.png',
              title: 'Avocado Muscle',
              chef: 'JhoneDoe',
              rating: 5,
            },
            {
              id: 4,
              image: '/Foods/HealthyFoods/pic2.png',
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
              image: '/Foods/HealthyFoods/pic2.png',
              title: 'Avocado Muscle3',
              chef: 'JhoneDoe',
              rating: 5,
            },
            {
              id: 2,
              image: '/Foods/HealthyFoods/pic2.png',
              title: 'Avocado Muscle',
              chef: 'JhoneDoe',
              rating: 5,
            },
            {
              id: 3,
              image: '/Foods/HealthyFoods/pic2.png',
              title: 'Avocado Muscle',
              chef: 'JhoneDoe',
              rating: 5,
            },
            {
              id: 4,
              image: '/Foods/HealthyFoods/pic2.png',
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
              image: '/Foods/HealthyFoods/pic2.png',
              title: 'Avocado Muscle4',
              chef: 'JhoneDoe',
              rating: 5,
            },
            {
              id: 2,
              image: '/Foods/HealthyFoods/pic2.png',
              title: 'Avocado Muscle',
              chef: 'JhoneDoe',
              rating: 5,
            },
            {
              id: 3,
              image: '/Foods/HealthyFoods/pic2.png',
              title: 'Avocado Muscle',
              chef: 'JhoneDoe',
              rating: 5,
            },
            {
              id: 4,
              image: '/Foods/HealthyFoods/pic2.png',
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
</style>