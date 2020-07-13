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
      { path: '/charts/line', name: 'Line', component: () => import('pages/charts/Line.vue') },
      { path: '/charts/bar', name: 'Bar', component: () => import('pages/charts/Bar.vue') },
      { path: '/charts/d3star', name: 'D3Star', component: () => import('pages/charts/d3Star.vue') },
      { path: '/geospatial/choropleth', name: 'Choropleth', component: () => import('pages/geospatial/ChoroplethMap.vue') },
      { path: '/charts/d3bar', name: 'D3Bar', component: () => import('pages/charts/d3Bar.vue') },
      { path: '/graphs/COVID', name: 'COVID', component: () => import('pages/graphs/COVID.vue') },
      { path: '/charts/inputbubble', name: 'InputBubble', component: () => import('pages/charts/InputBubble.vue') },
      { path: '/charts/d3area', name: 'D3Area', component: () => import('pages/charts/D3Area.vue') },
      { path: '/charts/fbdashboard', name: 'FBDashboard', component: () => import('pages/charts/FBDashboard.vue') },
      { path: '/graphs/weather', name: 'Weather', component: () => import('pages/graphs/Weather.vue') },
      { path: '/geospatial/googlemap', name: 'GoogleMap', component: () => import('pages/geospatial/GoogleMap.vue') },
      { path: '/charts/scatterplot', name: 'Scatterplot', component: () => import('pages/charts/ScatterplotMenu.vue') },
      { path: '/geospatial/interactivechoropleth', name: 'InteractiveChoropleth', component: () => import('pages/geospatial/InteractiveChoropleth.vue') },
      { path: '/charts/sortablebar', name: 'SortableBar', component: () => import('pages/charts/SortableBar.vue') }
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
