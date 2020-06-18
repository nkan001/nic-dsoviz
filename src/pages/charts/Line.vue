<template>
  <div>
    <q-page class="flex flex-center">
      <line-chart
      :chart-data="datacollection"
      :options="options"
      :width="500" :height="500">
    </line-chart>
      <reactive :chart-data="datacollection"></reactive>
      <button class="button is-primary" @click="randomiseData()">Randomize</button>
    </q-page>
  </div>

</template>

<script>
import LineChart from '../../components/LineChart'

export default {
  name: 'Line',
  components: { LineChart },

  data () {
    return {
      datacollection: null,
      // Chart.js options that controls the appearance of the chart
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
    randomiseData () {
      this.datacollection = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f0c5c5',
            borderColor: '#f87979',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: 'Data Two',
            backgroundColor: '#cae3e8',
            borderColor: '#98e5f5',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#6640ed',
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
