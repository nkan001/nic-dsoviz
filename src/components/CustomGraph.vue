<template>
  <div class="col">
      <div class="q-gutter-md">
        <q-select dark outlined v-model="y" :options="list" label="Y Axis" />
        <q-select dark outlined v-model="x" :options="list" label="X Axis" />
      </div>
       <q-btn
          class="refresh-btn"
          color="white"
          text-color="black"
          label="Plot"
          @click="getNo(); getData(); getChart();"
          />
      <LineChart
      :chart-data="chartdata"
      :options="options"
      />
  </div>
</template>

<script>
import LineChart from 'src/components/FBChart'

export default {
  name: 'CustomGraph',
  props: {
    list: Array,
    data: Array
  },
  components: {
    LineChart
  },
  data () {
    return {
      y: null,
      x: null,
      no: 0,
      dataObj: [],
      chartdata: {},
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  methods: {
    getNo () {
      this.no = this.list.length
    },
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
    getChart () {
      console.log(this.getX)
      console.log(this.getY)
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

.q-gutter-md {
    margin: 20px 20px 20px 15px;
}
</style>
