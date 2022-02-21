import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Teams from '../views/teams/Teams.vue'
import Team from '../views/teams/Team.vue'
import CreateTeam from '../views/teams/CreateTeam.vue'
import UpdateTeam from '../views/teams/UpdateTeam.vue'

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
    path: '/createteam',
    name: 'CreateTeam',
    component: CreateTeam
  },
  {
    path: '/update/:teamId',
    name: 'updateTeam',
    component: UpdateTeam,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
