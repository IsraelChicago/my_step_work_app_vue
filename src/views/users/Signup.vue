<template>
  <div class="signup">
    <br><br><br>

    <div class="home-intro-info-box-wrap">
        <!-- Nested Container Starts -->
          <div class="container text-xs-center text-sm-center text-md-left" >
          <!-- Home Intro Info Box Starts -->
            <div class="home-intro-info-box">

    
      <section class="section-area info-section blue text-center">
      <!-- Nested Container Starts -->
        <div class="container">
          <h2 class="style-1 text-weight-light text-lite-color"><strong>Sign-Up Here</strong></h2><br>
          <h4 class="text-weight-light text-lite-color">Recovery is right around the corner</h4>
          
        </div>
      <!-- Nested Container Ends -->
      </section>

      <!-- Appointment Section Starts -->
    <section class="section-area lite appointment-section">
    <!-- Nested Container Starts -->
      <div class="container">
        
      <!-- Form Starts -->
        <form v-on:submit.prevent="submit()" class="appointment-form">

          <ul>
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
          </ul>

        <!-- Nested Row Starts -->
          <div class="row">
          <!-- Name Field Starts -->
            <div class="col-md-6 col-sm-12">
              
              <div class="form-group has-feedback">
                <label for="name" class="sr-only">Your Name: </label>
                <input type="text" v-model="name" class="form-control animation" name="name" id="name" required="required" placeholder="Your Name">
                <span class="fa fa-user form-control-feedback" aria-hidden="true"></span>
              </div>
            </div>

            <div class="col-md-6 col-sm-12">
              <div class="form-group has-feedback">
                <label for="username" class="sr-only">Userame: </label>
                <input type="text" v-model="username" class="form-control animation" name="name" id="name" required="required" placeholder="Username">
                <span class="fa fa-user form-control-feedback" aria-hidden="true"></span>
              </div>
            </div>
          </div>
          <br>
          <!-- Name Field Ends -->
          <div class="row">
          <!-- Email Field Starts -->
            <div class="col-md-6 col-sm-12">
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
            <div  class="col-md-6 col-sm-12">
              <div class="form-group has-feedback">
                <label for="email" class="sr-only">Password: </label>
                <input v-model="password" type="password" class="form-control animation"  name="password"  required="required" placeholder="Password:">
                
              </div>
            </div>
          <!-- Password Field Ends -->
          <!-- Password Conf Field Starts -->

          <div  class="col-md-6 col-sm-12">
            <div class="form-group has-feedback">
              <label for="email" class="sr-only">Password confirmation: </label>
              <input v-model="passwordConfirmation" type="password" class="form-control animation"  name="password"  required="required" placeholder="Password Confirmation:">
              <br>
            </div>
          </div>
          
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

</div></div></div>
    <section class="section-area lite appointment-section">
      
      <br>
      <br>
      
        
      <h4 class="text-spl-color text-center text-weight-normal">
        If you are already a:</h4> <br>
        

      
       <h3 class="text-center"><em><strong>My-Step-Work-Recovery-App </strong></em> user</h3> <br>
       <h4 class="text-spl-color text-center text-weight-normal">You can Login below
        <br>
        <br>
        <br>
        <br>
      </h4>
      
      
      <router-link v-bind:to="'/login'">
      <div class="col-12 text-center">
        <input type="submit" class="btn btn-main btn-main:hover"  value="Go to Login">
      </div>
      </router-link>
    </section>
    </div>






  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        user_name: this.username,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>