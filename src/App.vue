<template>
  <div id="app">

    <div>
      

      <!-- Header Starts -->
        <header class="main-header parallax">
        <!-- Topbar Starts -->
          <div class="topbar d-xs-none d-sm-none d-lg-block">
          <!-- Nested Container Starts -->
            <div class="container clearfix text-xs-center text-sm-center text-md-left">
              <p class="float-md-left">Recovery is our theme!</p>
              <ul class="list-unstyled list-inline float-md-right text-md-right">
                <li class="list-inline-item"><a href="mailto:care@yourhosptialsname.com">
                  <i class="fa fa-envelope-o"></i>act.class.yh@gmail.com
                </a></li>
                <li class="list-inline-item"><i class="fa fa-phone"></i>Call Us: 1-224-999-0807</li>
              </ul>
            </div>
          <!-- Nested Container Ends -->  
          </div>
        <!-- Topbar Ends -->
        <!-- Navbar Starts -->
          <nav id="nav" class="navbar navbar-expand-lg">
          <!-- Nested Container Starts -->
            <div class="container">
            <!-- Navbar Brand & Toggler Starts -->
              <a href="index.html" class="navbar-brand">
                <img src="images/logo.png" alt="Medi Insurance" class="img-fluid img-center-sm">
              </a>
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls=".navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon fa fa-bars"></span>
              </button>
            <!-- Navbar Brand & Toggler Ends -->
            <!-- Navbar Collapse Starts -->
              <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav ml-auto">
                  
                  <li class="nav-item ">
                    <router-link class="nav-link" to="/">
                      Home
                    </router-link>
                  </li>

                  <li class="nav-item ">
                      <router-link class="nav-link" to="/addictions/">
                    Addiction
                    </router-link>
                  </li>


                  <li class="nav-item " v-if="isLoggedIn()">
                      <router-link class="nav-link" to="/fourth_steps/">
                    Fourth Steps
                    </router-link>
                  </li>

                  <li class="nav-item " v-if="isLoggedIn()">
                    <router-link class="nav-link" to="/step_works/">
                    Step Work
                    </router-link>
                  </li>

                  <li class="nav-item " v-if="isLoggedIn()">
                    <router-link class="nav-link" to="/users/show">
                    Profile
                    </router-link>
                  </li>


                  <li  v-if="isLoggedIn()">
                    <router-link  to="/logout"><button class=" nav-item active nav-link" >Logout</button>
                    </router-link>
                  </li>


                  <li class="nav-item " v-if="!isLoggedIn()">
                    <router-link class="nav-link" to="/login">Login
                    </router-link>
                  </li>

                  
                  <li  v-if="!isLoggedIn()">
                    <router-link  to="/signup"><button class=" nav-item active nav-link" >Sign Up</button>
                    </router-link>
                  </li>

                              
                  <!-- <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
                      Blog
                    </a>
                    <ul class="dropdown-menu flat" role="menu">
                      <a class="dropdown-item" href="blog.html">Blog</a>
                      <a class="dropdown-item" href="blog-single.html">Blog Single Post</a>
                    </ul>
                  </li> -->

                  
                </ul>
              </div>
            <!-- Navbar Collapse Ends -->
            </div>
          <!-- Nested Container Ends -->
          </nav>
        <!-- Navbar Ends -->
        <!-- Page Heading Starts -->
          <div class="container">

            <h1 class="page-heading text-xs-center text-sm-center text-md-left"><strong>My-Step-Work-Recovery-App!</strong></h1>
          </div>
        <!-- Page Heading Ends -->
        </header>
        <br>
      <!-- Header Ends -->

    </div>

   <router-view/>

   <br>
   <br>

    <!-- Main Container Ends -->
    <!-- Footer Top Starts -->
      <div class="footer-top">
      <!-- Nested Container Starts -->
        <div class="container text-xs-center text-sm-center text-md-left">
        <!-- Nested Row Starts -->
          <div class="row">
         
          

          <!-- Newsletter Col Starts -->
            <div class="col-lg-4 col-sm-12 newsletter-block">
            <!-- Title Starts -->
              
            <!-- Title Ends -->
              
                    
                <router-link style="color: white; height: 45px " class="btn btn-block btn-main flat animation" to="/home">
                 Back to home page</router-link> 
              </form>
            </div>
          <!-- Newsletter Col Ends -->
          </div>
        <!-- Nested Row Ends -->
        </div>
      <!-- Nested Container Ends -->  
      </div>
    <!-- Footer Top Ends -->
    <!-- Copyright Starts -->
      <footer class="copyright">
      <!-- Nested Container Starts -->
        <div class="container clearfix text-xs-center text-sm-center text-md-left">
        <!-- Copyright Text Starts -->
          <p class="float-md-left">&copy; Copyright 2019. All Rights Reserved By <span>My-Step-Work-Recovery-App</span></p>
        <!-- Copyright Text Ends -->
        <!-- Links Starts -->
          <ul class="list-unstyled list-inline float-md-right text-md-right animation">
            <li class="list-inline-item"><a href="#">Terms Of Services</a></li>
            <li class="list-inline-item"><a href="#">Privacy</a></li>
            <li class="list-inline-item"><a href="#">Contact Us</a></li>
          </ul>
        <!-- Links Ends -->
        </div>
      <!-- Nested Container Ends -->
      </footer>



      


 
  </div>
</template>





<script>
import axios from "axios";
export default {
  data: function() {
    return {
      username: localStorage.getItem('username'),
      user: {}
    };
  },
  created: function() {
    axios.get("/api/users/me").then(response => {
      this.user = response.data;
      console.log(this.user);
    });
  },
  methods: {
    isLoggedIn: function() {
      if (localStorage.getItem('jwt')) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
