<template>
  <div class="home">
    <div>
      <h1>{{ message }}</h1>
    </div>

    <div>  
      <router-link to="/signup">Signup</router-link>
    </div>
    
    <div>
      <router-link to="/login">Login</router-link>
    </div>
    <div>
      <router-link to="/logout">Logout</router-link>
    </div>
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!"
    };
  },
  created: function() {},
  methods: {}
};
</script>
