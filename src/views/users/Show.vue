<template>
  <div class="users-show">
    <br>

    <div class="home-intro-info-box-wrap">
        <!-- Nested Container Starts -->
          <div class="container text-xs-center text-sm-center text-md-left" >
          <!-- Home Intro Info Box Starts -->
            <div class="home-intro-info-box">
    <div>
      <p>Name: </p> <h1>{{ user.name }}</h1>
      <br>

      <p>Username: </p> <h2>{{ user.user_name }}</h2>
      <br>
      <p>Email: </p> <h3>{{ user.email }}</h3>
      <br>
      <br></div></div></div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <div class="home-intro-info-box-wrap">
          <!-- Nested Container Starts -->
            <div class="container text-xs-center text-sm-center text-md-left" >
            <!-- Home Intro Info Box Starts -->
              <div class="home-intro-info-box">
      <h2><strong>Keeping track of my inventories:</strong></h2>
     
      <br>
      <h4>Total of my Fourth-Step-Inventories are kept track in here!</h4>
</div></div></div>
<br>

<div class="home-intro-info-box-wrap">
          <!-- Nested Container Starts -->
            <div class="container text-xs-center text-sm-center text-md-left" >
            <!-- Home Intro Info Box Starts -->
              <div class="home-intro-info-box" style="background-color: green">
      <div>
        <h4 v-if="user.resentments_count > 1">{{ user.resentments_count }} Resentment-Inventories are saved.</h4>
        <h4 v-if="user.resentments_count === 1">{{ user.resentments_count }} Resentment-Inventory is saved.</h4>
        <h4 v-if="user.resentments_count < 1">I have NO! Fourth Step Resentment-Inventory saved yet.</h4>
      </div>
<br><br>

      <div>
        <h4 v-if="user.harms_count > 1">{{ user.harms_count }} Harm-Inventories are saved</h4>
        <h4 v-if="user.harms_count === 1">{{ user.harms_count }} Harm-Inventoy is saved</h4>
        <h4 v-else="user.harms_count < 1">I have NO! Fourth Step Harm-Inventory saved yet.</h4>
      </div>
<br><br>

      <div>
        <h4 v-if="user.fears_count > 1">{{ user.fears_count }} Fears-Inventories are saved. </h4>
        <h4 v-if="user.fears_count === 1">{{ user.fears_count }} Fear-Inventory is saved. </h4>
        <h4 v-if="user.fears_count < 1">I have NO! Fourth Step Fear-Inventory saved yet.</h4>
      </div>
       
        
      
      <br></div></div></div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <div class="home-intro-info-box-wrap">
          <!-- Nested Container Starts -->
            <div class="container text-xs-center text-sm-center text-md-left" >
            <!-- Home Intro Info Box Starts -->
              <div class="home-intro-info-box">

     <h3><strong>Total of my Tenth-Step-Inventories are counted in here!</strong></h3>
   </div></div></div>
      <br>
      
      <br>
      <div class="home-intro-info-box-wrap">
          <!-- Nested Container Starts -->
            <div class="container text-xs-center text-sm-center text-md-left" >
            <!-- Home Intro Info Box Starts -->
              <div class="home-intro-info-box" style="background-color: green">
        
      <div>
        <h4 v-if="user.tenth_count > 1">I have {{ user.tenth_count }} 10th steps saved </h4>
        <h4 v-if="user.tenth_count === 1">I have {{ user.tenth_count }} 10th step saved </h4>
        <h4 v-if="user.tenth_count < 1">I have NO 10th step saved yet.</h4>
      </div>
    </div></div></div>
       

      <router-link v-bind:to="'/users/' + user.id + '/edit'">
        <button class="btn btn-main flat animation">Edit my profile</button>
      </router-link>
      <br>
      
    </div>
      
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
      console.log(this.user);
    });
  }
  
};
</script>