<template>
  <q-page class="flex flex-center">
      <svg :width=width :height=height></svg>
      <div id="menus">
          Choose the y-axis: <span id="y-menu"></span>
          Choose the x-axis: <span id="x-menu"></span>
      </div>
  </q-page>
</template>

<script>
import { select } from 'd3-selection'
import { csv } from 'd3-fetch'
import { scaleLinear } from 'd3-scale'
import { extent } from 'd3-array'
import { axisLeft, axisBottom } from 'd3-axis'
import 'd3-transition'

export default {
  data () {
    return {
      width: 960,
      height: 600,
      url: 'http://127.0.0.1:5500/src/data/auto-mpg.csv',
      data: null,
      xColumn: null,
      yColumn: null
    }
  },
  computed: {
    svg () {
      const svg = select('svg')
      return svg
    }
  },
  methods: {
    dropdownMenu (selection, props) {
      const { options, onOptionClicked, selectedOption } = props

      let select = selection.selectAll('select').data([null])
      select = select.enter().append('select')
        .merge(select)
        .on('change', function () {
          onOptionClicked(this.value)
        })

      const option = select.selectAll('option').data(options)
      option.enter().append('option').merge(option)
        .attr('value', d => d)
        .property('selected', d => d === selectedOption)
        .text(d => d)
    },
    onXColumnClicked () {
      const clicked = column => {
        this.xColumn = column
        this.render()
      }
      return clicked
    },
    onYColumnClicked () {
      const clicked = column => {
        this.yColumn = column
        this.render()
      }
      return clicked
    },
    async getData () {
      const loadedData = await csv(this.url)
      this.data = loadedData
      this.data.forEach(d => {
        d.mpg = +d.mpg
        d.cylinders = +d.cylinders
        d.displacement = +d.displacement
        d.horsepower = +d.horsepower
        d.weight = +d.weight
        d.acceleration = +d.acceleration
        d.year = +d.year
      })
      this.yColumn = this.data.columns[0]
      this.xColumn = this.data.columns[2]
      this.render()
    },
    scatterPlot (selection, props) {
      const {
        title,
        xValue,
        xAxisLabel,
        yValue,
        yAxisLabel,
        circleRadius,
        margin,
        width,
        height,
        data
      } = props

      const innerWidth = width - margin.left - margin.right
      const innerHeight = height - margin.top - margin.bottom

      // xScale
      const xScale = scaleLinear()
        .domain(extent(data, xValue))
        .range([0, innerWidth])
        .nice() // make the grids end nicely at the last tick on the x Axis

      // create xAxis
      const xAxis = axisBottom(xScale)
        .tickSize(-innerHeight)
        .tickPadding(15)

      // create yScale
      const yScale = scaleLinear()
        .domain(extent(data, yValue))
        .range([innerHeight, 0])
        .nice()

      // create yAxis
      const yAxis = axisLeft(yScale)
        .tickSize(-innerWidth)
        .tickPadding(10)

      // create the graph
      const g = selection.selectAll('.container').data([null])
      const gEnter = g.enter().append('g').attr('class', 'container')
      gEnter.merge(g)
        .attr('transform', `translate(${margin.left}, ${margin.top})`)

      // adding the x Axis to the chart
      const xAxisG = g.select('.x-axis')
      const xAxisGEnter = gEnter
        .append('g')
        .attr('class', 'x-axis')
      xAxisG
        .merge(xAxisGEnter)
        .attr('transform', `translate(0,${innerHeight})`)
        .call(xAxis)
        .selectAll('.domain')
        .remove()

      // adding x Axis label
      xAxisGEnter
        .append('text')
        .attr('class', 'axis-label')
        .attr('fill', 'black')
        .attr('y', 55)
        .merge(xAxisG.select('.axis-label'))
        .attr('x', innerWidth / 2)
        .text(xAxisLabel)

      // adding the y Axis to the chart
      const yAxisG = g.select('.y-axis')
      const yAxisGEnter = gEnter
        .append('g')
        .attr('class', 'y-axis')
      yAxisG
        .merge(yAxisGEnter)
        .call(yAxis)
        .selectAll('.domain')
        .remove()

      // adding y Axis label
      yAxisGEnter
        .append('text')
        .attr('class', 'axis-label')
        .attr('fill', 'black')
        .attr('y', -45)
        .attr('transform', 'rotate(-90)')
        .attr('text-anchor', 'middle')
        .merge(yAxisG.select('.axis-label'))
        .attr('x', -innerHeight / 2)
        .text(yAxisLabel)

      // creating the circles
      const circles = g.merge(gEnter)
        .selectAll('circle').data(data)
      circles.enter().append('circle')
        .attr('cx', innerWidth / 2)
        .attr('cy', innerHeight / 2)
        .attr('r', 0)
        .merge(circles)
        .transition().duration(2000)
        .delay((d, i) => i * 10)
        .attr('cy', d => yScale(yValue(d)))
        .attr('cx', d => xScale(xValue(d)))
        .attr('r', circleRadius)

      gEnter
        .append('text')
        .attr('class', 'title')
        .attr('y', -20)
        .attr('x', innerWidth / 2)
        .attr('text-anchor', 'middle')
        .merge(g.select('.title'))
        .text(title)
    },
    render () {
      select('#x-menu')
        .call(this.dropdownMenu, {
          options: this.data.columns.slice(0, 7),
          onOptionClicked: this.onXColumnClicked(),
          selectedOption: this.xColumn
        })

      select('#y-menu')
        .call(this.dropdownMenu, {
          options: this.data.columns.slice(0, 6),
          onOptionClicked: this.onYColumnClicked(),
          selectedOption: this.yColumn
        })

      const data = this.data
      const width = this.width
      const height = this.height

      this.svg.call(this.scatterPlot, {
        title: `Cars: ${this.yColumn} vs ${this.xColumn}`,
        xValue: d => d[this.xColumn],
        xAxisLabel: this.xColumn,
        yValue: d => d[this.yColumn],
        yAxisLabel: this.yColumn,
        circleRadius: 10,
        margin: { top: 60, right: 30, bottom: 70, left: 80 },
        width,
        height,
        data
      })
    }
  },
  async mounted () {
    await this.getData()
    this.render()
  }
}
</script>

<style lang="sass" scoped>
p
  color: white
#menus
  width: 100%
  font-size: 1.4em
  text-align: center
  color: white
#menus span
  margin-right: 20px
#menus select
  font-size: 1rem
#menus select option
  font-size: 1rem
::v-deep circle
  fill: pink
  opacity: 0.7
::v-deep text
  font-size: 1.4em
::v-deep .title
  font-size: 2.8em
  fill: white
  font-weight: 600
::v-deep .axis-label
    font-size: 2em
    fill: white
::v-deep .tick text
  fill: white
::v-deep .tick line
  stroke: white
</style>
