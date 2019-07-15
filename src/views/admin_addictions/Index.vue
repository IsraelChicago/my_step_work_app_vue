<template>
  <div class="addictions-index">
    <div>
                                        
      <div v-for="addiction in addictions">
        <h1> Title: {{ addiction.title }} </h1>
        <h3> Addiction Family: {{ addiction.addiction_family }} </h3>
        
        

        <router-link v-bind:to="'/addictions/' + addiction.id">
          Click here for more info
          
          <div class="image">
            <img v-bind:src="addiction.logo_url" alt="img">
          </div>

          <div class="image">
            <img v-bind:src="addiction.background_url" alt="img">
          </div>

          <div class="image">
            <img v-bind:src="addiction.switch_background_url" alt="img">
          </div>
        </router-link>
        <br>
        
        <div>
          <a href="#"> Official Site:  {{ addiction.recovery_url }} </a> 
        </div>
        <br>
        <br>
        <br>
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