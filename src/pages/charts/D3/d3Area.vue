<template>
  <q-page>
    <div id="app">
      <h1>Area Chart</h1>
      <p>Wait a while for it to load</p>
      <responsive-area-chart
        @select="onSelect"
        :data="data"
        :ceil="max"
        class="area-chart" />
      <div class="content">
        <h3>Selected Value: {{currentValue}}</h3>
        <div>
          <label>Min Value: </label>
          <input v-model="min" />
        </div>
        <div>
          <label>Max Value: </label>
          <input v-model="max" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import ResponsiveAreaChart from 'components/d3AreaChart'
import generateData from './randomData'

export default {
  name: 'D3Area',
  data () {
    return {
      data: [],
      chartWidth: 0,
      currentValue: null,
      itemCount: 25,
      min: 10,
      max: 100
    }
  },
  mounted () {
    setInterval(() => {
      this.data = generateData(this.itemCount,
        parseInt(this.min, 10),
        parseInt(this.max, 10))
    }, 2000)
  },
  methods: {
    onSelect (value) {
      this.currentValue = value
    }
  },
  components: {
    ResponsiveAreaChart
  }
}
</script>

<style lang="sass">
body
  margin: 0

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  margin-top: 60px
</style>

<style lang="sass" scoped>
h1, h3, p
    color: white

h1, .content
  margin-left: 20px

label
  color: white
  display: inline-block
  width: 150px

.area-chart
  height: 200px

</style>
