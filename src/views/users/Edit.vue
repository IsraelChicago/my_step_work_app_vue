<template>
  <div class="users-edit">
    <div>
      <form v-on:submit.prevent="submit()">
        <h1>Edit Profile</h1>

        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>


        <div>
          <label>Name:</label> 
          <input type="text" v-model="user.name">
        </div>

        <div>
          <label>Update Username:</label> 
          <input type="text" v-model="user.user_name">
        </div>
        <div>
          <label>Update Email:</label>
          <input type="email" v-model="user.email">
        </div>
        <div>
          <label>New Password:</label>
          <input type="password" v-model="user.password">
        </div>
        <div>
          <label>Password confirmation:</label>
          <input type="password" v-model="user.passwordConfirmation">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
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
  },
  methods: {
    submit: function() {
      var params = {
        name: this.user.name,
        email: this.user.email,
        user_name: this.user.user_name,
        password: this.user.password,
        password_confirmation: this.user.passwordConfirmation
      };
      axios
        .patch("/api/users/" + this.user.id, params)
        .then(response => {
          this.$router.push("/users/" + this.user.id)
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>

