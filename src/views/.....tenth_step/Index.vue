<template>
  <div class="tenth-step-index"> 
    <div>



      <div v-if="tenthStep.tenth_step">
      <div v-for="tenth in tenthStep">
        
          <h1>All Tenth-Steps: </h1>   
          <br>
          <br>

          <h3> </h3> <h1>{{ tenth.who }}</h1>   
        <router-link  v-bind:to="'/tenth_step/' + tenth.id"><button>
          See this full tenth step info:</button>
        </router-link>
      </div>
      </div> 



      <router-link v-bind:to="'/tenth_step/new'">
        <button class="create-button">
          <p>
            <strong>
              Click me! 
            </strong>
            <br>
             <small>
              To start writing a 
            </small>
            <br> 
            <strong>
            "Tenth Step"
            </strong>
          </p>
        </button>
      </router-link>








    </div>
  </div>
</template>

<style>
 
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";


export default {

   mixins: [Vue2Filters.mixin],
  
  data: function() {
    return {
      
      tenthStep: []
      
    };
  },
  created: function() {
    axios.get("/api/fourth_steps").then(response => {
      this.tenthStep = response.data;
      console.log(this.tenthStep);
    });
  }
};
</script>