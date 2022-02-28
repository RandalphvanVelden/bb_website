<template>
    <h1>hier komt de header </h1>
    <!-- {{me.name}} -->
</template>

<script>
import {useQuery, useResult} from '@vue/apollo-composable'
import gql from 'graphql-tag'

export default {
    setup() {
       const {result, loading, error} = useQuery(gql`
   query {
  me{
    id
    name
    email
     
}
}
    `)
    const me = useResult(result, null, data => data.me)
    return{
      me,
      loading,
      error,
    }
  },  
computed:{

}
}
</script>