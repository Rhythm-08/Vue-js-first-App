<!-- This is HTML Code  -->

<template>
<home/>
<h1>Email {{ email }}</h1>
<h1>Name {{ getName() }}</h1>
<h1>Mobile {{ mobile =7777 }}</h1>
</template>


<!-- This is JS Code  -->
<script>
 import home from './components/home.vue'

export default {
  components:{
    home
  },
  name: 'abbBolNaMadarChod',
  data() {
    return {
      baseMultiplier: 5,
      email:'rhythm@gmail.com',
      mobile:89898,
      getName :function(){
        return 'Rhythm Sharma';
      }
    }
  },
  methods:{
  
  }
}

</script>

<!-- This is CSS code  -->
<style>
#lodaBehenChod {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #956996;
  margin-top: 60px;
}

</style>
