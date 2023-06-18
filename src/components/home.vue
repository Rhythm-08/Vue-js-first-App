<template>
   <h1> Get input fields value</h1>
   <input type="text" placeholder="enter email" v-model="email"/>
   <br><br><br>
   <input type="password" placeholder="enter password" v-model="password"/>
   <br><br><br>
   <button v-on:click="onSubmit()" type="button">Get Values</button>
   <child name="Rhythm Sharma" :user="user" :getData="getData"/>
</template>

<script>
    import child from './child.vue'

export default {
    components:{
        child
    },
    name:'homePage',
    data(){
        return{
            email:null,
            password:null,
            user:{
                name:'Peter',
                email:'peterQuill@gmail.com'
            }

        }
    },
    methods:{
        onSubmit(){
             console.warn('Values', this.email , this.password)
        },
        getData(){
            console.log('Parent function Called')
        }
    }
    
}

</script>

<style scoped>
h1{
    color:red
}
</style>