<template>
<div v-if="loading">Loading...</div>
<div v-else-if="error">Error {{error.message}}</div>
  <ul v-else-if="users">
<user-list @refetchNow="refetch()" v-for="user in users"
   :key="user.id"
   :userId="user.id"
   :name="user.name"
   ></user-list>
  </ul>
</template>


<script>
import {useQuery, useResult} from '@vue/apollo-composable'
import gql from 'graphql-tag'
import UserList from "../../components/UserList.vue"

export default {
    components:{
    UserList
},
    setup() {
   const {result, loading, error, refetch} = useQuery(gql`
   query users{
   users{
  data{
  id
  name
}
}
}
    `)
    const users = useResult(result, null, data => data.users.data)
    return{
      users,
      loading,
      error,
      refetch
    }
  },
}
</script>