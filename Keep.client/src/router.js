import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}
function loadComponent(component) {
  return () => import(`./components/${component}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage'),
    children: [
      {
        path: '/keeps',
        name: 'HomeKeepfeed',
        component: loadComponent('Keepfeed')
      },

      {
        path: '/keeps/:keepId',
        name: 'KeepDetails',
        props: true,
        component: loadComponent('KeepDetails')
      }
    ]
  },
  {
    path: '/vault/:id',
    name: 'VaultPage',
    component: loadPage('VaultPage'),
    children: [
      {
        path: '/vault/:id/keeps',
        name: 'VaultKeepfeed',
        component: loadComponent('Keepfeed')
      },

      {
        path: '/vault/:id/keeps/:keepId',
        name: 'VaultKeepDetails',
        props: true,
        component: loadComponent('KeepDetails')
      }
    ]
  },
  {
    path: '/profile/:id',
    name: 'ProfilePage',
    component: loadPage('ProfilePage'),
    children: [
      {
        path: '/profile/:id/keeps',
        name: 'ProfileKeepfeed',
        component: loadComponent('Keepfeed')
      },

      {
        path: '/profile/:id/keeps/:keepId',
        name: 'ProfileKeepDetails',
        props: true,
        component: loadComponent('KeepDetails')
      }
    ]
  },
  // {
  //   path: '/account',
  //   name: 'Account',
  //   component: loadPage('AccountPage'),
  //   beforeEnter: authGuard
  // }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
