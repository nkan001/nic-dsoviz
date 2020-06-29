<template lang="html">
  <q-page class="flex flex-center">
      <div class="container">
        <div class="my-5">
          <form v-on:submit.prevent="getData">
            <div class="row">
              <div class="col-md-6 offset-md-3">
                <h5 style="color: white">Enter A City:</h5>
                <div class="input-group">
                  <input type="text" class="form-control" v-model="city">
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="submit">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="my-5">
          <div class="alert alert-info" v-show="loading">
            Loading...
          </div>
          <div class="alert alert-danger" v-if="errored">
            <strong>Oh no!</strong> No such City, try submitting again.
          </div>
          <div v-show="chart != null">
            <canvas id="myChart"></canvas>
          </div>
        </div>
      </div>
  </q-page>

</template>

<script>
import axios from 'axios'
import Chart from 'chart.js'

export default {
  extends: 'Line',
  name: 'Weather',
  data: function () {
    return {
      chart: null,
      city: '',
      dates: [],
      temps: [],
      loading: false,
      errored: false,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  methods: {
    getData: function () {
      this.loading = true

      if (this.chart != null) {
        this.chart.destroy()
      }

      axios
        .get('https://api.openweathermap.org/data/2.5/forecast', {
          params: {
            q: this.city,
            units: 'imperial',
            appid: 'fd3150a661c1ddc90d3aefdec0400de4'
          }
        })
        .then(response => {
          this.errored = false
          this.dates = response.data.list.map(list => {
            return list.dt_txt
          })
          console.log(this.dates)

          this.temps = response.data.list.map(list => {
            return (list.main.temp - 32) * (5 / 9)
          })
          // this.temps = (this.temps - 32) * (5 / 9)
          console.log(this.temps)

          var ctx = document.getElementById('myChart')
          this.chart = new Chart(ctx, {
            type: 'line',
            data: {
              labels: this.dates,
              datasets: [
                {
                  label: 'Avg. Temp',
                  backgroundColor: 'rgba(54, 162, 235, 0.5)',
                  borderColor: 'rgb(54, 162, 235)',
                  fill: false,
                  data: this.temps
                }
              ]
            },
            options: {
              title: {
                display: true,
                text: 'Temperature with Chart.js'
              },
              tooltips: {
                callbacks: {
                  label: function (tooltipItem, data) {
                    var label =
                      data.datasets[tooltipItem.datasetIndex].label || ''

                    if (label) {
                      label += ': '
                    }

                    label += Math.floor(tooltipItem.yLabel)
                    return label + '°C'
                  }
                }
              },
              scales: {
                xAxes: [
                  {
                    type: 'time',
                    time: {
                      unit: 'hour',
                      displayFormats: {
                        hour: 'M/DD @ hA'
                      },
                      tooltipFormat: 'MMM. DD @ hA'
                    },
                    scaleLabel: {
                      display: true,
                      labelString: 'Date/Time'
                    }
                  }
                ],
                yAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      labelString: 'Temperature (°F)'
                    },
                    ticks: {
                      callback: function (value, index, values) {
                        return value + '°F'
                      }
                    }
                  }
                ]
              }
            }
          })
        })
        .catch(error => {
          console.log(error)
          this.errored = true
          console.log('No such country')
        })
        .finally(() => (this.loading = false))
    }
  }
}

</script>

<style lang="css" scoped>
</style>
