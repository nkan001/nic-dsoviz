import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import VueGeolocation from 'vue-browser-geolocation'
import JsonCSV from 'vue-json-csv'

import routes from './routes'

import { HeatMapPlugin } from '@syncfusion/ej2-vue-heatmap'

Vue.use(VueRouter)
Vue.use(VueGeolocation)
Vue.use(HeatMapPlugin)

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDUgKVQ5UznIVze3xg-oIsvCvJEyYempBw'
  }
})

Vue.component('downloadCsv', JsonCSV)
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  return Router
}
