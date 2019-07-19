<template>
  <div class="step-works-show">
    <br><br>
    <div class="home-intro-info-box-wrap">
        <!-- Nested Container Starts -->
          <div class="container text-xs-center text-sm-center text-md-left" >
          <!-- Home Intro Info Box Starts -->
            <div class="home-intro-info-box">
    <div>
      <h2 style="margin: 5px 35px;padding: 25px 0px 25px 30px;font-size: 55px;   " > Step: <strong>{{ stepWork.step }}</strong></h2>

      <label style="margin: 65px 0px 5px 25px;padding: 25px;font-size: 32px;   ">Step work: </label>
      <div style="background-color: lightyellow; margin: 20px;padding: 15px;font-size: 20px; width: 80%; height: 500px ">
     <h5 style="color: darkblue"> {{ stepWork.my_work }}</h5></div>

      <label style="margin: 65px 0px 0px 25px;padding: 25px; font-size: 26px; ">  My Journal:</label>
      <div style=" background-color: white; margin: 20px;padding: 15px;font-size: 18px; width: 80%; height: 300px ">
        {{ stepWork.journal }}</p>
       </div>
    </div></div></div>
    <br><br>
     
<div class=
"text-center">
      <router-link v-bind:to="'/step_works/' + stepWork.id + '/edit'">
        <button class="btn btn-main flat animation">Edit this Step work</button>
      </router-link>
   <br>
      <br>
      <router-link  v-bind:to="'/step_works'">
          <button class="btn btn-main flat animation">Back to all step work index</button>
      </router-link>
    </div>
    </div>
      
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      stepWork: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/step_works/" + this.$route.params.id).then(response => {
      this.stepWork = response.data;
      console.log(this.stepWork);
    });
  }
  
};
</script>