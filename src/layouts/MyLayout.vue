//Layout for the app
<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated class="bg-black">
      <q-toolbar class="q-pa-md">
        <q-btn flat @click="miniState = !miniState" round dense icon="menu" />
        <q-toolbar-title>
          DSOViz
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" :mini="miniState" :width="250" :breakpoint="500" show-if-above>
      <q-list dark>
        <q-item-label header></q-item-label>
        <q-item clickable to="/" :exact="exact">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-expansion-item
          expand-separator
          icon="bubble_chart"
          label="Charts"
          to="/charts/"
          default-opened
        >
          <q-item clickable class="app-menu-item" to="/charts/radar">
            <q-item-section avatar></q-item-section>
            <q-item-section>
              <q-item-label>Radar</q-item-label>
              <q-item-label caption>Comparing variation of multiple datasets</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable class="app-menu-item" to="/charts/polar">
            <q-item-section avatar></q-item-section>
            <q-item-section>
              <q-item-label>Polar Area</q-item-label>
              <q-item-label caption>Symmetrical Pie Charts</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable class="app-menu-item" to="/charts/gradientline">
            <q-item-section avatar></q-item-section>
            <q-item-section>
              <q-item-label>Gradient Line</q-item-label>
              <q-item-label caption>Reactive Line Chart w Gradient</q-item-label>
            </q-item-section>
          </q-item>
          <q-item dense clickable class="app-menu-item" to="/charts/bar">
            <q-item-section avatar></q-item-section>
            <q-item-section>
              <q-item-label>Bar</q-item-label>
              <q-item-label caption>Recative Bar chart</q-item-label>
            </q-item-section>
          </q-item>
          <q-item dense clickable class="app-menu-item" to="/charts/d3/d3star">
            <q-item-section avatar></q-item-section>
            <q-item-section>
              <q-item-label>D3 Star</q-item-label>
              <q-item-label caption>Testing D3</q-item-label>
            </q-item-section>
          </q-item>
          <q-item dense clickable class="app-menu-item" to="/charts/d3/d3bar">
            <q-item-section avatar></q-item-section>
            <q-item-section>
              <q-item-label>D3 Bar</q-item-label>
              <q-item-label caption>Testing D3 Chart</q-item-label>
            </q-item-section>
          </q-item>
          <q-item dense clickable class="app-menu-item" to="/charts/d3/d3area">
            <q-item-section avatar></q-item-section>
            <q-item-section>
              <q-item-label>D3 Area Chart</q-item-label>
              <q-item-label caption>Interactive D3 Area Chart</q-item-label>
            </q-item-section>
          </q-item>
          <q-item dense clickable class="app-menu-item" to="/charts/d3/inputbubble">
            <q-item-section avatar></q-item-section>
            <q-item-section>
              <q-item-label>Bubbles</q-item-label>
              <q-item-label caption>Reactive Bubbles</q-item-label>
            </q-item-section>
          </q-item>
          <q-item dense clickable class="app-menu-item" to="/charts/d3/scatterplot">
            <q-item-section avatar></q-item-section>
            <q-item-section>
              <q-item-label>Scatterplot</q-item-label>
              <q-item-label caption>w Menu selection </q-item-label>
            </q-item-section>
          </q-item>
          <q-item dense clickable class="app-menu-item" to="/charts/fbdashboard">
            <q-item-section avatar></q-item-section>
            <q-item-section>
              <q-item-label>FB Dashboard</q-item-label>
              <q-item-label caption>FB 207 Pages data</q-item-label>
            </q-item-section>
          </q-item>
          <q-item dense clickable class="app-menu-item" to="/charts/loadcsv">
            <q-item-section avatar></q-item-section>
            <q-item-section>
              <q-item-label>Loading CSV file</q-item-label>
              <q-item-label caption>Parsing & Table</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
        <q-expansion-item
          expand-separator
          icon="blur_circular"
          label="Graphs"
        >
          <q-item dense clickable class="app-menu-item" to="/graphs/covid">
            <q-item-section avatar></q-item-section>
            <q-item-section>
              <q-item-label>COVID Graphs</q-item-label>
              <q-item-label caption>Many graphs</q-item-label>
            </q-item-section>
          </q-item>
          <q-item dense clickable class="app-menu-item" to="/graphs/weather">
            <q-item-section avatar></q-item-section>
            <q-item-section>
              <q-item-label>Weather Graphs</q-item-label>
              <q-item-label caption>Over 5 days</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
        <q-expansion-item
          expand-separator
          icon="timeline"
          label="Time"
        >
          <q-item dense clickable class="app-menu-item" to="/time/heatmap">
                <q-item-section avatar></q-item-section>
                <q-item-section>
                  <q-item-label>Heatmap</q-item-label>
                  <q-item-label caption>Location Time Heatmap</q-item-label>
                </q-item-section>
            </q-item>
            <q-item dense clickable class="app-menu-item" to="/time/covidmap">
                <q-item-section avatar></q-item-section>
                <q-item-section>
                  <q-item-label>COVID Choropleth</q-item-label>
                  <q-item-label caption>COVID data with Time</q-item-label>
                </q-item-section>
            </q-item>
        </q-expansion-item>
        <q-expansion-item
          expand-separator
          icon="my_location"
          label="Geospatial"
        >
          <q-item dense clickable class="app-menu-item" to="/geospatial/choropleth">
              <q-item-section avatar></q-item-section>
              <q-item-section>
                <q-item-label>Choropleth Map</q-item-label>
                <q-item-label caption>Map</q-item-label>
              </q-item-section>
            </q-item>
            <q-item dense clickable class="app-menu-item" to="/geospatial/googlemap">
                <q-item-section avatar></q-item-section>
                <q-item-section>
                  <q-item-label>Google Map</q-item-label>
                  <q-item-label caption>With User location</q-item-label>
                </q-item-section>
              </q-item>
            <q-item dense clickable class="app-menu-item" to="/geospatial/interactivechoropleth">
                <q-item-section avatar></q-item-section>
                <q-item-section>
                  <q-item-label>Interactive Choropleth</q-item-label>
                  <q-item-label caption>World map</q-item-label>
                </q-item-section>
              </q-item>
            <q-item dense clickable class="app-menu-item" to="/geospatial/sgparks">
            <q-item-section avatar></q-item-section>
              <q-item-section>
                <q-item-label>Parks in Singapore</q-item-label>
                <q-item-label caption>MapboxGL</q-item-label>
              </q-item-section>
            </q-item>
        </q-expansion-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      //This is where the pages will be loaded
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      exact: true,
      leftDrawerOpen: this.$q.platform.is.desktop,
      miniState: !this.$q.platform.is.desktop
    }
  }
}
</script>

<style lang="sass">
  .q-toolbar
    background-color: $toolbar-color
  .q-drawer__content
    background-color: $drawer-color !important
  .q-drawer
    background-color: $drawer-color
  .q-page-container
    background-color: $body-background !important
  .app-menu-item
    border-radius: 0 10px 10px 0
    margin-right: 12px
</style>
