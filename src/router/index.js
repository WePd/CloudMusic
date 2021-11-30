import Discover from "../views/discover"
import Friends from '../views/friends'
import Mine from '../views/mine'

const routes = [
  {
    path: '/',
    exact: true,
    component: Discover
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/friends',
    component: Friends
  },
]

export default routes