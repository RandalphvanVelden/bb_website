<template>
    <form @submit.prevent="teamCreate()">
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
 
 <return-teams-button></return-teams-button>
</template>

<script>
import {ref} from 'vue'
import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import ReturnTeamsButton from '../../components/ui/ReturnTeamsButton.vue'

export default {
    components:{
        ReturnTeamsButton
    },
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
    
    })
    return{
        teamName,
        userId,
        baseTeam,
        createTeam,
        
    }
},
methods:{

returnToTeams(){
    this.$router.replace('/teams')
},
    teamCreate(){
        this.returnToTeams()
        this.createTeam()
    }
}
};
</script>
<style scoped>

</style>