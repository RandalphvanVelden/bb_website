<template>
<h1>Teams</h1>
<div v-if="loading">Loading...</div>
<div v-else-if="error">Error {{error.message}}</div>
  <ul v-else-if="teams">
   <user-team-list @refetchNow="refetch()" v-for="team in teams"
   :key="team.id"
   :teamId="team.id"
   :name="team.teamName"
   :user="team.user.name"
   :userId="team.user.id"
   :baseTeam="team.baseTeam">
   </user-team-list>
</ul>
<router-link to="/create_team">add Team</router-link> 
<button @click="refetch()">refresh</button>


</template>


<script>
import {useQuery, useResult} from '@vue/apollo-composable'
import gql from 'graphql-tag'
import UserTeamList from '../../components/UserTeamList.vue'

export default {
components:{
  UserTeamList
},
  setup(){
   const {result, loading, error, refetch} = useQuery(gql`
   query teams{
  teams{
  id
  teamName
    user{
    id
      name
    } 
    baseTeam  
}
}
    `)
    const teams = useResult(result, null, data => data.teams)
    return{
      teams,
      loading,
      error,
      refetch
    }
  },
   methods:{
     
   }
   }
  

  



</script>
