<template>

  <li >
    <router-link :to="link">{{name}}</router-link> {{teamId}} {{user}} 
    <router-link :to="updateTeam"> Update</router-link>
    <button @click="teamDelete">Delete</button>
  </li>
        
</template>

<script>

import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'
export default {
    props: [ 'teamId', 'name', 'user', 'userId', 'baseTeam'],
    emits: [ 'refetchNow'],
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
  
  methods: {
    teamDelete(){
      if(confirm("Are you sure you want to delete this team")){
       this.deleteTeam()
      this.$emit ("refetchNow")
      }
  },
  }
}
</script>