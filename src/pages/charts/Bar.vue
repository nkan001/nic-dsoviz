<template lang="html">
  <q-page class="flex flex-center">
    <BarChart
      :chart-data="datacollection"
      :options="options"
      :width="500" :height="500"
    />
    <reactive :chart-data="datacollection"></reactive>
    <button class="button is-primary" @click="fillData()">Randomize</button>
  </q-page>
</template>

<script>

import BarChart from '../../components/BarChart'

export default {
  name: 'Bar',
  components: { BarChart },
  data () {
    return {
    // instantiating datacollection with null
      datacollection: null,
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
    this.fillData()
  },
  methods: {
    fillData () {
      this.datacollection = {
        // Data for the y-axis of the chart
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#80e8da',
            // Data for the x-axis of the chart
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt () {
      // JS function to generate numbers to be used for the chart
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}
</script>
