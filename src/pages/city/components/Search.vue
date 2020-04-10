<template>
  <div>
    <div class="search">
    <input class="search-input" v-model="keyWord" type="text" placeholder="输入城市名或拼音">
  </div>
  <div class="search-content" v-show="keyWord" ref="searchResult">
    <ul>
      <li class="search-item" @click="handleCityClick(item.name)" v-for="item of list" :key="item.id">{{item.name}}</li>
      <li v-show="hasNoData" class="search-item">未匹配到相关结果</li>
    </ul>
  </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyWord: '',
      list: [],
      timer: null,
      ifShowNoData: false
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  props: {
    cities: Object
  },
  watch: {
    keyWord () {
      if (!this.keyWord) {
        this.list = []
      }
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyWord) > -1 ||
              value.name.indexOf(this.keyWord) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.searchResult)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variable.styl'
  .search
    background: $bgColor
    line-height: .72rem
    padding: 0 .1rem
    .search-input
      box-sizing: border-box
      height: .62rem
      line-height: .62rem
      border-radius: .06rem
      width: 100%
      color: #666
      padding: 0 .1rem
      text-align: center
  .search-content
    z-index: 1
    position: absolute
    overflow: hidden
    top: 1.58rem
    right: 0
    left: 0
    bottom: 0
    background: #eee
    .search-item
      padding-left: .2rem
      line-height: .62rem
      background: #fff
      color: #666
      border-bottom: solid .001rem #ccc
</style>
