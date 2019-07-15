<template>
  <div class="step-works-index">
    <div>
                                        
      <div v-for="stepWork in stepWorks">
        <h1> Step: {{ stepWork.step }} </h1>

        <router-link  v-bind:to="'/step_works/' + stepWork.id"><button>
          See this full step info:</button>
        </router-link>

      </div>                              
           <router-link v-bind:to="'/step_works/new'">
             <button class="create-button">
               <p>
                 <strong>
                   Click me! 
                 </strong>
                 <br>
                  <small>
                   To start writing your 
                 </small>
                 <br> 
                 <strong>
                 "STEP WORK"
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


export default {
  
  data: function() {
    return {
      
      stepWorks: []
      
    };
  },
  created: function() {
    axios.get("/api/step_works").then(response => {
      this.stepWorks = response.data;
      console.log(this.stepWorks);
    });
  }
};
</script>