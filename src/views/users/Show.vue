<template>
  <div class="users-show">
    <div>
      <p>Name: </p> <h1>{{ user.name }}</h1>
      <br>

      <p>Username: </p> <h2>{{ user.user_name }}</h2>
      <br>
      <p>Email: </p> <h3>{{ user.email }}</h3>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <h1>Keeping track of my inventories:</h1>
      <br>
      <br>
      <h2>Total of my Fourth-Step-Inventories saved in here!</h2>

      <div>
        <h4 v-if="user.resentments_count > 1">{{ user.resentments_count }} Resentment-Inventories are saved.</h4>
        <h4 v-if="user.resentments_count === 1">{{ user.resentments_count }} Resentment-Inventory is saved.</h4>
        <h4 v-if="user.resentments_count < 1">I have NO! Fourth Step Resentment-Inventory saved yet.</h4>
      </div>


      <div>
        <h4 v-if="user.harms_count > 1">{{ user.harms_count }} Harm-Inventories are saved</h4>
        <h4 v-if="user.harms_count === 1">{{ user.harms_count }} Harm-Inventoy is saved</h4>
        <h4 v-else="user.harms_count < 1">I have NO! Fourth Step Harm-Inventory saved yet.</h4>
      </div>


      <div>
        <h4 v-if="user.fears_count > 1">{{ user.fears_count }} Fears-Inventories are saved. </h4>
        <h4 v-if="user.fears_count === 1">{{ user.fears_count }} Fear-Inventory is saved. </h4>
        <h4 v-if="user.fears_count < 1">I have NO! Fourth Step Fear-Inventory saved yet.</h4>
      </div>
        <br>
        <br>
        <br>

     <h2>Total of my Tenth-Step-Inventories saved in here!</h2>
        
      <div>
        <h4 v-if="user.tenth_count > 1">I have {{ user.tenth_count }} 10th steps saved </h4>
        <h4 v-if="user.tenth_count === 1">I have {{ user.tenth_count }} 10th step saved </h4>
        <h4 v-else="user.tenth_count < 1">I have NO 10th step saved yet.</h4>
      </div>
       

      <router-link v-bind:to="'/users/' + user.id + '/edit'">
        <button class="create-button">Edit my profile</button>
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