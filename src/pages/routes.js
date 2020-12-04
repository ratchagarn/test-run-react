import { generatePath } from 'react-router-dom'

import HomePage from './HomePage'
import UserPage from './UserPage'
import PostPage from './PostPage'

const routes = [
  {
    key: 'home',
    name: 'Home',
    path: '/home',
    component: HomePage,
  },
  {
    key: 'user',
    name: 'User',
    path: '/user',
    component: UserPage,
  },
  {
    key: 'post',
    name: 'Post',
    path: '/post',
    component: PostPage,
  },
]

export default routes

const routesPath = {}

routes.forEach((route) => {
  routesPath[route.key] = (params) => generatePath(route.path, params)
})
