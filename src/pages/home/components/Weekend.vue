<template>
  <div class="recommend">
    <div class="caption">周末去哪</div>
    <ul>
      <li class="recommend-li border-bottom" v-for="item of list" :key="item.id">
        <div class="recommend-img-wrapper">
          <img class="recommend-img" :src="item.imgUrl">
        </div>
        <div>
          <div class="recommend-info">
            <p class="recommend-title">{{item.title}}</p>
            <p class="recommend-desc">{{item.desc}}</p>
          </div>
      </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .caption
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .recommend-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .recommend-img
      width: 100%
  .recommend-info
    padding: .1rem
    .recommend-title
      line-height: .54rem
      font-size: .32rem
    .recommend-desc
      line-height: .4rem
      color: #ccc
</style>
