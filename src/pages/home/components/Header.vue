<template>
 <div class="header">
  <div class="header-left">
    <div class="iconfont back-icon">&#xe624;</div>
  </div>
  <div class="header-input">
    <span class="iconfont">&#xe633;</span>
    输入城市/景点/游玩主题
  </div>
  <router-link to="/city">
    <div class="header-right">
      {{this.currentCity}}<span class="iconfont arrow-icon">&#xe6aa;</span>
    </div>
  </router-link>
 </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/variable.styl'
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .62rem
      line-height: .62rem
      background: #fff
      border-radius: .1rem
      margin-left: .2rem
      margin-top: .12rem
      color: #ccc
      padding-left: .1rem
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      color: #fff
      float: right
      text-align: center
      .arrow-icon
        font-size: .24rem
        padding-left: .05rem
</style>
