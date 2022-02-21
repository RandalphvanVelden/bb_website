<template>

  <li >
    <router-link :to="link">{{name}}</router-link> {{teamId}} {{user}} 
    <router-link :to="updateTeam"> Update</router-link>
    <button link @click="deleteTeam">Delete</button>
  </li>
        
</template>

<script>

import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'
export default {
    props: [ 'teamId', 'name', 'user', 'userId', 'baseTeam'],
    setup(props) {
 const {mutate: deleteTeam} = useMutation(gql`
mutation deleteTeam($id: ID!) {
  deleteTeam(id: $id){
    id
    teamName
  }
}
    `, ()=>({
        variables:{
        id: props.teamId
        },
    }))
    
    return{
        deleteTeam,
    }
},
    computed:{
    link(){
            return this.$route.path + '/' + this.teamId;
        },
        updateTeam(){
          return {
            name: 'updateTeam',
            params: {teamId: this.teamId, name: this.name, user: this.user, idUser: this.userId, baseT: this.baseTeam}
          }
        },
        
  },
  
}
</script>