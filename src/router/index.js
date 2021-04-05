import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes'
import NProgress from 'nprogress'

Vue.use(Router);

const router = new Router({
  routes,
  mode: 'history'
});

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router
