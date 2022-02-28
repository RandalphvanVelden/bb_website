import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Teams from '../views/teams/TheTeams.vue'
import Team from '../views/teams/TheTeam.vue'
import CreateTeam from '../views/teams/CreateTeam.vue'
import UpdateTeam from '../views/teams/UpdateTeam.vue'
import TheUsers from '../views/users/TheUsers.vue'
import CreateUser from '../views/users/CreateUser.vue'
import TheLogin from '../views/users/TheLogin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/teams',
    name: 'Teams',
    component: Teams
  },
  {
    path: '/teams/:teamId',
    name: 'Team',
    component: Team,
    props: true,
  },
  {
    path: '/create_team',
    name: 'CreateTeam',
    component: CreateTeam
  },
  {
    path: '/update/:teamId',
    name: 'updateTeam',
    component: UpdateTeam,
    props: true,
  },
  {
    path:'/users',
    name: 'users',
    component: TheUsers
  },
  {
    path: '/create_user',
    name: 'CreateUser',
    component: CreateUser
  },
  {
    path: '/login',
    name: 'Login',
    component: TheLogin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
