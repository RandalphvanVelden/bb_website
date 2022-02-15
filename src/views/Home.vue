<template>
  <div class="home">
    
  </div>
</template>

<script>


export default {
  import gql from 'graphql-tag'
  apollo:{ gql` teams{
    id
    teamName
    user{
      name
    }
    players{
      playerNr
      playerName
    }
  }`
}


</script>
