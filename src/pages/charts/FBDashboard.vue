<template>
    <div class="col">
      <div class="row">

        <!-- Scrollable list -->
        <FBList
        :distinctNames="distinctNames">
        </FBList>

        <div class="col">
          <h2>{{ clickedName }}</h2>
          <div class="row">
            <q-btn
              class="btn"
              color="white"
              text-color="black"
              label="Reset All"
              @click="defaultChart()"/>
              <br/>
  <!-- Goes to the page of filtering by range -->
            <q-btn
              class="btn"
              color="white"
              text-color="black"
              label="Filter By Range"
              @click="$router.push('/components/fbcategoryrange')"/>
          </div>
            <LineChart
              :chart-data="chartdata"
              :options="options"
            />
        </div>
      </div>
      <br/>
      <FBTable
        :data="pageDetails"
        :toSearch="clickedName"
        :columns="columns">
      </FBTable>
    </div>
</template>

<script>
import * as d3 from 'd3'
import FBTable from 'src/components/FBTable'
import FBList from 'src/components/FBList'
import LineChart from 'src/components/FBChart'
import moment from 'moment'

export default {
  components: {
    FBTable,
    FBList,
    LineChart
  },
  data () {
    return {
      pagesURL: 'http://127.0.0.1:5500/src/data/fbdata.csv',
      showBtn: true,
      pageNames: [],
      pageDetails: [],
      distinctNames: [],
      distinctCategories: [],
      likes: [],
      followers: [],
      clickedName: null,
      chartdata: {},
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          labels: {
            fontColor: 'white'
          }
        },
        title: {
          display: true,
          fontColor: 'white',
          text: 'Custom Chart Title'
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
      },
      columns: [
        {
          name: 'Ad Date',
          align: 'center',
          label: 'Date',
          field: 'date'
        },
        {
          name: 'Page Name',
          label: 'Page Name',
          field: 'name'
        },
        {
          name: 'Alias',
          label: 'Alias',
          field: 'alias'
        },
        {
          name: 'Likes',
          label: 'Likes',
          field: 'likes'
        },
        {
          name: 'Category',
          label: 'Category',
          field: 'category'
        },
        {
          name: 'Insta Username',
          label: 'Username',
          field: 'username'
        },
        {
          name: 'Insta Followers',
          label: 'Followers',
          field: 'followers'
        }
      ]
    }
  },
  methods: {
    parseDate (date) {
      return moment(date, 'YYYYMMDD').format('Do MMM YY')
    },
    // captures the pageName chosen by user
    clickedList (no) {
      this.clickedName = no
      this.showBtn = false
      this.getChartData()
    },
    // Default chart aggregates the different category likes and followers
    defaultChart () {
      this.showBtn = true
      this.clickedName = ''
      let categories = []
      this.pageDetails.forEach(d => {
        if (d.category != null) {
          categories.push(d.category)
        }
      })
      this.distinctCategories = [...new Set(categories)]
      this.distinctCategories.sort()
      let categoryLikes = []
      for (let j = 0; j < this.distinctCategories.length; j++) {
        categoryLikes.push(0)
      }
      this.pageDetails.forEach((d, i) => {
        for (let j = 0; j < this.distinctCategories.length; j++) {
          if (d.category === this.distinctCategories[j]) {
            categoryLikes[j] += d.likes
          }
        }
      })
      let categoryFollowers = []
      for (let j = 0; j < this.distinctCategories.length; j++) {
        categoryFollowers.push(0)
      }
      this.pageDetails.forEach((d, i) => {
        for (let j = 0; j < this.distinctCategories.length; j++) {
          if (d.category === this.distinctCategories[j]) {
            categoryFollowers[j] += d.followers
          }
        }
      })
      this.likes = categoryLikes
      this.followers = categoryFollowers
      this.chartdata = {
        labels: this.distinctCategories,
        datasets: [
          {
            label: 'Likes',
            backgroundColor: '#f87979',
            borderColor: '#f87979',
            fill: false,
            data: categoryLikes
          },
          {
            label: 'Followers',
            backgroundColor: '#adedde',
            borderColor: '#adedde',
            fill: false,
            data: categoryFollowers
          }
        ]
      }
    },
    async getData () {
      const pagesData = await d3.csv(this.pagesURL, d3.autoType)
      await pagesData.forEach(d => {
        const name = d.pageName
        this.pageNames.push(name)
        let pageObject
        if (d.igUsername != null) {
          pageObject = {
            date: this.parseDate(d.adLibraryDate),
            name: d.pageName,
            alias: d.pageAlias,
            likes: d.likes,
            category: d.pageCategory,
            instagram: true,
            username: d.igUsername,
            followers: d.igFollowers }
        } else {
          pageObject = {
            date: this.parseDate(d.adLibraryDate),
            name: d.pageName,
            alias: d.pageAlias,
            likes: d.likes,
            category: d.pageCategory,
            instagram: false,
            username: 'nil',
            followers: 'nil'
          }
        }
        this.pageDetails.push(pageObject)
      })
      this.distinctNames = [...new Set(this.pageNames)]
      this.distinctNames.forEach((d, i) => {
        if (d == null) {
          this.distinctNames.splice(i, 1)
        }
      })
      this.distinctNames.sort()
    },
    // Use data to plot the vuechart
    getChartData () {
      let chartLabel = this.clickedName
      let likes = []
      let date = []
      let followers = []
      this.pageDetails.forEach(d => {
        if (d.name === chartLabel) {
          likes.push(d.likes)
          date.push(d.date)
          followers.push(d.followers)
        }
      })
      this.chartdata = {
        labels: date,
        datasets: [
          {
            label: 'Likes',
            backgroundColor: '#f87979',
            borderColor: '#f87979',
            fill: false,
            data: likes
          },
          {
            label: 'Followers',
            backgroundColor: '#adedde',
            borderColor: '#adedde',
            fill: false,
            data: followers
          }
        ]
      }
    }
  },
  async mounted () {
    await this.getData()
    this.defaultChart()
  }
}
</script>

<style Lang="css">
h1,h2,p {
  color: white;
  text-align: center;
}

.btn {
  margin: 10px;
}

.q-field__control-container {
  margin-left: 10px;
}

</style>
