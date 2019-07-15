
<template>
  <div class="step-works-edit">

    <h1>Edit my step work</h1>

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      
      <div>
        <label>Step #</label><br>
        <input type="number" v-model="stepWork.step"></textarea>
      </div>

      <div>
        <label>My Step Work</label><br>
        <textarea id="myStepWork" placeholder="Any journaling about the step work:" v-model="stepWork.my_work"></textarea>
      </div>



      <div>
        <label>My journaling about this step</label><br>
        <textarea id="myJournal" placeholder="Any journaling about the step work:" v-model="stepWork.journal"></textarea>
      </div>

      <div>
        <button class="button-input" type="submit">Update Step Work
        </button>
      </div>
      
    </form>


    <div>
      <button v-on:click="destroyStepWork()">
        DELETE THIS STEP WORK
      </button>
    </div>

  </div>
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
        this.$router.push("/step_works/index");
      });
    }
  }
};
</script>