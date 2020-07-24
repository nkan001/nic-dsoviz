// For charts/LoadCSV.vue

<template>
<q-card dark bordered class="bg-grey-9 my-card">
    <q-card-section>
      <div class="text-h6">Plot Numerical data</div>
      <div class="text-subtitle2">Y must be <strong class="strong-word">numerical</strong></div>
    </q-card-section>

    <q-separator dark inset />

    <q-card-section>
      <div class="col">
      <!-- Choosing inputs for axes -->
        <div class="q-gutter-md">
          <q-select dark outlined
          v-model="y"
          :options="list"
          label="Y Axis" />
          <q-select dark outlined
          v-model="x"
          :options="list"
          label="X Axis" />
        </div>
      <!-- Plotting the graph after axes have been chosen -->
      <div class="row">
        <q-btn
            class="plot-btn"
            color="white"
            text-color="black"
            label="Plot"
            @click="getNo(); getData(); getChart(); toggleBoundaries();"
            />
          <q-btn
            v-show="!seamless"
            class="btn"
            color="white"
            text-color="black"
            label="Filter By Y Range"
            @click="boundaries = true; setBoundaries();"/>
  <!-- When "Filter by Y range" button is clicked, will allow input for lower and upper bound -->
            <div class="set row" v-show="boundaries">
                <q-input class="boundaries" dark filled label="Lower bound"
                v-model="lo"
                v-on:change="setBoundaries()"/>
                <q-input class="boundaries" dark filled label="Upper bound"
                v-model="up"
                v-on:change="setBoundaries()"/>
            </div>
      </div>

        <LineChart
        :chart-data="chartdata"
        :options="options"
        />

        <BarChart
        :chart-data="chartdata"
        :options="options"
        />

        <!-- The pop up  -->
        <div
        v-show="seamless == false"
        class="q-pa-md q-gutter-sm">
          <q-dialog v-model="seamless" seamless position="bottom">
            <q-card style="width: 450px">

              <q-card-section class="row items-center no-wrap">
                <div>
                  <div class=" error text-weight-bold">Error</div>
                  <div class="des text-grey">Y values are not numerical data</div>
                </div>

                <q-space />

                <q-btn flat round icon="close" v-close-popup />
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>
    </div>
    </q-card-section>
  </q-card>
</template>

<script>
import LineChart from 'src/components/FBChart'
import BarChart from 'src/components/BarChart'

export default {
  name: 'CustomGraph',
  props: {
    list: Array,
    data: Array
  },
  components: {
    LineChart,
    BarChart
  },
  data () {
    return {
      y: null,
      x: null,
      no: 0,
      seamless: false,
      boundaries: false,
      lo: 0,
      up: 1000,
      dataObj: [],
      chartdata: {},
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          labels: {
            fontColor: 'white'
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              fontColor: 'white'
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: 'white'
            }
          }]
        }
      }
    }
  },
  methods: {
    getNo () {
      this.no = this.list.length
    },
    // When want to filter by Y range
    toggleBoundaries () {
      this.boundaries = false
    },
    // re-arranging data object from parseCsv (from LoadCSV.vue)
    getData () {
      let dataObj = []
      this.list.forEach(d => {
        let one = {
          [d]: []
        }
        dataObj.push(one)
      })
      let lists = []
      for (let i = 0; i < this.no; i++) {
        lists.push([])
      }
      let columns = []
      for (let i = 0; i < this.no; i++) {
        columns.push(`Column${i + 1}`)
      }
      this.data.forEach(d => {
        for (let j = 0; j < this.no; j++) {
          let col = columns[j]
          lists[j].push(d[`${col}`])
        }
      })
      dataObj.forEach((d, i) => {
        let key = this.list[i]
        d[`${key}`] = lists[i]
      })
      this.dataObj = dataObj
    },
    // if y values are numerical, plot the chart. If not, show error in pop-up
    getChart () {
      if (!isNaN(this.getY[0])) {
        this.seamless = false
        this.chartdata = {
          labels: this.getX,
          datasets: [
            {
              label: this.y,
              backgroundColor: '#f87979',
              borderColor: '#f87979',
              fill: false,
              data: this.getY
            }
          ]
        }
      } else {
        this.seamless = true
      }
    },
    // change graph when lower and upper bounds change with user input
    setBoundaries () {
      let yData = this.getY
      let filteredY = []
      let indices = []
      yData.forEach((d, i) => {
        d = parseInt(d)
        if (d >= this.lo && d <= this.up) {
          filteredY.push(d)
          indices.push(i)
        }
      })
      let xData = this.getX
      let filteredX = []
      xData.forEach((d, i) => {
        if (indices.includes(i)) {
          filteredX.push(d)
        }
      })
      this.chartdata = {
        labels: filteredX,
        datasets: [
          {
            label: this.y,
            backgroundColor: '#f87979',
            borderColor: '#f87979',
            fill: false,
            data: filteredY
          }
        ]
      }
    }
  },
  computed: {
    getY () {
      let index = this.list.indexOf(this.y)
      let name = this.y
      return this.dataObj[index][`${name}`]
    },
    getX () {
      let index = this.list.indexOf(this.x)
      let name = this.x
      return this.dataObj[index][`${name}`]
    }
  }
}
</script>

<style scoped>
h1, p {
    color: white
}

.strong-word {
  color: teal;
}

.q-gutter-md {
    margin: 20px 20px 20px 15px;
}

.error, .des {
  margin-left: 20px;
}

.btn {
  margin-left: 20px;
}

.plot-btn {
  margin-left: 0px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left:40px;
}

.set {
  margin-left: 20px;
}

.boundaries {
    margin-left: 25px;
}
</style>
