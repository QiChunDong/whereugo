<template>
  <div class="List">
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children">
        <detail-list class="item-children" :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 递归组件，使用组建自身当作一个组件使用，重复递归
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .border-bottom
    border-bottom: solid .001rem #ccc
  .item-title-icon
    position: relative;
    left: .06rem;
    top: .06rem;
    display: inline-block;
    height: .36rem;
    width: .36rem;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: .1rem;
    background-size: .4rem 3rem;
  .item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
  .item-children
    padding: 0 .2rem
</style>
