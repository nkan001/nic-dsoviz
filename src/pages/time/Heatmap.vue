<template>
  <q-page class="flex flex-center">
      <div class="col">
          <h1>
            Time: {{ currentTime }}
          </h1>
            <br>
            <Heatmap1/>
            <br/>
            <Heatmap2/>
        </div>
</q-page>

</template>

<script>
import Heatmap1 from 'src/components/Heatmap1'
import Heatmap2 from 'src/components/Heatmap2'

export default {
  components: {
    Heatmap1,
    Heatmap2
  },
  data () {
    return {
      currentTime: null
    }
  },
  methods: {
    getTime () {
      var today = new Date()
      var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
      this.currentTime = time
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

.q-checkbox__label {
  color: black;
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
