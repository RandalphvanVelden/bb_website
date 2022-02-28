<template>
<h1>Teams</h1>
  <div>
    <h3>{{team.teamName}}</h3>
    <table>
      <thead>
        <tr>
          <th>nr</th>
          <th>name</th>
          <th>position</th>
          <th>MA</th>
          <th>ST</th>
          <th>AG</th>
          <th>PA</th>
          <th>AV</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player of team.players" :key="player.id">
            <th>{{player.playerNr}}</th>
            <th>{{player.playerName}}</th>
            <th>{{player.position}}</th>
            <th>{{player.MA}}</th>
            <th>{{player.ST}}</th>
            <th>{{player.AG}}+</th>
            <th>{{player.PA}}+</th>
            <th>{{player.AV}}+</th>
            <th>{{player.value}}</th>
        </tr>
      </tbody>
    </table>
     <return-teams-button></return-teams-button>
   </div>
</template>


<script>
import {useQuery, useResult} from '@vue/apollo-composable'
import gql from 'graphql-tag'
// import {reactive} from 'vue'
import ReturnTeamsButton from '../../components/ui/ReturnTeamsButton.vue'

export default {
  props: ['teamId'],
  components:{
    ReturnTeamsButton
  },
  setup(props){

    const {result} = useQuery(gql`
     query team($id: ID!){
  team(id: $id){
  teamName
    players{
      playerNr
      playerName
      position
      MA
      ST
      AG
      PA
      AV
      value
    }
}
}
    `, () =>({
      id: props.teamId,
    })
      )
    
    // function selectTeam (id){
    //   variables.id = id
    // }
    const team = useResult(result, null, data => data.team)
    return{
   team
    }
  },

  }
  

  



</script>
