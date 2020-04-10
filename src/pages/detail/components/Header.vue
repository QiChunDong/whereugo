<template>
  <div class="Header">
    <router-link tag="div" to="/" v-show="showAbs" class="header-abs">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      景点详情
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop
      if (top > 60) { // 动态显示不同的返回按钮header
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity // 动态style opacity 透明度
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () { // keepalive下会生成activated生命周期函数 --页面显示时会触发
    window.addEventListener('scroll', this.handleScroll) // 添加事件监听 scroll 此处添加的是全局的监听事件 应该在页面隐藏关闭时进行解绑
  },
  deactivated () { // keepalive下会生成activated生命周期函数 --页面显示时会触发
    window.removeEventListener('scroll', this.handleScroll) // 页面隐藏时对事件进行解绑 删除监听的事件
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variable.styl'
  .header-abs
    position: absolute
    text-align: center
    line-height: .8rem
    top: .2rem
    left: .2rem
    height: .8rem
    width: .8rem
    border-radius: .4rem /* 圆角是宽高的一半 画个圆 */
    background: rgba(0, 0, 0, .8rem) /* 背景色，黑色半透明 */
    .header-back
      color: #fff
      font-size: .4rem
  .header-fixed
    z-index: 2 /* 重叠的层级，越高越靠上层 */
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    background: $bgColor
    text-align: center
    font-size: .32rem
    padding: 0 .1rem
    color: $fff
    .header-fixed-back
      width: .64rem
      top: 0
      left: 0
      position: absolute
      color: #fff
      text-align: center
      font-size: .4rem
</style>
