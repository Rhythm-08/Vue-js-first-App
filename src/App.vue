<!-- This is HTML Code  -->

<template>
  <div>{{ greet }} {{ name }}</div>
  <!-- <div v-text="channel"></div> This is another way to print data -->
  <div v-html="channel"></div> <!-- This is another way to print data -->
  <!-- <div v-html="hack"></div> This is another way to print data -->
  <h2 :id="headingID">Heading</h2>
  <button :disabled="isDisabled"> Click Me </button>
  <h2 class="underline">Underlined Text</h2>
  <h2 class="underline" :class="status">Status</h2>
  <h2 class="underline" :class="isPromoted ? 'promoted' : 'notPromoted'">Promoted Movie</h2>
  <h2 :class="['underline', 'promoted']">ModarChod</h2>
  <h2 :class="[isPromoted && 'promoted', 'underline']">Array conditional Movie</h2>
  <h2 :class="{
    promoted: isPromoted,
    new: !isSoldOut
  }">
    Object conditional movie
  </h2>
  <h2 :style="{
    color:highLightColor,
    fontSize:headerSize
  }">HighLighted Color</h2>
  <h2 :style="headerStyleObject">Style Object Approach</h2>
  <div :style="[baseStyleObject,successStyleObject]">Success Style</div>
  <div :style="[baseStyleObject,dangerStyleObject]">Danger Style</div>
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
      isDisabled: true,
      status: 'success',
      isPromoted: true,
      isSoldOut: false,
      highLightColor:'orange',
      headerSize: '50px',
      headerStyleObject:{
        color:'orange',
        fontSize:'50px'
      },
      baseStyleObject:{
        padding:'10px',
        fontSize:'50px'
      },
      successStyleObject:{
        color:'green',
        backgroundColor:'light-green',
        border:'1px solid green'
      },
      dangerStyleObject:{
        color:'red',
        backgroundColor:"light-red",
        border:'1px solid red'
      }

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

.underline {
  text-decoration: underline;
}

.promoted {
  font-style: italic;
}

.notPromoted {
  font-style: bold;
}

.new {
  color: green;
}
</style>
