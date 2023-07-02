<!-- This is HTML Code  -->

<template>
  <router-link to="Home">Home </router-link>
<router-view></router-view>
</template>


<!-- This is JS Code  -->
<script>

export default {
  
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
