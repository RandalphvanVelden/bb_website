<template>
    <form @submit.prevent="createTeam()">
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

        <button>Create</button>
    </form>
 
 <button @click="this.$router.replace('/teams')">Terug naar Teams</button>
</template>

<script>
import {ref} from 'vue'
import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export default {
setup(){
    const teamName = ref('')
    const userId = ref('')
    const baseTeam = ref('')

    const {mutate: createTeam, onDone} = useMutation(gql`
    mutation createTeam($teamName: String!, $user_id: ID!, $baseTeam: String!) {
  createTeam(teamName: $teamName, user_id: $user_id, baseTeam: $baseTeam){
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
        teamName: teamName.value,
        user_id: userId.value,
        baseTeam: baseTeam.value
        },
    }))
    
    onDone(() =>{
        this.$router.replace('/teams');
    })
    return{
        teamName,
        userId,
        baseTeam,
        createTeam,
    }
},

};
</script>
<style scoped>

</style>