<template>
  <div>
    <q-page class="flex flex-center">
      <line-chart
      ref="lineChart"
      :chart-data="datacollection"
      :options="options"
      :width="500" :height="500">
    </line-chart>
      <reactive :chart-data="datacollection"></reactive>
      <button class="button is-primary" @click="randomiseData(setGradient1(), setGradient2())">Randomize</button>
    </q-page>
  </div>

</template>

<script>
import LineChart from '../../components/LineChart'

export default {
  name: 'GradientLine',
  components: { LineChart },

  data () {
    return {
      datacollection: null,
      gradient1: null,
      gradient2: null,
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [ {
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  created () {
    // anytime the vue instance is created, call the fillData() function.
    this.randomiseData()
  },
  methods: {
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    },
    setGradient1 () {
      this.gradient1 = this.$refs.lineChart.$refs.canvas
        .getContext('2d')
        .createLinearGradient(0, 0, 0, 450)
      this.gradient1.addColorStop(0, 'rgba(255, 0,0, 0.5)')
      this.gradient1.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)')
      this.gradient1.addColorStop(1, 'rgba(255, 0, 0, 0)')

      return this.gradient1
    },
    setGradient2 () {
      this.gradient2 = this.$refs.lineChart.$refs.canvas
        .getContext('2d')
        .createLinearGradient(0, 0, 0, 450)

      this.gradient2.addColorStop(0, 'rgba(0, 231, 255, 0.9)')
      this.gradient2.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)')
      this.gradient2.addColorStop(1, 'rgba(0, 231, 255, 0)')

      return this.gradient2
    },
    randomiseData (g1, g2) {
      this.datacollection = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: g1,
            borderColor: 'red',
            borderWidth: 1,
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: 'Data Two',
            backgroundColor: g2,
            borderColor: 'blue',
            borderWidth: 1,
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    }
  }
}
</script>

<style>
h1 {
  color: white;
}
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>
