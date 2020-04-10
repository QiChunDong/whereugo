<template>
  <div class="swiper-div">
    <swiper :options="swiperOption" v-if="listLength ">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    listLength () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .swiper-div >>> .swiper-pagination-bullet-active
    background: #fff
  .swiper-div
    overflow: hidden
    height: 0
    width: 100%
    padding-bottom: 31.25%
    background: #fff
    .swiper-img
      width: 100%
</style>
