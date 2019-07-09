<template>
  <div class="addictions-index">
    <div>
                                        
      <div v-for="addiction in addictions">
        <h1> Title: {{ addiction.title }} </h1>
        <h3> Addiction Family: {{ addiction.addiction_family }} </h3>
        <h4> Problem: {{ addiction.problem }} </h4>
        <h4> Solution: {{ addiction.solution }} </h4>
        <h6> Promises: {{ addiction.promises }} </h6>
        <h6> Twelve Steps: {{ addiction.twelve_steps }} </h6>
        

        <router-link v-bind:to="'/addictions/' + addiction.id">
          
          <div class="image">
            <img v-bind:src="addiction.logo_url" alt="">
          </div>

          <div class="image">
            <img v-bind:src="addiction.background_url" alt="">
          </div>

          <div class="image">
            <img v-bind:src="addiction.switch_background_url" alt="">
          </div>
        </router-link>

        <div>
          <a href="#"> Official Site:  {{ addiction.recovery_url }} </a> 
        </div>
      </div>                              
                                
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
      
      addictions: []
      
    };
  },
  created: function() {
    axios.get("/api/addictions").then(response => {
      this.addictions = response.data;
      console.log(this.addictions);
    });
  }
};
</script>