<template>
<h2>Child Component</h2>
<h3>{{ name }}</h3>
<h3>{{user.email}}</h3>
<button v-on:click="getData()">Call Function</button>
</template>

<script>
export default {
    name:'ChildComponent',
    props:{
        name:String ,
        user:Object,
        getData:Function
    }
}
</script>

