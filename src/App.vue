<!-- This is HTML Code  -->

<template>

<h2>{{ 2+3+5 }}</h2>
<h2>{{ 5+10+15 }}</h2>
<h2>Add method - {{ add(2,3,4) }}</h2>
<h2>Multiply method - {{ multiply(6) }}</h2>
</template>





<!-- This is JS Code  -->
<script>


export default {
  name: 'abbBolNaMadarChod',
  data() {
    return {
      baseMultiplier: 5
    }
  },
  methods:{
    add(a,b,c){
      return a+b+c;
    },
    multiply(number){
      return number * this.baseMultiplier;
    }
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
