<template>
  <div class="addictions-new">

    <h1 class="text-center">New Addiction-Recovery Information</h1>

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form>
        <div>
          <label>Title</label><br>
          <input class="text-input" type="text" placeholder="Title:" v-model="newAddictionTitle"> 
        </div>
        <br>

        <div>
          <label>Addiction Family</label><br>
          <input class="text-input" type="text" placeholder="Type of addiction: Food, financials, etc.:" v-model="newAddictionAddictionFamily"> 
        </div>
        <br>
        

        <div>
          <label>The Problem</label><br><br>
          <textarea  placeholder="The problem:" v-model="newAddictionProblem"> </textarea>
        </div>
        <br>
        

        <div>
          <label>The Solution</label><br>
          <textarea placeholder="The Solution:" v-model="newAddictionSolution"> </textarea> 
        </div>
        <br>
        

        <div>
          <label>The promises</label><br>
          <textarea  placeholder="The Promises:" v-model="newAddictionPromises"> </textarea> 
        </div>
        <br>
        

        <div>
          <label>The Twelve Steps</label><br>
          <textarea placeholder="The Twelve Steps:" v-model="newAddictionTwelveSteps"> </textarea> 
        </div>
        <br>
        
        
        <div>
          <label>Recovery Website</label><br>
          <input class="text-input" type="text" placeholder="Official Site URL:" v-model="newAddictionRecoveryUrl"> 
        </div>
        <br>
        
        
        <div>
          <label>Recovery Logo</label><br>
          <input class="text-input" type="text" placeholder="Logo URL:" v-model="newAddictionLogoUrl"> 
        </div>
        <br>
        
        <div>
          <label>Background</label><br>
          <input class="text-input" type="text" placeholder="Background URL:" v-model="newAddictionBackgroundUrl"> 
        </div>
        <br>
        

        <div>
          <label>Flash Background</label><br>
          <input class="text-input" type="text" placeholder="Switching Flash Background URL:" v-model="newAddictionSwitchBackgroundUrl"> 
        </div>
        <br>
        
      
     <!--  <div >
        <label>Image</label><br>
        <input type="file" v-on:change="setFile($event)" ref="fileInput">
      </div> -->

      <div>
        <button v-on:click="createAddiction()">Create Addiction Profile</button>
      </div>
        <br>
        
    </form>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newAddictionTitle: "",
      newAddictionAddictionFamily: "",
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
        addiction_family: this.newAddictionAddictionFamily,
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
        this.newAddictionAddictionFamily = "";
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
  }
};
</script>


<!-- // setFile: function(event) {
    //   if (event.target.files.length > 0) {
    //     this.newRecipeImageUrl = event.target.files[0];
    //   }
    // }, -->