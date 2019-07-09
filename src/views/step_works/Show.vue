<template>
  <div class="addictions-show">
    <div>
      <h2> {{ addiction.title }}</h2>
      <img v-bind:src="addiction.logo_url" alt="">
      <img v-bind:src="addiction.background_url" alt="">
      <img v-bind:src="addiction.switch_background_url" alt="">
      <p>The Problem: {{ addiction.problem }}</p>
      <p>The Solution: {{ addiction.solution }}</p>
      <p>The Promises: {{ addiction.problem }}</p>
      <p>The Twelve Steps: {{ addiction.solution }}</p>
      <p>Recovery group official website: {{ addiction.recovery_url }}</p>

      <router-link v-bind:to="'/addictions/' + addiction.id + '/edit'">
        <button>Edit Recovery Information</button>
      </router-link>
    </div>
      
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      addiction: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/addictions/" + this.$route.params.id).then(response => {
      this.addiction = response.data;
      console.log(this.addiction);
    });
  }
  
};
</script>