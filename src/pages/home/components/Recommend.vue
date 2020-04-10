<template>
  <div class="recommend">
    <div class="caption">热销推荐</div>
    <ul>
      <router-link tag="li" class="recommend-li border-bottom" v-for="item of list" :key="item.id" :to="'/detail/' + item.id">
        <img class="recommend-img" :src="item.imgUrl">
        <div>
          <div class="recommend-info">
            <p class="recommend-title">{{item.title}}</p>
            <p class="recommend-desc">{{item.desc}}</p>
            <button class="recommend-button">查看详情</button>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
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
  .recommend-li
    height: 1.9rem
    overflow: hidden
    display: flex
    .recommend-img
      height: 1.7rem
      width: 1.7rem
      padding .1rem
    .recommend-info
      flex: 1
      padding: .1rem
      .recommend-title
        line-height: .54rem
        font-size: .32rem
      .recommend-desc
        line-height: .4rem
        color: #ccc
      .recommend-button
        padding: 0 .2rem
        border-radius: .2rem
        color: #fff
        background: #ff9300
        margin-top: .16rem
        line-height: .44rem
</style>
