<template>
  <q-page class="flex flex-center">
    <div>
      <h2>D3 Bar Chart</h2>
      <div class="container-chart text-align-left">
        <div class="chart"></div>
      </div>
    </div>
  </q-page>
</template>
<script>
import * as d3 from 'd3'
export default {
  name: 'D3Bar',
  data () {
    return {}
  },
  mounted () {
    let data = [4, 8, 15, 16, 23, 42]
    d3.select('.chart')
      .selectAll('div')
      .data(data)
      .enter().append('div')
      .style('height', '50px')
      .style('width', function (d) {
        return d * 20 + 'px'
      })
      .text(function (d) {
        return d
      })
  }
}
</script>
<style scoped>
</style>

<style>
h2 {
  color: white;
}

.chart div {
  font: 30px sans-serif;
  background-color: steelblue;
  text-align: right;
  padding: 3px;
  margin: 1px;
  color: white;
}

.container-chart {
  /* width: 50%; */
  margin: auto;
}
</style>
