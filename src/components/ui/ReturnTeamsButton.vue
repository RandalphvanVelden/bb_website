<template>
 <button @click="returnToTeams">Terug naar Teams</button>   
</template>

<script>
export default {
    setup() {
        
    },
    methods:{
            returnToTeams(){
        this.$router.replace('/teams')
    },
    }
}
</script>