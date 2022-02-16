<template>
<h1>Teams</h1>
<ul>
  <li v-for="team of result.teams" :key="team.id">
    {{team.teamName}} {{team.user.name}}
    <table>
      <thead>
        <tr>
          <th>Nr</th>
          <th>PlayerName</th>
        </tr>
      </thead>
      <tr>
          <th v-for="player of team.players" :key="player.id">{{player.playerNr}}</th>
          <th v-for="player of team.players" :key="player.id">{{player.playerName}}</th>
        </tr>
    </table>
     
  </li>
</ul>
</template>


<script>
import {useQuery} from '@vue/apollo-composable'
import gql from 'graphql-tag'

export default {
  setup(){
    const {result} = useQuery(gql`
   query teams{
  teams{
  teamName
    user{
      name
    }
    players{
      playerNr
      playerName
    }
}
}
    `)
    return{
      result,
    }
  },
   }
  

  



</script>
