<template>
  <div class="addictions-new">

    <h1 class="text-center">New Addiction-Recovery Information</h1>

    <ul>
      <li class="text-danger" v-for="error in errors">{{ error }}</li>
    </ul>

    <form>
        
        <div>
          <label>Title</label>
          <input type="text" placeholder="Title:" v-model="newAddictionTitle"> 
        </div>

        <div>
          <label>The Problem</label><br>
          <input type="textarea"  placeholder="The problem:" v-model="newAddictionProblem"> 
        </div>

        <div>
          <label>The Solution</label>
          <input type="textarea" placeholder="The Solution:" v-model="newAddictionSolution"> 
        </div>

        <div>
          <label>The promises</label>
          <input type="textarea" placeholder="The Promises:" v-model="newAddictionPromises"> 
        </div>

        <div>
          <label>The Twelve Steps</label>
          <input type="textarea" placeholder="The Twelve Steps:" v-model="newAddictionTwelveSteps"> 
        </div>
        
        <div>
          <label>Recovery Website</label>
          <input type="text" placeholder="Official Site URL:" v-model="newAddictionRecoveryUrl"> 
        </div>
        
        <div>
          <label>Recovery Logo</label>
          <input type="text" placeholder="Logo URL:" v-model="newAddictionLogoUrl"> 
        </div>
        <div>
          <label>Background</label>
          <input type="text" placeholder="Background URL:" v-model="newAddictionBackgroundUrl"> 
        </div>

        <div>
          <label>Flash Background</label>
          <input type="text" placeholder="Switching Flash Background URL:" v-model="newAddictionSwitchBackgroundUrl"> 
        </div>
      
     <!--  <div >
        <label>Image</label>
        <input type="file" v-on:change="setFile($event)" ref="fileInput">
      </div> -->

      <div>
        <button v-on:click="createAddiction()">Create Addiction Profile</button>
      </div>
    </form>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newAddictionTitle: "",
      newAddictionProblem: "",
      newAddictionSolution: "",
      newAddictionPromises: "",
      newAddictionTwelveSteps: "",
      newAddictionRecoveryUrl: "",
      newAddictionLogoUrl: "",
      newAddictionBackgroundUrl: "",
      newAddictionSwitchBackgroundUrl: "",
      errors: []
    };
  },
  created: function() {
  },
  methods: {
    createAddiction: function() {
      var params = {
        title: this.newAddictionTitle,
        problem: this.newAddictionProblem,
        solution: this.newAddictionSolution,
        promises: this.newAddictionPromises,
        twelve_steps: this.newAddictionTwelveSteps,
        recovery_url: this.newAddictionRecoveryUrl,
        logo_url: this.newAddictionLogoUrl,
        background_url: this.newAddictionBackgroundUrl,
        switch_background_url: this.newAddictionSwitchBackgroundUrl,
        };
      axios.post("/api/addictions", params).then(response => {
        this.addictions.push(response.data);
        this.newAddictionTitle = "";
        this.newAddictionProblem = "";
        this.newAddictionSolution = "";
        this.newAddictionPromises = "";
        this.newAddictionTwelveSteps = "";
        this.newAddictionRecoveryUrl = "";
        this.newAddictionLogoUrl = "";
        this.newAddictionBackgroundUrl = "";
        this.newAddictionSwitchBackgroundUrl = "";
      })
    }



    // setFile: function(event) {
    //   if (event.target.files.length > 0) {
    //     this.newRecipeImageUrl = event.target.files[0];
    //   }
    // },
    
  }
};
</script>







 