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
      { path: '/d3', name: 'D3', component: () => import('pages/d3testing.vue') }
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
