<template>
   <h1> Get input fields value</h1>
   <input type="text" placeholder="enter email" v-model="email"/>
   <br><br><br>
   <input type="password" placeholder="enter password" v-model="password"/>
   <br><br><br>
   <button v-on:click="onSubmit()" type="button">Get Values</button>
</template>

<script>
export default {
    name:'homePage',
    data(){
        return{
            email:null,
            password:null,

        }
    },
    methods:{
        onSubmit(){
             console.warn('Values', this.email , this.password)
        }
    }
    
}

</script>

<style scoped>
h1{
    color:red
}
</style>