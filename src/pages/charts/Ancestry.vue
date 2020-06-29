<!-- <template lang="html">
  <q-page class="flex flex-center">
    <canvas id="theChart" width="300" height="300"></canvas>
    <h1>why</h1>
  </q-page>
</template>

<script>
import Chart from 'chart.js'
import fbData from './fbdata.csv'

export default {
  data () {
    return {
      fbData,
      x: null,
      y: null,
      newType: 'line',
      chart: {}
    }
  },
  methods: {
    getData () {
      const xlabels = []
      const ylabels = []

      const response = fetch('fbdata.csv')
      const data = response.text()
      console.log(data)

      const table = data.split('\n').slice(1)
      table.forEach(row => {
        const columns = row.split(',')
        const name = columns[0]
        xlabels.push(name)
        const amt = columns[1]
        ylabels.push(parseFloat(amt))
      })
      console.log(ylabels)
      this.x = xlabels
      this.y = ylabels
      return {
        xlabels,
        ylabels
      }
    },
    createChart () {
      var ctx = document.getElementById('theChart')
      this.chart = new Chart(ctx, {
        type: this.newType,
        data: {
          labels: this.x,
          datasets: [
            {
              label: 'FB data',
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
              borderColor: 'rgb(54, 162, 235)',
              fill: false,
              data: this.y
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'FB data with Chart.js'
          }
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
h1 {
  color: white;
}
</style> -->
