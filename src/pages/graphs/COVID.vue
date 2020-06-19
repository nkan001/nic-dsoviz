<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col text-center">
        <h1>COVID-19 Visualisation</h1>
      </div>
    </div>

    <div class="mt-5" v-if="arrPositive.length > 0">
      <div class="col">
        <h2>Positive</h2>
        <COVIDChart
          :chartData="arrPositive"
          :options="chartOptions"
          :chartColors="positiveChartColors"
          label="Positive"
        ></COVIDChart>
      </div>

      <div class="mt-5" v-if="arrHospitalized.length > 0">
        <div class="col">
          <h2>Hospitalized</h2>
          <COVIDChart
            :chartData="arrHospitalized"
            :options="chartOptions"
            :chartColors="hospitalizedColor"
            label="Hospitalized"
          ></COVIDChart>
        </div>
      </div>

      <div class="mt-5" v-if="arrInIcu.length > 0">
        <div class="col">
          <h2>In ICU</h2>
          <COVIDChart
            :chartData="arrInIcu"
            :options="chartOptions"
            :chartColors="inIcuColor"
            label="InIcu"
          ></COVIDChart>
        </div>
      </div>
      <div class="mt-5" v-if="arrOnVentilators.length > 0">
        <div class="col">
          <h2>OnVentilators</h2>
          <COVIDChart
            :chartData="arrOnVentilators"
            :options="chartOptions"
            :chartColors="onVentilatorsColors"
            label="OnVentilators"
          ></COVIDChart>
        </div>
      </div>
      <div class="mt-5" v-if="arrRecovered.length > 0">
        <div class="col">
          <h2>Recovered</h2>
          <COVIDChart
            :chartData="arrRecovered"
            :options="chartOptions"
            :chartColors="recoveredColors"
            label="Recovered"
          ></COVIDChart>
        </div>
      </div>
      <div class="mt-5" v-if="arrDeaths.length > 0">
        <div class="col">
          <h2>Deaths</h2>
          <COVIDChart
            :chartData="arrDeaths"
            :options="chartOptions"
            :chartColors="deathsColor"
            label="Deaths"
          ></COVIDChart>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

import COVIDChart from 'components/COVIDChart.vue'

export default {
  name: 'COVID',
  components: {
    COVIDChart
  },
  data () {
    return {
      arrPositive: [],
      positiveChartColors: {
        borderColor: '#077187',
        pointBorderColor: '#0E1428',
        pointBackgroundColor: '#AFD6AC',
        backgroundColor: '#74A57F'
      },
      arrHospitalized: [],
      hospitalizedColor: {
        borderColor: '#CD5C5C',
        pointBorderColor: 'black',
        pointBackgroundColor: '#FA8072',
        backgroundColor: '#E9967A'
      },
      arrInIcu: [],
      inIcuColor: {
        borderColor: '#8cbbe0',
        pointBorderColor: 'black',
        pointBackgroundColor: '#ddf5ff',
        backgroundColor: '#bbe6e6'
      },
      arrOnVentilators: [],
      onVentilatorsColors: {
        borderColor: '#077187',
        pointBorderColor: '#0E1428',
        pointBackgroundColor: '#AFD6AC',
        backgroundColor: '#74A57F'
      },
      arrRecovered: [],
      recoveredColors: {
        borderColor: '#CD5C5C',
        pointBorderColor: 'black',
        pointBackgroundColor: '#FA8072',
        backgroundColor: '#E9967A'
      },
      arrDeaths: [],
      deathsColor: {
        borderColor: '#8cbbe0',
        pointBorderColor: 'black',
        pointBackgroundColor: '#ddf5ff',
        backgroundColor: '#bbe6e6'
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  async created () {
    const { data } = await axios.get('https://covidtracking.com/api/us/daily')
    console.log('Done awaiting')
    data.forEach(d => {
      const date = moment(d.date, 'YYYYMMDD').format('MM/DD')

      const {
        positive,
        hospitalizedCurrently,
        inIcuCurrently,
        onVentilatorCurrently,
        recovered,
        death
      } = d

      this.arrPositive.push({ date, total: positive })
      this.arrHospitalized.push({ date, total: hospitalizedCurrently })
      this.arrInIcu.push({ date, total: inIcuCurrently })
      this.arrOnVentilators.push({ date, total: onVentilatorCurrently })
      this.arrRecovered.push({ date, total: recovered })
      this.arrDeaths.push({ date, total: death })
    })
  }
}
</script>

<style>
  h1, h2 {
    color: white;
  }
</style>
