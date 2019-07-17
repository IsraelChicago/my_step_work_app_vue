

<template>
  <div class="login">

    
        
        
      

      <!-- Appointment Section Starts -->
    <section class="section-area lite appointment-section">
      <div class="container">

        <h2 class="text-spl-color text-center text-weight-normal" >Login Here</h2><br>
        
        <form v-on:submit.prevent="submit()" class="appointment-form">

          <ul>
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
          </ul>

    
          <br>
          <!-- Name Field Ends -->
          <div class="row">
          <!-- Email Field Starts -->
            <div class="col-md-12 col-sm-12">
              <div class="form-group has-feedback">
                <label for="email" class="sr-only">E-mail Address: </label>
                <input v-model="email" type="text" class="form-control animation" name="email" id="email" required="required" placeholder="E-mail Address">
                <span class="fa fa-envelope form-control-feedback" aria-hidden="true"></span>
              </div>
            </div>
          </div>
          <!-- Email Field Ends -->
          <br>
          <br>

          <!-- Password Field Starts -->
          <div class="row">
            <div  class="col-md-12 col-sm-12">
              <div class="form-group has-feedback">
                <label for="email" class="sr-only">Password: </label>
                <input v-model="password" type="password" class="form-control animation"  name="password"  required="required" placeholder="Password:">
                
              </div>
            </div>
          <!-- Password Field Ends -->
          <!-- Password Conf Field Starts -->

          
          
            <div class="col-12 text-center">
              <input type="submit" class="btn btn-main animation" value="Create Account">
            </div>

            <br>
            <br>
          </div>
        <!-- Nested Row Ends -->
        </form>




      <!-- Form Ends -->
      </div>
    <!-- Nested Container Ends -->
    </section>
<br>
    <section class="section-area lite appointment-section">
      
      
      <h4 class="text-spl-color text-center text-weight-normal">
        If you are already a <em><strong> My-Step-Work-Recovery-App  </strong></em> user You can Login here
        <br>
        <br>
      </h4>
      
      <router-link v-bind:to="'/login'">
      <div class="col-12 text-center">
        <input type="submit" class="btn btn-main animation" value="Login">
      </div>
      </router-link>
    </section>
    </div>




<!-- <div class="container">
  <form v-on:submit.prevent="submit()">
    <h1>Login</h1>
    <br>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
    <div class="form-group">
      <label>Email:</label>
      <input type="email" class="form-control" v-model="email">
    </div>
    <br>
    <div class="form-group">
      <label>Password:</label>
      <input type="password" class="form-control" v-model="password">
    </div>
    <br>
        <br>
        <input type="submit" class="button-input" value="Submit">
        <br>
        <br>
        

        <br>
        <br>
        

        <br>
        <br>
      </form>


      <h3>
        If you are a new user <br> Please sign up
      </h3>

      <router-link v-bind:to="'/signup'">
        <button 
         style="background-color: yellow;"><h4>Signup</h4></button>
      </router-link>
      
    </div> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>
