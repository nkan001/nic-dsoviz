<script>
// Importing Bar and mixins class from the vue-chartjs wrapper
import { Bar, mixins } from 'vue-chartjs'
// Getting the reactiveProp mixin from the mixins module.
const { reactiveProp } = mixins
export default {
  extends: Bar,
  mixins: [ reactiveProp ],
  props: ['options'],
  mounted () {
    // this.chartData is created in the mixin and contains all the data needed to build the chart.
    this.renderChart(this.chartData, this.options)
  }
}
</script>
