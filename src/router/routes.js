// Assign URLs to vue components which will be the pages of our app

const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/charts/', redirect: '/charts/radar' },
      { path: '/charts/radar', name: 'Radar', component: () => import('pages/charts/Radar.vue') },
      { path: '/charts/polar', name: 'Polar', component: () => import('pages/charts/Polar.vue') },
      { path: '/charts/gradientline', name: 'GradientLine', component: () => import('pages/charts/GradientLineChart.vue') },
      { path: '/charts/bar', name: 'Bar', component: () => import('pages/charts/Bar.vue') },
      { path: '/charts/d3/d3star', name: 'D3Star', component: () => import('pages/charts/D3/d3Star.vue') },
      { path: '/geospatial/choropleth', name: 'Choropleth', component: () => import('pages/geospatial/ChoroplethMap.vue') },
      { path: '/charts/d3/d3bar', name: 'D3Bar', component: () => import('pages/charts/D3/d3Bar.vue') },
      { path: '/graphs/COVID', name: 'COVID', component: () => import('pages/graphs/COVID.vue') },
      { path: '/charts/d3/inputbubble', name: 'InputBubble', component: () => import('pages/charts/D3/InputBubble.vue') },
      { path: '/charts/d3/d3area', name: 'D3Area', component: () => import('pages/charts/D3/D3Area.vue') },
      { path: '/charts/fbdashboard', name: 'FBDashboard', component: () => import('pages/charts/FBDashboard.vue') },
      { path: '/graphs/weather', name: 'Weather', component: () => import('pages/graphs/Weather.vue') },
      { path: '/geospatial/googlemap', name: 'GoogleMap', component: () => import('pages/geospatial/GoogleMap.vue') },
      { path: '/charts/d3/scatterplot', name: 'Scatterplot', component: () => import('pages/charts/D3/ScatterplotMenu.vue') },
      { path: '/geospatial/interactivechoropleth', name: 'InteractiveChoropleth', component: () => import('pages/geospatial/InteractiveChoropleth.vue') },
      { path: '/geospatial/sgparks', name: 'SGParks', component: () => import('pages/geospatial/SGParks.vue') },
      { path: '/components/fbcategoryrange', name: 'FBCategoryRange', component: () => import('components/FBCategoryRange.vue') },
      { path: '/charts/loadcsv', name: 'LoadCSV', component: () => import('pages/charts/LoadCSV.vue') },
      { path: '/time/heatmap', name: 'Heatmap', component: () => import('pages/time/Heatmap.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
