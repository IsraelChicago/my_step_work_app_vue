<template>
  <div class="fourth-steps-index"> 
    <div>



      
      <div v-for="fourthStep in fourthSteps">
        <div v-if="fourthStep.resentment">
          <h1>All Resentment inventories: </h1>   
          <br>
          <br>

          <h3> Who am I resenting in this inventory:</h3> <h1>{{ fourthStep.who }}</h1>   
        <router-link  v-bind:to="'/fourth_steps/' + fourthStep.id"><button>
          See this full fourth step info:</button>
        </router-link>
      </div>
      </div> 

      <div v-for="fourthStep in fourthSteps">
        <div v-if="fourthStep.harm">
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <h1>All Harm inventories: </h1>
          <br>
          <br>       
          <h3> Who did I harm in this inventory:</h3> <h1>{{ fourthStep.who }}</h1>   
        <router-link  v-bind:to="'/fourth_steps/' + fourthStep.id"><button>
          See this full fourth step info:</button>
        </router-link>
      </div>
      </div> 

      <div v-for="fourthStep in fourthSteps">
        <div v-if="fourthStep.fear">
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <h1>All Fear inventories: </h1>
          <br>
          <br>       
          <h3> What am I afraid of in this inventory:</h3> <h1>{{ fourthStep.what }}</h1>   
        <router-link  v-bind:to="'/fourth_steps/' + fourthStep.id"><button>
          See this full fourth step info:</button>
        </router-link>
      </div>
      </div> 








      <router-link v-bind:to="'/fourth_steps/new'">
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
            "Fourth Step inventory"
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
      
      fourthSteps: []
      
    };
  },
  created: function() {
    axios.get("/api/fourth_steps").then(response => {
      this.fourthSteps = response.data;
      console.log(this.fourthSteps);
    });
  }
};
</script>