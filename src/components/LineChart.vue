<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['options', 'chart-data'],
  data () {
    return {
      gradient1: null,
      gradient2: null
    }
  },
  mounted () {
    // setting up gradient when graph first loads
    this.gradient1 = this.$refs.canvas
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 450)
    this.gradient2 = this.$refs.canvas
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 450)

    this.gradient1.addColorStop(0, 'rgba(255, 0,0, 0.5)')
    this.gradient1.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)')
    this.gradient1.addColorStop(1, 'rgba(255, 0, 0, 0)')

    this.gradient2.addColorStop(0, 'rgba(0, 231, 255, 0.9)')
    this.gradient2.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)')
    this.gradient2.addColorStop(1, 'rgba(0, 231, 255, 0)')

    this.chartData.datasets[0].borderColor = 'red'
    this.chartData.datasets[1].borderColor = 'blue'

    this.chartData.datasets[0].backgroundColor = this.gradient1
    this.chartData.datasets[1].backgroundColor = this.gradient2
    console.log('TESTING:' + this.gradient1)

    this.renderChart(this.chartData, this.options)
  }
}
</script>
