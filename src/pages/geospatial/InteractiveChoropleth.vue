<template>
  <q-page class="flex flex-center">
    <div id="container">
      <p class="title">{{ title }}</p>
      <svg class="map" :width="width" :height="height">
      </svg>
    </div>
  </q-page>
</template>

<script>
import { select } from 'd3-selection'
import { json, tsv } from 'd3-fetch'
import { feature } from 'topojson-client'
import { schemeSpectral } from 'd3-scale-chromatic'
import { scaleOrdinal } from 'd3-scale'
import { colorLegend } from 'src/components/ColorLegendFilter.js'
import { chloroplethMap } from 'src/components/chloroplethMap.js'

export default {
  data () {
    return {
      width: 960,
      height: 500,
      labelHeight: 150,
      dataURL: 'https://unpkg.com/world-atlas@1.1.4/world/50m.tsv',
      topoURL: 'https://unpkg.com/world-atlas@1.1.4/world/50m.json',
      g: null,
      selectedColorValue: null,
      features: null,
      title: 'Chloropleth Map with Interactive Filtering'
    }
  },
  computed: {
    svg () {
      const svg = select('svg')
      return svg
    },
    chloroplethMapG () {
      const chloroplethMapG = this.svg.append('g')
      return chloroplethMapG
    },
    colorLegendG () {
      const colorLegendG = this.svg.append('g')
        .attr('class', 'legend')
        .attr('transform', `translate(15, 280)`)
      return colorLegendG
    },
    colorScale () {
      const colorScale = scaleOrdinal()
      return colorScale
    }
  },
  methods: {
    onClick (d) {
      this.selectedColorValue = d
      this.render()
    },
    colorValue (d) {
      // can toggle between income_grp and economy
      return d.properties.economy
    },
    async loadAndProcessData () {
      const tsvR = await tsv(this.dataURL)
      const topoR = await json(this.topoURL)

      const rowById = tsvR.reduce((accumulator, d) => {
        accumulator[d.iso_n3] = d
        return accumulator
      }, {})

      const countries = feature(topoR, topoR.objects.countries)

      countries.features.forEach(d => {
        Object.assign(d.properties, rowById[d.id])
      })

      return countries.features
    },
    render () {
      // setting the domain for the colorScale
      // then sorting the array
      this.colorScale
        .domain(this.features.map(this.colorValue))
        .domain(this.colorScale.domain().sort().reverse())
        .range(schemeSpectral[this.colorScale.domain().length])

      const colorScale = this.colorScale
      const colorValue = this.colorValue
      const onClick = this.onClick
      const selectedColorValue = this.selectedColorValue
      const features = this.features

      // adding the chloropleth map component
      this.chloroplethMapG.call(chloroplethMap, {
        features,
        colorScale,
        colorValue,
        selectedColorValue
      })

      // adding a legend
      this.colorLegendG.call(colorLegend, {
        colorScale,
        circleRadius: 8,
        spacing: 25,
        textOffset: 20,
        backgroundRectWidth: 255,
        onClick,
        selectedColorValue
      })
    }
  },
  async mounted () {
    this.features = await this.loadAndProcessData()
    this.render()
  }
}
</script>

<style scoped lang="sass">
.title
  fill: white
  font-size: 50px
  font-weight: 600
  color: white
  text-align: center
::v-deep .country
  stroke: white
  stroke-width: 0.2px
::v-deep .country.highlighted
  stroke: black
  stroke-width: 1px
::v-deep .country:hover
  fill: white
::v-deep .sphere
  fill: #a8a8a8
  // fill: #EEE2DC
::v-deep .legend text
  font-size: 1rem
  fill: black
::v-deep .legend circle
  stroke: black
  stroke-opacity: 0.5
::v-deep .legend rect
  fill: white
  rx: 5
::v-deep .legend
  cursor: pointer
button
  background-color: white
  border-radius: 8px
  border-width: 0px
  font-size: 1.3em
  color: white
  padding-top: 5px
  margin-left: 5px
  margin-right: 5px
</style>
