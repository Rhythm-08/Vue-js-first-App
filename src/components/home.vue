<template>
    <h1 v-on:mousemove="getConsole()">Home Component</h1>
    <button v-on:click="getData('Button 1 Clicked')">Click Me</button>
    <button v-on:dblclick="getData('Button 1 Clicked')">Double Click Me</button>
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
    methods:{
    getData(data){
        alert(data);
    },
    getConsole(){
        this.count++;
        console.log('Function Called')
    }
}
    
}

</script>

<style scoped>
h1{
    color:red
}
</style>