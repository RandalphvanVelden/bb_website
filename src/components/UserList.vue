<template>

  <li >
    {{name}} 
    <!-- <router-link :to="updateUser"> Update</router-link> -->
    <button @click="userDelete">Delete</button>
    <!-- <router-link>teams</router-link> -->
  </li>
        
</template>

<script>

import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'
export default {
    props: [ 'id', 'name'],
    emits: [ 'refetchNow'],
    setup(props) {
 const {mutate: deleteUser} = useMutation(gql`
mutation deleteUser($id: ID!) {
  deleteTeam(id: $id){
    id
    teamName
  }
}
    `, ()=>({
        variables:{
        id: props.id
        },
    }))
    
    return{
        deleteUser,
    }
},
    computed:{
    link(){
            return this.$route.path + '/' + this.id;
        },
        updateUser(){
          return {
            name: 'updateUser',
            params: {id: this.id, name: this.name}
          }
        },
        
  },
  
  methods: {
    userDelete(){
      if(confirm("Are you sure you want to delete this user")){
       this.deleteUser()
      this.$emit ("refetchNow")
      }
  },
  }
}
</script>