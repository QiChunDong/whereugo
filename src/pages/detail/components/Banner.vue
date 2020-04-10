<template>
  <div>
    <div class="banner" @click="handleBnnerClick">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe632;</span>{{gallaryImgs.length}}</div>
      </div>
    </div>
    <fade-animation>
      <commen-gallary @close="handleClose" :imgs="gallaryImgs" v-show="showGallary"></commen-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommenGallary from 'commen/gallary/Gallary'
import FadeAnimation from 'commen/fade/FadeAnimation'
export default {
  name: 'Banner',
  data () {
    return {
      showGallary: false
    }
  },
  components: {
    CommenGallary,
    FadeAnimation
  },
  methods: {
    handleBnnerClick () {
      this.showGallary = true
    },
    handleClose () {
      this.showGallary = false
    }
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      right: 0
      left: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        line-height: .32rem
        height: .4rem
        margin-top: .14rem
        padding: 0 .2rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        fontsize: .24rem
        padding: 0 .4rem
        .banner-icon
          font-size: .28rem
          padding-right: .1rem
</style>
