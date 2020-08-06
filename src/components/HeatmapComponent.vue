// unused
// Not sure why it allows first time use of the component to load, but on second use, doesn't load the heatmap.

<template>
 <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <h1>Heatmap</h1>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
          <div class="q-pa-md" style="max-width: 300px">
            <div class="q-gutter-md">
                <q-select dark outlined class="option-box" v-model="selectedHeader" :options="inputList" :label="label" />
                <q-select dark outlined class="option-box" v-model="selectedTime" :options="timings" label="Timings" />
            </div>
            </div>
        <q-form class="q-gutter-md">
            <br/>
            <div class="days-box bg-grey-2 rounded-borders">
                <q-option-group
                name="row2"
                v-model="checkboxes"
                :options="options"
                type="checkbox"
                color="cyan-6"
                inline
                />
            </div>
            </q-form>

            <div class="control_wrapper">
                <ejs-heatmap class="heatmap"
                :dataSource='data'
                :xAxis='xAxis'
                :yAxis='y'
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
  props: ['yAxis', 'dataSource', 'options', 'accepted', 'inputList', 'label'],
  data () {
    return {
      timings: ['Show all', '7am-11am', '11am-3pm', '3pm-7pm', '7pm-9pm'],
      data: null,
      oriData: null,
      y: null,
      oriYAxis: null,
      selectedTime: null,
      selectedHeader: null,
      rows: 0,
      cols: 0,
      xAxis: {
        labels: ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm']
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
      originalXAxis: {
        labels: ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm']
      },
      legendSettings: {
        visible: true,
        position: 'Right',
        showLabel: true,
        height: '150'
      },
      checkboxes: []
    }
  },
  methods: {
    countRows (xAxis) {
      return xAxis.labels.length
    },
    showData () {
      this.data = this.oriData

      const config = {}
      const math = create(all, config)
      let transposed = math.transpose(this.data)

      let indexNo = []
      this.checkboxes.forEach(d => {
        for (let i = 0; i < this.accepted.length; i++) {
          if (d === this.accepted[i]) {
            indexNo.push(i + 1)
          }
        }
      })
      indexNo = indexNo.sort()
      console.log(this.accepted)
      let temps = []
      indexNo.forEach(d => {
        for (let j = 0; j < this.accepted.length; j++) {
          if (d === (j + 1)) {
            temps.push(this.accepted[j])
          }
        }
      })
      this.y = {
        labels: temps
      }
      let temp = []
      for (let i = 0; i < indexNo.length; i++) {
        temp.push(transposed[indexNo[i] - 1])
      }
      this.data = math.transpose(temp)
      this.timeData()
    },
    timeData () {
      this.xAxis = this.originalXAxis
      if (this.selectedTime === '7am-11am') {
        this.xAxis = {
          labels: ['7am', '8am', '9am', '10am', '11am']
        }
        let count = this.countRows(this.xAxis)
        this.data = this.data.slice(0, count)
      } else if (this.selectedTime === '11am-3pm') {
        this.xAxis = {
          labels: ['11am', '12pm', '1pm', '2pm', '3pm']
        }
        let count = this.countRows(this.xAxis)
        this.data = this.data.slice(count, count * 2)
      } else if (this.selectedTime === '3pm-7pm') {
        this.xAxis = {
          labels: ['3pm', '4pm', '5pm', '6pm', '7pm']
        }
        let count = this.countRows(this.xAxis)
        this.data = this.data.slice(count * 2, count * 3)
      } else if (this.selectedTime === '7pm-9pm') {
        this.xAxis = {
          labels: ['7pm', '8pm', '9pm']
        }
        this.data = this.data.slice(12, 15)
      }
    },
    createData () {
      let matrix = []
      for (let i = 0; i < this.rows; i++) {
        matrix.push([])
        for (let j = 0; j < this.cols; j++) {
          matrix[i].push(Math.floor((Math.random() * 100) + 1))
        }
      }
      this.data = matrix
      this.oriData = matrix
    }
  },
  provide: {
    heatmap: [Tooltip, Legend]
  },
  mounted () {
    this.data = this.dataSource
    this.oriData = this.dataSource
    this.y = this.yAxis
    this.oriYAxis = this.yAxis

    this.checkboxes = this.accepted
    this.rows = this.dataSource.length
    this.cols = this.dataSource[0].length
  },
  watch: {
    selectedTime: function (val) {
      if (val) {
        this.showData()
      }
    },
    checkboxes: function (val) {
      if (val) {
        this.showData()
      }
    },
    selectedHeader: function (val) {
      if (val) {
        this.createData()
        this.checkboxes = this.accepted
        this.selectedTime = null
        this.xAxis = this.originalXAxis
        this.y = this.yAxis

        this.titleSettings = {
          text: this.selectedHeader,
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
