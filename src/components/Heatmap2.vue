<template>
 <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <h1>Heatmap 2</h1>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
          <div class="q-pa-md" style="max-width: 300px">
            <div class="q-gutter-md">
                <q-select dark outlined class="option-box" v-model="selectedDay" :options="days" label="Day" />
                <q-select dark outlined class="option-box" v-model="selectedTime" :options="timings" label="Timings" />
            </div>
            </div>
        <q-form class="q-gutter-md">
            <br/>
            <div class="days-box bg-grey-2 rounded-borders">
                <q-option-group
                name="row2"
                v-model="accepted"
                :options="options"
                type="checkbox"
                color="cyan-6"
                inline
                />
            </div>
            </q-form>

            <div class="control_wrapper">
                <ejs-heatmap id="heatmap2"
                :dataSource='dataSource'
                :xAxis='xAxis'
                :yAxis='yAxis'
                :paletteSettings="paletteSettings"
                :titleSettings='titleSettings'
                :legendSettings='legendSettings'></ejs-heatmap>
        </div>
      </q-card-section>
    </q-card>
</template>

<script>
import { Tooltip, Legend } from '@syncfusion/ej2-vue-heatmap'
import { create, all } from 'mathjs'

export default {
  data () {
    return {
      days: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
      timings: ['Show all', '7am-11am', '11am-3pm', '3pm-7pm', '7pm-9pm'],
      selectedDay: 'Mon',
      selectedTime: null,
      xAxis: {
        labels: ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm']
      },
      yAxis: {
        labels: ['Location 1', 'Location 2', 'Location 3', 'Location 4']
      },
      cellSettings: {
        showLabel: true
      },
      titleSettings: {
        text: 'Monday',
        textStyle: {
          size: '15px',
          fontWeight: '500',
          fontStyle: 'Normal',
          fontFamily: 'Segoe UI'
        }
      },
      paletteSettings: {
        palette: [
          { value: 0, color: '#ebced7' },
          { value: 50, color: '#e39db2' },
          { value: 100, color: '#d96487' }
        ],
        type: 'Gradient'
      },
      originalYAxis: {
        labels: ['Location 1', 'Location 2', 'Location 3', 'Location 4']
      },
      originalXAxis: {
        labels: ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm']
      },
      originalDataSource: [
        [73, 39, 26, 39],
        [93, 58, 53, 38],
        [99, 28, 22, 4],
        [14, 26, 97, 69],
        [7, 46, 47, 47],
        [41, 55, 73, 23],
        [56, 69, 21, 86],
        [45, 7, 53, 81],
        [60, 77, 74, 68],
        [25, 25, 10, 12],
        [25, 56, 55, 58],
        [74, 33, 88, 23],
        [25, 25, 10, 12],
        [25, 56, 55, 58],
        [74, 33, 88, 23]
      ],
      dataSource: [
        [73, 39, 26, 39],
        [93, 58, 53, 38],
        [99, 28, 22, 4],
        [14, 26, 97, 69],
        [7, 46, 47, 47],
        [41, 55, 73, 23],
        [56, 69, 21, 86],
        [45, 7, 53, 81],
        [60, 77, 74, 68],
        [25, 25, 10, 12],
        [25, 56, 55, 58],
        [74, 33, 88, 23],
        [25, 25, 10, 12],
        [25, 56, 55, 58],
        [74, 33, 88, 23]
      ],
      legendSettings: {
        visible: true,
        position: 'Right',
        showLabel: true,
        height: '150'
      },
      accepted: ['Location 1', 'Location 2', 'Location 3', 'Location 4'],
      options: [
        {
          label: 'Location 1',
          value: 'Location 1'
        },
        {
          label: 'Location 2',
          value: 'Location 2'
        },
        {
          label: 'Location 3',
          value: 'Location 3'
        },
        {
          label: 'Location 4',
          value: 'Location 4'
        }
      ]
    }
  },
  methods: {
    countRows (xAxis) {
      return xAxis.labels.length
    },
    showData () {
      this.dataSource = this.originalDataSource

      const config = {}
      const math = create(all, config)
      let transposed = math.transpose(this.dataSource)

      let indexNo = []
      this.accepted.forEach(d => {
        if (d === 'Location 1') {
          indexNo.push(1)
        } else if (d === 'Location 2') {
          indexNo.push(2)
        } else if (d === 'Location 3') {
          indexNo.push(3)
        } else if (d === 'Location 4') {
          indexNo.push(4)
        }
      })
      indexNo = indexNo.sort()
      let tempLocations = []
      indexNo.forEach(d => {
        if (d === 1) {
          tempLocations.push('Location 1')
        } else if (d === 2) {
          tempLocations.push('Location 2')
        } else if (d === 3) {
          tempLocations.push('Location 3')
        } else if (d === 4) {
          tempLocations.push('Location 4')
        }
      })
      this.yAxis = {
        labels: tempLocations
      }
      let temp = []
      for (let i = 0; i < indexNo.length; i++) {
        temp.push(transposed[indexNo[i] - 1])
      }
      this.dataSource = math.transpose(temp)
      this.timeData()
    },
    timeData () {
      this.xAxis = this.originalXAxis
      if (this.selectedTime === '7am-11am') {
        this.xAxis = {
          labels: ['7am', '8am', '9am', '10am', '11am']
        }
        let count = this.countRows(this.xAxis)
        this.dataSource = this.dataSource.slice(0, count)
      } else if (this.selectedTime === '11am-3pm') {
        this.xAxis = {
          labels: ['11am', '12pm', '1pm', '2pm', '3pm']
        }
        let count = this.countRows(this.xAxis)
        this.dataSource = this.dataSource.slice(count, count * 2)
      } else if (this.selectedTime === '3pm-7pm') {
        this.xAxis = {
          labels: ['3pm', '4pm', '5pm', '6pm', '7pm']
        }
        let count = this.countRows(this.xAxis)
        this.dataSource = this.dataSource.slice(count * 2, count * 3)
      } else if (this.selectedTime === '7pm-9pm') {
        this.xAxis = {
          labels: ['7pm', '8pm', '9pm']
        }
        this.dataSource = this.dataSource.slice(12, 15)
      }
    },
    createData () {
      let matrix = []
      for (let i = 0; i < 15; i++) {
        matrix.push([])
        for (let j = 0; j < 7; j++) {
          matrix[i].push(Math.floor((Math.random() * 100) + 1))
        }
      }
      console.log(matrix)
      this.dataSource = matrix
      this.originalDataSource = matrix
    }
  },
  provide: {
    heatmap: [Tooltip, Legend]
  },
  watch: {
    selectedTime: function (val) {
      if (val) {
        this.showData()
      }
    },
    accepted: function (val) {
      if (val) {
        this.showData()
      }
    },
    selectedDay: function (val) {
      if (val) {
        this.createData()
        this.accepted = ['Location 1', 'Location 2', 'Location 3', 'Location 4']
        this.selectedTime = null
        this.xAxis = this.originalXAxis
        this.yAxis = this.originalYAxis

        this.titleSettings = {
          text: this.selectedDay,
          textStyle: {
            size: '15px',
            fontWeight: '500',
            fontStyle: 'Normal',
            fontFamily: 'Segoe UI'
          }
        }
      }
    }
  }

}
</script>

<style>

</style>
