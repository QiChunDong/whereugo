<template>
  <div id="app">
    <!-- 当加入属性exclude，表示这个组件不再进行缓存，每次进入这个组件都会重新加载资源 -->
    <keep-alive exclude="Detal">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>e
