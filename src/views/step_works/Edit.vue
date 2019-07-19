
<template>
  <div class="step-works-edit">
    
    <div class="home-intro-info-box-wrap">
        <!-- Nested Container Starts -->
          <div class="container text-xs-center text-sm-center text-md-left" >
          <!-- Home Intro Info Box Starts -->
            <div class="home-intro-info-box">
              <br>

    <h1 style="padding: 35px; background-color: lightblue; color: darkblue; border: 10px;  margin: 35px 95px; font-size: 65px"><strong>Edit my step work</strong></h1>
    <br>

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      
      <div>
        <label style="margin: 75px 0px 5px 25px;padding: 25px;font-size: 32px;   ">Step #</label><br>
        <input style="margin: 5px 35px;padding: 25px 0px 25px 30px;font-size: 45px;   " type="number" v-model="stepWork.step"></textarea>
      </div>

      <div>
        <label style="margin: 65px 0px 5px 25px;padding: 25px;font-size: 32px;   ">My Step Work</label><br>
        <textarea style="background-color: lightyellow; margin: 20px;padding: 15px;font-size: 20px; width: 80%; height: 500px " placeholder="Any journaling about the step work:" v-model="stepWork.my_work"></textarea>
      </div>

<br><br><br><br>

      <div>
        <label style="margin: 65px 0px 0px 25px;padding: 25px;font-size: 26px;   ">My personal journaling about this step</label><br>
        <textarea style="margin: 20px;padding: 15px;font-size: 18px; width: 80%; height: 300px " placeholder="Any journaling about the step work:" v-model="stepWork.journal"></textarea>
      </div>
<br><br><br>
      <div>
        <button style="border-color: lightgrey; padding: 15px 30px ;border-width: 4px; border-radius: 10px; margin: 10px "class="btn btn-main flat animation" type="submit"><strong>Update Step Work</strong>
        </button>
      </div>
      <br>
      
    </form>


</div>
<br><br><br><br>
    <div>
      <button style="padding:15px;  margin: auto;  background-color: red; color: white; border-width: 4px;  border-radius: 15px; border-color: darkblue" class="btn btn-main flat animation"v-on:click="destroyStepWork()">
        <h5 style="line-height: 1.7em;" ><strong>Click here to! <br>DELETE THIS STEP WORK</strong></h5>
      </button>
    </div>
    <br>

  </div></div></div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      errors: [],
      stepWork: {}
    };
  },
  created: function() {
    axios.get("/api/step_works/" + this.$route.params.id).then(response => {
      this.stepWork = response.data;
      console.log(this.stepWork);
    });
  },
  methods: {
    submit: function() {     
      var params = {
                           
        step: this.stepWork.step,                   
        my_work: this.stepWork.my_work,  
        journal: this.stepWork.journal    
      };
      
      axios.patch("/api/step_works/" + this.stepWork.id, params).then(response => {
        console.log("Success!", response.data);
        this.$router.push("/step_works/" + this.stepWork.id);
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    },
    destroyStepWork: function() {
      
      if(confirm("Do you really want to delete the intire work of step " + this.stepWork.step + "?"))
      axios.delete("/api/step_works/" + this.stepWork.id).then(response => {
        console.log("Success!", response.data);
        this.$router.push("/step_works");
      });
    }
  }
};
</script>