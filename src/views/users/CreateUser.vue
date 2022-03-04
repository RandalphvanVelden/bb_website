<template>
    <form @submit.prevent="userCreate()">
        <div class:="form-control" >
            <label for="name" >Name</label>
            <input type="text" id="name" v-model.trim="name">  
        </div>
         <div class:="form-control" >
            <label for="email">email</label>
            <input type="email" id="email" v-model.trim="email" >
        </div>
         <div class:="form-control">
            <label for="password">Password</label>
            <input type="password"  id="password" v-model.trim="password" >
        </div>         

        <button>Register</button>
    </form>
</template>

<script>
import {ref} from 'vue'
import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'


export default {
setup(){
    const name = ref('')
    const email = ref('')
    const password = ref('')

    const {mutate: createUser, onDone} = useMutation(gql`
    mutation createUser($name: String!, $email: String!, $password: String!) {
  createUser(name: $name, email: $email, password: $password){
    id
    name
   email
  }
}
    `, ()=>({
        variables:{
        name: name.value,
        email: email.value,
        password: password.value
        },
   
    }))
    
    onDone(() =>{
    
    })
    return{
        name,
        email,
        password,
        createUser,
        
    }
},
methods:{

returnToHome(){
    this.$router.replace('/')
},
    userCreate(){
        this.returnToHome()
        this.createUser()
    }
}
};
</script>
<style scoped>

</style>