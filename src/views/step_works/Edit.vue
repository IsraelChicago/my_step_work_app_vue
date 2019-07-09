
<template>
  <div class="addictions-edit">

    <h1>Edit Addiction information</h1>

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:sumbit.prevent="submit()">
      <div>
        <label>Title</label>
        <input type="text" placeholder="Title:" v-model="addiction.title"> 
      </div>

      <div>
        <label>The Problem</label>
        <input type="textarea" placeholder="The problem:" v-model="addiction.problem"> 
      </div>

      <div>
        <label>The Solution</label>
        <input type="textarea" placeholder="The Solution:" v-model="addiction.solution"> 
      </div>

      <div>
        <label>The promises</label>
        <input type="textarea" placeholder="The Promises:" v-model="addiction.promises"> 
      </div>

      <div>
        <label>The Twelve Steps</label>
        <input type="textarea" placeholder="The Twelve Steps:" v-model="addiction.twelve_steps"> 
      </div>
      
      <div>
        <label>Recovery Logo</label>
        <input type="text" placeholder="Logo URL:" v-model="addiction.logo_url"> 
      </div>
      
      <div>
        <label>Background</label>
        <input type="text" placeholder="Background URL:" v-model="addiction.background_url"> 
      </div>

      <div>
        <label>Flash Background</label>
        <input type="text" placeholder="Switching Flash Background URL:" v-model="addiction.switch_background_url"> 
      </div>

      <div>
        <label>Recovery Website</label>
        <input type="text" placeholder="Official Site URL:" v-model="addiction.recovery_url"> 
      </div>
    
      <div>
        <button type="submit">Create Addiction Profile</button>
      </div>
    </form>

    <div>
      <button v-on:click="destroyAddiction()">
        DELETE THIS RECOVERY GROUP
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
      addiction: {}
    };
  },
  created: function() {
    axios.get("/api/addictions/" + this.$route.params.id).then(response => {
      this.addiction = response.data;
      console.log(this.addiction);
    });
  },
  methods: {
    submit: function() {
      
      var params = {
        title: this.addiction.title,
        problem: this.addiction.problem,
        solution: this.addiction.solution,
        promises: this.addiction.promises,
        twelve_steps: this.addiction.twelve_steps,
        recovery_url: this.addiction.recovery_url,
        logo_url: this.addiction.logo_url,
        background_url: this.addiction.background_url,
        switch_background_url: this.addiction.switch_background_url,
      };
      
      axios.patch("/api/addictions/" + this.addiction.id, params).then(response => {
        console.log("Success!", response.data);
        this.$router.push("/addictions/" + this.addiction.id);
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    },
    destroyAddiction: function() {
      
      if(confirm("Do you really want to delete " + this.addiction.title + "?"))
      axios.delete("/api/addictions/" + this.addiction.id).then(response => {
        console.log("Success!", response.data);
        this.$router.push("/addictions/index");
      });
    }
  }
};
</script>