<template>

<q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
         <h1>Frequency Plot</h1>
        <p><strong class="strong-word">Labels</strong>: unique category to count</p>
        <p><strong class="strong-word">Frequency</strong>: aggregated labels</p>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        <div class="col">
        <!-- Choosing inputs for axes -->
        <div class="q-gutter-md">
            <q-select dark outlined
            v-model="y"
            :options="list"
            label="Frequency" />
            <q-select dark outlined
            v-model="x"
            :options="list"
            label="Labels" />
        </div>
        <div class="row">
            <!-- Plotting the graph after axes have been chosen -->
            <q-btn
                class="plot-btn"
                color="white"
                text-color="black"
                label="Plot"
                @click="getNo(); getData(); setUnique(); getFrequency(); miniTableData(); boundaries = false"
                />
            <q-btn
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
        <div class="row">
          <div class="d1">
            <BarChart
            :chart-data="chartdata"
            :options="options"
            />
          </div>
          <div class="d2">
            <q-table
            v-show="boundaries == false"
            class="table"
            :data="miniTable"
            :columns="columns"
            row-key="id"
            :filter="filter"
            :loading="loading"
            :sort-method="customSort"
            binary-state-sort
            >

            <template v-slot:top>
              <q-space />
              <q-input outlined dense debounce="300" color="grey-9" v-model="filter">
              </q-input>
            </template>
            </q-table>
          </div>
        </div>

        </div>
      </q-card-section>
    </q-card>
</template>

<script>
import BarChart from 'src/components/BarChart'

export default {
  name: 'FrequencyChart',
  props: {
    list: Array,
    data: Array
  },
  components: {
    BarChart
  },
  data () {
    return {
      y: null,
      x: null,
      no: 0,
      labelIndex: 0,
      yIndex: 0,
      frequency: [],
      dataObj: [],
      uniqueLabels: [],
      chartObj: [],
      chartdata: {},
      boundaries: false,
      lo: 0,
      up: 10,
      loading: false,
      sortable: true,
      filter: '',
      columns: [
        {
          name: 'Label',
          align: 'center',
          label: 'Label',
          field: 'Label',
          sortable: true
        },
        {
          name: 'Count',
          label: 'Count',
          field: 'Count',
          sortable: true
        }
      ],
      miniTable: [],
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
    // Making data into desireable data object instead of taking parseCsv onject from props
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
    // Getting unique lablels from user chosen input
    setUnique () {
      this.labelIndex = this.getLabelIndex
      this.yIndex = this.getYIndex
      this.uniqueLabels = this.getUniqueLabels
      let lists = []
      for (let i = 0; i < this.uniqueLabels.length; i++) {
        let one = {
          [this.uniqueLabels[i]]: []
        }
        lists.push(one)
      }
      this.chartObj = lists
    },
    // count the frequency of each type of unique label
    getFrequency () {
      for (let i = 0; i < this.uniqueLabels.length; i++) {
        let tempList = []
        this.data.forEach(d => {
          if (d[`Column${this.labelIndex + 1}`] === this.uniqueLabels[i]) {
            tempList.push(d[`Column${this.yIndex + 1}`])
          }
        })
        this.chartObj[i][this.uniqueLabels[i]] = tempList
        this.getChartdata()
      }
    },
    // plotting the chart
    getChartdata () {
      let freq = []
      for (let i = 0; i < this.uniqueLabels.length; i++) {
        let value = this.chartObj[i][this.uniqueLabels[i]].length
        freq.push(value)
      }
      this.frequency = freq
      this.chartdata = {
        labels: this.uniqueLabels,
        datasets: [
          {
            label: this.x,
            backgroundColor: '#f87979',
            borderColor: '#f87979',
            fill: false,
            data: this.frequency
          }
        ]
      }
    },
    // when "Filter by Y range" button is clicked
    setBoundaries () {
      let filteredY = []
      let filteredX = []
      for (let i = 0; i < this.uniqueLabels.length; i++) {
        if (this.frequency[i] >= this.lo && this.frequency[i] <= this.up) {
          filteredY.push(this.frequency[i])
          filteredX.push(this.uniqueLabels[i])
        }
      }
      this.chartdata = {
        labels: filteredX,
        datasets: [
          {
            label: this.x,
            backgroundColor: '#f87979',
            borderColor: '#f87979',
            fill: false,
            data: filteredY
          }
        ]
      }
    },
    miniTableData () {
      let dataCount = []
      this.uniqueLabels.forEach((d, i) => {
        let one = {
          'Label': d,
          'Count': this.chartObj[i][d].length
        }
        dataCount.push(one)
      })
      this.miniTable = dataCount
      console.log(this.uniqueLabels)
    },
    // For the quasar table (miniTable) allows for sorting of column data
    customSort (rows, sortBy, descending) {
      const data = [ ...rows ]

      if (sortBy) {
        data.sort((a, b) => {
          const x = descending ? b : a
          const y = descending ? a : b

          if (sortBy === 'name') {
            // string sort
            return x[sortBy] > y[sortBy] ? 1 : x[sortBy] < y[sortBy] ? -1 : 0
          } else {
            // numeric sort
            return parseFloat(x[sortBy]) - parseFloat(y[sortBy])
          }
        })
      }

      return data
    }
  },
  computed: {
    // Index of the chosen label
    getLabelIndex () {
      return this.list.indexOf(this.x)
    },
    // Index of the chosen frequency label
    getYIndex () {
      return this.list.indexOf(this.y)
    },
    getUniqueLabels () {
      let index = this.list.indexOf(this.x)
      let name = this.x
      let labelList = this.dataObj[index][`${name}`]
      let unique = [...new Set(labelList)]
      return unique.filter(item => item)
    }
  }

}
</script>

<style scoped>
h1, p {
    color: white;
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
  margin-right: 30px;
}

.plot-btn {
  margin-left: 0px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left:40px;
}

.boundaries {
    margin-left: 25px;
}

.table {
  margin-left: 5px;
  margin-bottom: 10px;
  padding: 20px;
  width: 400px;
}

.d1 {
  width: 70%;
}
.d2 {
  width: 30%;
}
</style>
