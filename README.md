<<<<<<< HEAD
# nic-dsoviz
=======
# DSOViz Toolkit

[![vue.js](https://img.shields.io/badge/vue.js-2.6.10-blue)](https://github.com/vuejs/vue)
[![quasar](https://img.shields.io/badge/quasar-1.5.4-blue)](https://github.com/quasarframework/quasar)

A fast, modern, reactive visualisation toolkit. The DSOViz Toolkit puts together a comprehensive suite of visualisation and visual analytics components.

## Getting Started

To get started follow the following steps to get a hot-reloading development server up and running. 
There's a [guide](docs/setup_dev_environment.md) to setup the pre-getting-started development environment required if you're lost at this stage
```
Before running 'quasar dev', set up a Live Server for some datasets to be able to load.
eg live server: http://127.0.0.1:5500

### Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
npm run lint
```

### Build the app for production
```bash
quasar build
```

# Chart Components
* [Interactive ScatterplotMenu](https://vizhub.com/curran/98ba4daacc92442f8d9fd7d91bfd712a)  
    * used D3 library
    * axis can be changed using the dropdown menu

![ScatterplotMenu](./readme_images/ScatterplotMenu.JPG)

* GradientLine Chart
    * used [vuechart-js](https://vue-chartjs.org/)
    * data can be randomized when button is clicked

![GradientLine](./readme_images/GradientLine.JPG)

* Facebook Ads Dashboard
    * using data stored in 'src/data/fbdata.csv'
    * requires live server to be started to fetch data
    * components:
        * [quasar list](https://quasar.dev/vue-components/list-and-list-items)
        * [quasar search box](https://quasar.dev/vue-components/input)
        * [quasar table](https://quasar.dev/vue-components/table)
    * table shows a few of the columns from the CSV file
    * scrollable list sorted by alphabetical order
    * when item from list is selected, graph and table values change to display data of selected value
    * Zoom & Pan feature not yet implemented yet, replaced with a "Filter By Range" button to view a range of values

![FB Dashboard](./readme_images/FBDashboard.JPG)

# Geospatial Component
* [Singapore Parks](https://data.gov.sg/dataset/parks)
    * HTML and JS files found in src/pages/geospatial/SGParks folder
    * run files in separate project, setting up nodemon server because SGParks.vue hover functions don't work yet
    * Displays Singapore Parks locations with Tree icons
    * Description of parks is provided in a table upon Hover.

![Singapore Parks](./readme_images/SGParks.JPG)

* [Choropleth of Paraguay](https://github.com/voluntadpear/vue-choropleth)
    * used [vue2leaflet](https://vue2-leaflet.netlify.app/) package
    * displays Departments in Paraguay
    * on hover, shows the percentage of girls present in the particular department

![Choropleth Map of Paraguay](./readme_images/ChoroplethMap.jpeg)

# Graphs component
* [COVID-19 Data Visualisation](https://www.youtube.com/watch?v=cUSfL6MBmlY&t=87s)
    * used Axios package to access [API data from the US](https://covidtracking.com/api/us/daily)

![COVID-19 Graphs](./readme_images/COVID-19.JPG)

* Weather and City Search
    * search box to enter city name
    * used an API to get [temperature data for 5 days](https://openweathermap.org/api)

![Weather Search](./readme_images/Weather.JPG)

