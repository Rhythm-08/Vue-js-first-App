<template>
    <h1 >Home Component</h1>
    <input  type="text" placeholder="enter here" v-model="count"/>
    <h2>{{ count }}</h2>
</template>

<script>
export default {
    name:'homePage',
    data(){
        return{
            count:0
        }
    },
    
}

</script>

<style scoped>
h1{
    color:red
}
</style>