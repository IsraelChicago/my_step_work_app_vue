<template>
  <div class="step-works-show">
    <div>
      <h2> Step #{{ stepWork.step }}</h2>
      <p>Step work: {{ stepWork.my_work }}</p>
      <p>Journal: {{ stepWork.journal }}</p>
     

      <router-link v-bind:to="'/step_works/' + stepWork.id + '/edit'">
        <button class="create-button">Edit this Step work</button>
      </router-link>
      <br>
      <router-link  v-bind:to="'/step_works'">
          <button class="button-input">Back to all step work index</button>
      </router-link>
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