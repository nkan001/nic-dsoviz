<template>
  <q-page class="flex flex-center">
      <div class="col">
          <h1>Heatmap</h1>
          <p class="note">
            Choose Location <strong class="strong-word">first</strong>
            <br/>
            Changing Location resets other fields
          </p>
          <div class="q-pa-md" style="max-width: 300px">
            <div class="q-gutter-md">
                <q-select dark outlined class="option-box" v-model="selectedLocation" :options="locations" label="Location" />
                <q-select dark outlined class="option-box" v-model="selectedTime" :options="timings" label="Timings" />
            </div>
            </div>
            <br>
            <h1>Time: {{ currentTime }}</h1>
    <!-- Next part -->
            <q-form class="q-gutter-md">
            <br/>
            <div class="days-box bg-grey-2 rounded-borders">
                <q-option-group
                name="accepted_genres"
                v-model="accepted"
                :options="options"
                type="checkbox"
                color="cyan-6"
                inline
                />
            </div>
            </q-form>

            <div class="control_wrapper">
                <ejs-heatmap id="heatmap1" :dataSource='dataSource' :xAxis='xAxis' :yAxis='yAxis' :titleSettings='titleSettings' :legendSettings='legendSettings'></ejs-heatmap>
            </div>
            <!-- Next Heatmap-->
            <h1>Toggle Locations</h1>
            <q-form class="q-gutter-md">
            <br/>
            <div class="days-box bg-grey-2 rounded-borders">
                <q-option-group
                name="row2"
                v-model="locationOptions"
                :options="options2"
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
        </div>
</q-page>

</template>

<script>
import { Tooltip, Legend } from '@syncfusion/ej2-vue-heatmap'
import { create, all } from 'mathjs'

export default {
  data () {
    return {
      selectedLocation: 'Location 1',
      selectedTime: null,
      locations: ['Location 1', 'Location 2', 'Location 3'],
      timings: ['Show all', '7am-11am', '11am-3pm', '3pm-7pm', '7pm-9pm'],
      currentTime: null,
      xAxis: {
        labels: ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm']
      },
      yAxis: {
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
      },
      cellSettings: {
        showLabel: true
      },
      titleSettings: {
        text: 'Heatmap',
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
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
      },
      originalXAxis: {
        labels: ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm']
      },
      originalDataSource: [
        [73, 39, 26, 39, 94, 0, 20],
        [93, 58, 53, 38, 26, 68, 20],
        [99, 28, 22, 4, 66, 90, 20],
        [14, 26, 97, 69, 69, 3, 20],
        [7, 46, 47, 47, 88, 6, 20],
        [41, 55, 73, 23, 3, 79, 20],
        [56, 69, 21, 86, 3, 33, 20],
        [45, 7, 53, 81, 95, 79, 20],
        [60, 77, 74, 68, 88, 51, 20],
        [25, 25, 10, 12, 78, 14, 20],
        [25, 56, 55, 58, 12, 82, 20],
        [74, 33, 88, 23, 86, 59, 20],
        [25, 25, 10, 12, 78, 14, 20],
        [25, 56, 55, 58, 12, 82, 20],
        [74, 33, 88, 23, 86, 59, 20]
      ],
      dataSource: [
        [73, 39, 26, 39, 94, 0, 20],
        [93, 58, 53, 38, 26, 68, 20],
        [99, 28, 22, 4, 66, 90, 20],
        [14, 26, 97, 69, 69, 3, 20],
        [7, 46, 47, 47, 88, 6, 20],
        [41, 55, 73, 23, 3, 79, 20],
        [56, 69, 21, 86, 3, 33, 20],
        [45, 7, 53, 81, 95, 79, 20],
        [60, 77, 74, 68, 88, 51, 20],
        [25, 25, 10, 12, 78, 14, 20],
        [25, 56, 55, 58, 12, 82, 20],
        [74, 33, 88, 23, 86, 59, 20],
        [25, 25, 10, 12, 78, 14, 20],
        [25, 56, 55, 58, 12, 82, 20],
        [74, 33, 88, 23, 86, 59, 20]
      ],
      legendSettings: {
        visible: true,
        position: 'Right',
        showLabel: true,
        height: '150'
      },
      locationOptions: ['Location 1', 'Location 2', 'Location 3'],
      accepted: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
      options: [
        {
          label: 'Mon',
          value: 'Mon'
        },
        {
          label: 'Tues',
          value: 'Tues'
        },
        {
          label: 'Wed',
          value: 'Wed'
        },
        {
          label: 'Thurs',
          value: 'Thurs'
        },
        {
          label: 'Fri',
          value: 'Fri'
        },
        {
          label: 'Sat',
          value: 'Sat'
        },
        {
          label: 'Sun',
          value: 'Sun'
        }
      ],
      options2: [
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
        }
      ]
    }
  },
  provide: {
    heatmap: [Tooltip, Legend]
  },
  methods: {
    getTime () {
      var today = new Date()
      var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
      this.currentTime = time
    },
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
        if (d === 'Mon') {
          indexNo.push(1)
        } else if (d === 'Tues') {
          indexNo.push(2)
        } else if (d === 'Wed') {
          indexNo.push(3)
        } else if (d === 'Thurs') {
          indexNo.push(4)
        } else if (d === 'Fri') {
          indexNo.push(5)
        } else if (d === 'Sat') {
          indexNo.push(6)
        } else if (d === 'Sun') {
          indexNo.push(7)
        }
      })
      indexNo = indexNo.sort()
      let tempDays = []
      indexNo.forEach(d => {
        if (d === 1) {
          tempDays.push('Mon')
        } else if (d === 2) {
          tempDays.push('Tues')
        } else if (d === 3) {
          tempDays.push('Wed')
        } else if (d === 4) {
          tempDays.push('Thurs')
        } else if (d === 5) {
          tempDays.push('Fri')
        } else if (d === 6) {
          tempDays.push('Sat')
        } else if (d === 7) {
          tempDays.push('Sun')
        }
      })
      this.yAxis = {
        labels: tempDays
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
  computed: {
  },
  watch: {
    selectedTime: function (val) {
      // do something when the data changes.
      if (val) {
        this.showData()
      }
    },
    accepted: function (val) {
      if (val) {
        this.showData()
      }
    },
    selectedLocation: function (val) {
      if (val) {
        this.createData()
        this.accepted = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
        this.selectedTime = null
        this.xAxis = this.originalXAxis
        this.yAxis = this.originalYAxis
      }
    }
  },
  created () {
    setInterval(() => {
      this.getTime()
    }, 1000)
  }
}
</script>

<style lang="css">
h1, span, p {
    color: white;
}

.strong-word {
    color: #7fc9c6;
}

.option-box {
    margin-left: 10px;
}

.q-field__control-container {
    margin-left: 20px;
    padding-left: 10px;
}

.q-select__dropdown-icon {
    margin-right: 10px;
}

.q-checkbox {
    margin: 5px;
}

.days-box {
    margin-left: 22px;
}

#heatmap1, #heatmap2 {
    margin-left: 7px;
}

#heatmap2 {
    margin-bottom: 50px;
}
</style>
