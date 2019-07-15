<template>
  <div class="step-works-new">

    <h1 class="text-center">New Step work</h1>

    <ul>
      <li class="text-danger" v-for="error in errors">{{ error }}</li>
    </ul>

    <form>
      
      <div>
        <label>Step #</label><br>
        <input type="number" v-model="newStepWorkStep"></textarea>
      </div>

      <div>
        <label>My Step Work</label><br>
        <textarea id="myStepWork" placeholder="Any journaling about the step work:" v-model="newStepWorkMyWork"></textarea>
      </div>



      <div>
        <label>My journaling about this step</label><br>
        <textarea id="myJournal" placeholder="Any journaling about the step work:" v-model="newStepWorkJournal"></textarea>
      </div>

      <div>
        <button class="button-input" v-on:click="createStepWork()">Save my Step Work
        </button>
      </div>
      
    </form>
    
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







 