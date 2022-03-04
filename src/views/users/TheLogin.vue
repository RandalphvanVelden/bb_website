<template>
    <form @submit.prevent="login()">
         <div class:="form-control" >
            <label for="email">email</label>
            <input type="email" id="email" v-model.trim="email" >
        </div>
         <div class:="form-control">
            <label for="password">Password</label>
            <input type="password"  id="password" v-model.trim="password" >
        </div>         
    <div>
        <p>{{token}}</p>
        </div>
        <button>Register</button>
        <div><p>{{token}}</p></div>
    </form>
</template>

<script>
import {ref} from 'vue'
import { useMutation, useResult} from '@vue/apollo-composable'
import gql from 'graphql-tag'


export default {
setup(){
    const email = ref('')
    const password = ref('')
    const username = ''

    const {mutate: login, result, onDone} = useMutation(gql`
   mutation login($username: String!, $password: String!){
  login(input:{
    username: $username,
    password: $password
  }){
    user{
      name
    }
    access_token
}
}
    `, ()=>({
        variables:{
      
        username: email.value,
        password: password.value
        },
   
    }))
    
    onDone(() =>{
    
    })
    const token = useResult(result, null, data => data.login)
    return{
        token,
        email,
        username,
        password,
        login,
        
    }
},
methods:{


}
};
</script>
<style scoped>

</style>