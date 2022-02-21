<template>
   
    <form @submit.prevent="updateTeam()">
        <div class:="form-control" >
            <label for="teamName" >Team Name</label>
            <input type="text" id="teamName" v-model.trim="teamName">  
        </div>
         <div class:="form-control" >
            <label for="user_id">user Id</label>
            <input type="text" id="user_id" v-model.trim="userId" >
        </div>
         <div class:="form-control">
            <label for="baseTeam">Base Team</label>
            <input type="text"  id="baseTeam" v-model.trim="baseTeam" >
        </div>         

        <button>Update</button>
    </form>
 
 <button @click="this.$router.replace('/teams')">Terug naar Teams</button>
</template>

<script>
import {ref} from 'vue'
import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export default {
    props:['teamId', 'name', 'user', 'idUser', 'baseT'],


setup(props){
    const id = ref('')
    const teamName = ref(props.name)
    const userId = ref(props.idUser)
    const baseTeam = ref(props.baseT)

    const {mutate: updateTeam} = useMutation(gql`
mutation updateTeam($id: ID!, $teamName: String!, $user_id: ID!, $baseTeam: String!) {
  updateTeam(id: $id, teamName: $teamName, user_id: $user_id, baseTeam: $baseTeam){
    id
    teamName
    user{
      name
    }
    baseTeam
  }
}
    `, ()=>({
        variables:{
        id: props.teamId,
        teamName: teamName.value,
        user_id: userId.value,
        baseTeam: baseTeam.value
        },
    }))
    
    return{
        id,
        teamName,
        userId,
        baseTeam,
        updateTeam,
    }
},

};
</script>
<style scoped>

</style>


