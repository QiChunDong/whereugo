<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variable.styl'
  .header
    position: relative
    overflow: hidden
    background: $bgColor
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    font-size: .32rem
    padding: 0 .1rem
    color: $fff
    .header-back
      width: .64rem
      top: 0
      left: 0
      position: absolute
      color: #fff
      text-align: center
      font-size: .4rem
</style>
