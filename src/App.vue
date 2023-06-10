<!-- This is HTML Code  -->

<template>
  <div>{{ greet }} {{ name }}</div>
  <!-- <div v-text="channel"></div> This is another way to print data -->
  <div v-html="channel"></div> <!-- This is another way to print data -->
  <!-- <div v-html="hack"></div> This is another way to print data -->
  <h2 v-bind:id="headingID">Heading</h2>
  <button v-bind:disabled="isDisabled"> Click Me </button>
  <h2 class="underline">Underlined Text</h2>
  <h2 class="underline" v-bind:class="status">Status</h2>
  <h2 class="underline" v-bind:class="isPromoted?'promoted':'notPromoted'">Promoted Movie</h2>
  <h2 v-bind:class="['underline','promoted']">ModarChod</h2>
  <h2 v-bind:class="[isPromoted && 'promoted', 'underline']">Array conditional Movie</h2>
  <h2 v-bind:class="{
    promoted:isPromoted,
    new :!isSoldOut
  }">
    Object conditional movie
  </h2>
</template>





<!-- This is JS Code  -->
<script>


export default {
  name: 'abbBolNaMadarChod',
  data() {
    return {
      greet: 'Milo',
      name: 'lodaBehenChod',
      channel: '<b>MadarChod</b>',
      hack: `<a onclick="alert('Tere Toh Lag Gye Sale')">Lag Gaye Lode </a>`,
      headingID: 'Heading',
      isDisabled:true,
      status:'success',
      isPromoted:true,
      isSoldOut:false
    
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

.underline{
  text-decoration: underline;
}

.promoted {
  font-style: italic;
}
.notPromoted{
  font-style: bold;
}
.new {
  color: green;
}
</style>
