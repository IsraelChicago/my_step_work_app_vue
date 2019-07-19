<template>
  <div class="step-works-new">

    <div class="home-intro-info-box-wrap">
        <!-- Nested Container Starts -->
          <div class="container text-xs-center text-sm-center text-md-left" >
          <!-- Home Intro Info Box Starts -->
            <div class="home-intro-info-box">

    <h1 style="padding: 35px; background-color: lightblue; color: darkblue; border: 10px;  margin: 35px 95px; font-size: 65px" class="text-center">New Step work</h1>

    <ul>
      <li class="text-danger" v-for="error in errors">{{ error }}</li>
    </ul>

    <form>
      
      <div>
        <label style="margin: 75px 0px 5px 25px;padding: 25px;font-size: 32px;   ">Step #</label ><br>
        <input style="margin: 5px 35px;padding: 25px 0px 25px 30px;font-size: 45px;   " type="number" v-model="newStepWorkStep"></textarea>
      </div>

      <div>
        <label style="margin: 65px 0px 5px 25px;padding: 25px;font-size: 32px;   ">My Step Work</label><br>
        <textarea style="background-color: lightyellow; margin: 20px;padding: 15px;font-size: 20px; width: 80%; height: 500px " placeholder="Any journaling about the step work:" v-model="newStepWorkMyWork"></textarea>
      </div>



      <div>
        <label style="margin: 65px 0px 0px 25px;padding: 25px;font-size: 26px;   ">My personal journaling about this step</label><br>
        <textarea style="margin: 20px;padding: 15px;font-size: 18px; width: 80%; height: 300px " placeholder="Any journaling about the step work:" v-model="newStepWorkJournal"></textarea>
      </div>

      <div>
        <button style="border-color: lightgrey; padding: 15px 30px ;border-width: 4px; border-radius: 10px; margin: 10px " class="btn btn-main flat animation" v-on:click="createStepWork()">Save my Step Work
        </button>
      </div>
      
    </form>
  </div></div></div>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newStepWorkStep: "",
      newStepWorkMyWork: "",
      newStepWorkJournal: "",
      errors: []
    };
  },
  created: function() {
  },
  methods: {
    createStepWork: function() {
      var params = {
        step: this.newStepWorkStep,
        my_work: this.newStepWorkMyWork,
        journal: this.newStepWorkJournal,
      };
      axios.post("/api/step_works", params).then(response => {
        this.stepWork.push(response.data);
        this.newStepWorkStep = "";
        this.newStepWorkMyWork = "";
        this.newStepWorkJournal = "";
      
      })
      this.$router.push("/step_works");
    }
    
  }
};
</script>







 