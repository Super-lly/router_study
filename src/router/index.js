import { createRouter, createWebHistory } from 'vue-router'
import { getData } from '../utils/https'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  addData()
  next()
})

function addData() {
  if (store && store.state.nav.length == 0) {
    getData().then(res => {
      let result = res.data
      if (res.status == 200) {
        store.dispatch('setNav', result)
        let data = routesData(result)
        console.log(data);
        data.forEach(v=>{
          router.addRoute(v)
        })
      }
    })
  }

}
function routesData(result) {
  result.forEach(item => {
    routes.push({
      path: item.url,
      name: item.name,
      meta:{title:item.title},
      component: () => import('../views' + item.component)
    })
  });
  return routes
}

export default router
