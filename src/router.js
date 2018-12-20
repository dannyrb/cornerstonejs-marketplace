import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/plugins/:category?',
      name: 'plugins',
      component: () => import(/* webpackChunkName: "plugins" */ './views/Plugins.vue'),
      props: true
    },
    {
      path: '/learning-materials',
      name: 'learning-materials',
      component: () => import(/* webpackChunkName: "learning-materials" */ './views/LearningMaterials.vue'),
    },
    {
      path: '/find-experts',
      name: 'find-experts',
      component: () => import(/* webpackChunkName: "find-experts" */ './views/FindExperts.vue'),
    }
  ]
})

// Home
// Start Selling
//  - Legal: Author Terms
// Contact
// Plugins
//  - All
//  - Annotation
//  - Drag
//  - Multi-Touch / Gesture
//  - Scroll
//  - Overlay
//  - Brush
//  - Image Loaders
//  - Misc.
// Learning Materials
// For Hire