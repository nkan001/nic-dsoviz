<template>
    <q-page class="flex flex-center">
        <q-btn
              class="absolute-top-left btn"
              color="white"
              text-color="black"
              label="Go back"
              @click="$router.push('/charts/fbdashboard')"/>
        <div class="col">
            <h1>Categories by Range: </h1>
            <h2> Likes </h2>
            <div class="row">
                <q-input class="boundaries" dark filled label="Lower bound" v-model="lo"/>
                <q-input class="boundaries" dark filled label="Upper bound" v-model="up"/>
            </div>
            <LineChart
            :width="width"
            :height="height"
            :chart-data="splittingLikes"
            :options="options"/>

            <h2> Followers </h2>
            <div class="row">
                <q-input class="boundaries" dark filled label="Lower bound" v-model="lo2"/>
                <q-input class="boundaries" dark filled label="Upper bound" v-model="up2"/>
            </div>
            <LineChart
            :width="width"
            :height="height"
            :chart-data="splittingFollowers"
            :options="options"/>
        </div>
    </q-page>
</template>

<script>
import * as d3 from 'd3'
import LineChart from 'src/components/FBChart'

export default {
  name: 'FBCategoryRange',
  components: {
    LineChart
  },
  data () {
    return {
      pagesURL: 'http://127.0.0.1:5500/src/data/fbdata.csv',
      lo: 0,
      up: 1000,
      lo2: 0,
      up2: 1000,
      data: null,
      distinctCategories: [],
      totalData: [],
      likes: [],
      followers: [],
      width: 200,
      height: 300,
      chartdata: {},
      chartdata2: {},
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  methods: {
    async getData () {
      const pagesData = await d3.csv(this.pagesURL, d3.autoType)
      let categories = []
      this.data = pagesData
      pagesData.forEach(d => {
        categories.push(d.pageCategory)
      })
      this.distinctCategories = [...new Set(categories)]
      this.distinctCategories.sort()
    },
    getLikes () {
      let categoryLikes = []
      for (let j = 0; j < this.distinctCategories.length; j++) {
        categoryLikes.push(0)
      }
      this.data.forEach(d => {
        for (let j = 0; j < this.distinctCategories.length; j++) {
          if (d.pageCategory === this.distinctCategories[j]) {
            categoryLikes[j] += d.likes
          }
        }
      })
      this.likes = categoryLikes
    },
    getFollowers () {
      let categoryFollowers = []
      for (let j = 0; j < this.distinctCategories.length; j++) {
        categoryFollowers.push(0)
      }
      this.data.forEach(d => {
        for (let j = 0; j < this.distinctCategories.length; j++) {
          if (d.pageCategory === this.distinctCategories[j]) {
            categoryFollowers[j] += d.igFollowers
          }
        }
      })
      this.followers = categoryFollowers
    },
    creatingObj () {
      let objs = []
      let one
      for (let i = 0; i < this.distinctCategories.length; i++) {
        one = {
          category: this.distinctCategories[i],
          likes: this.likes[i],
          followers: this.followers[i]
        }
        objs.push(one)
      }
      this.totalData = objs
    },
    likesChartData (c, l, f) {
      this.chartdata = {
        labels: c,
        datasets: [
          {
            label: 'Likes',
            backgroundColor: '#f87979',
            borderColor: '#f87979',
            fill: false,
            data: l
          },
          {
            label: 'Followers',
            backgroundColor: '#adedde',
            borderColor: '#adedde',
            fill: false,
            data: f
          }
        ]
      }
    },
    followersChartData (c, l, f) {
      this.chartdata2 = {
        labels: c,
        datasets: [
          {
            label: 'Likes',
            backgroundColor: '#f87979',
            borderColor: '#f87979',
            fill: false,
            data: l
          },
          {
            label: 'Followers',
            backgroundColor: '#adedde',
            borderColor: '#adedde',
            fill: false,
            data: f
          }
        ]
      }
    }
  },
  computed: {
    splittingLikes () {
      let c = []
      let l = []
      let f = []
      this.totalData.forEach(d => {
        if (d.likes >= this.lo && d.likes <= this.up) {
          c.push(d.category)
          l.push(d.likes)
          f.push(d.followers)
        }
      })
      this.likesChartData(c, l, f)
      return this.chartdata
    },
    splittingFollowers () {
      let c = []
      let l = []
      let f = []
      this.totalData.forEach(d => {
        if (d.followers >= this.lo2 && d.followers <= this.up2) {
          c.push(d.category)
          l.push(d.likes)
          f.push(d.followers)
        }
      })
      this.followersChartData(c, l, f)
      return this.chartdata2
    }
  },
  async mounted () {
    await this.getData()
    this.getLikes()
    this.getFollowers()
    this.creatingObj()
  }

}
</script>

<style scoped>
h1, h2, p {
    color: white;
}

h2 {
    margin-top: 20px;
    margin-bottom: 20px;
}

.boundaries {
    margin-left: 25px;
}

.q-field__control-container {
    margin-left: 30px;
}

</style>
