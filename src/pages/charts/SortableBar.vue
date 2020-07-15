<template>
    <div id="testing">

    </div>
</template>

<script>
import * as d3 from 'd3'

export default {
  data () {
    return {
      margin: { top: 20, right: 20, bottom: 50, left: 70 },
      width: 870,
      height: 430,
      data: null
    }
  },
  methods: {

  },
  async mounted () {
    // parse the date / time
    var parseTime = d3.timeParse('%d-%b-%y')

    // set the ranges
    var x = d3.scaleTime().range([0, this.width])
    var y = d3.scaleLinear().range([this.height, 0])

    // define the line
    var valueline = d3.line()
      .x(function (d) { return x(d.date) })
      .y(function (d) { return y(d.close) })

    // append the svg obgect to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3.select('#testing').append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform',
        'translate(' + this.margin.left + ',' + this.margin.top + ')')

    // Get the data
    d3.csv('http://127.0.0.1:5500/src/data/testingdata.csv').then(function (data) {
    // format the data
      data.forEach(function (d) {
        d.date = parseTime(d.date)
        d.close = +d.close
      })

      // Scale the range of the data
      x.domain(d3.extent(data, function (d) { return d.date }))
      y.domain([0, d3.max(data, function (d) { return d.close })])

      // Add the valueline path.
      svg.append('path')
        .data([data])
        .attr('class', 'line')
        .attr('d', valueline)

      // Add the x Axis
      svg.append('g')
        .attr('transform', 'translate(0,' + this.height + ')')
        .attr('class', 'axisbtm')

      // Add the y Axis
      svg.append('g')
        .call(d3.axisLeft(y))
    })
  }
}

</script>

<style scoped>
.line {
  fill: none;
  stroke: steelblue;
  stroke-width: 2px;
}

</style>
