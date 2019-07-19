<template>
  <div class="addictions-show">
    <div>

      <!-- TOP -->
      <div class="main-container alt container">
          <!-- Nested Row Starts -->
        <div class="row">
              <!-- Mainarea Starts -->
          <div class="col-md-8 col-sm-12">
                  <!-- Blog Post #1 Starts -->
            

            <article class="blog-post">

                      <!-- AAAAAA -->
                      
              
              <div class="blog-media">
                <h4 style="color: blue">The Recovery-Program of:</h4><br>

                <h1> {{ addiction.title }} </h1><br><br>
                <img style="background-color: lightgrey " v-bind:src="addiction.logo_url" alt="" class="img-fluid">
                <br><br>                  
              </div> 
              <h3 class="blog-title" style="color: blue">
                Reach out Today, for free recovery!
              </h3>       
              <ul class="blog-post-info list-unstyled list-inline">            
                <li class="list-inline-item">
                  <h6> <i class="fa fa-tag"></i>
                    {{ addiction.recovery_url }}
                  </h6>
                </li>
              </ul> 
            </article>




                      <!-- BBBBBB -->

                 
            <article style="background-color: lightgrey; padding: 25px" class="blog-post">
              <br>
              <div class="blog-media">
                <h2>
                  <strong style="color: red">
                    THE PROBLEM:
                  </strong>
                </h2>
              </div>
              <div class="blog-post-content">
                <h5 style="line-height: 1.6em">
                  {{ addiction.problem }}
                </h5>
                    
              </div>
            </article>
            <article class="blog-post">
            </article>


                      <!-- CCCCCC -->

                 
            <article style="background-color: lightgreen; padding: 25px" class="blog-post">
              <br>
              <div class="blog-media">
                <h2>
                  <strong style="color: darkgreen">
                    THE SOLUTION:
                  </strong>
                </h2>
              </div>
              <div class="blog-post-content">
                <h5 style="line-height: 1.6em">
                  {{ addiction.solution }}
                </h5>
                    
              </div>
            </article>
            <article class="blog-post">
            </article>           
          </div>


          <div class="col-md-4 col-sm-12">
            <div style="line-height: 1.5em; margin-left: 15px; background-color: black; color: white; padding: 25px; ">
              <h3 style="line-height: 1.5em;  background-color: white; color: black; padding: 15px; " class="side-heading-2 ">
                The <strong>Twelve-Steps </strong>
              </h3>
              <br>
              <h6>
                The Twelve-Steps of: 
              </h6>
              <h4>
                {{ addiction.title }} 
              </h4>
              <br>
              <br>
              <h5 style="line-height: 1.8em">{{ addiction.twelve_steps }}</h5>

              <div class="spacer-extra-small">
                
              </div>
            </div>
            <br>
          


          <div class="col-md-12 col-sm-12">
            <div style="line-height: 1.5em;  background-color: lightgrey; color: white; padding: 25px; ">
              <h3 style="line-height: 1.5em;  background-color: white; color: black;  padding: 15px" class="side-heading-2 ">
                My <strong>Choises </strong>
              </h3>
              <br>
              <h6>
                

              </h6>
              <h5 style="color: black">
                {{ addiction.recovery_url }} 
              </h5>
              <br><br>

              <a class="btn btn-main animation" >
                To {{ addiction.title }} Website
              </a>

              <br><br>
              <router-link class="btn btn-main animation" v-bind:to="'/addictions/'">
                Back to see all Addictions
              </router-link>

              

             
              <br>
              <br>
              <router-link class="btn btn-main animation" v-bind:to="'/signup/'">
                Signup
              </router-link>
              <br>
              <br>
              <router-link class="btn btn-main animation" v-bind:to="'/login/'">
                Login
              </router-link>
              <br>
              <br>
              

              <div class="spacer-extra-small">
                
              </div>
            </div>
            <br>
          </div>
        </div>


          <div class="col-md-12 col-sm-12">
            <div style="line-height: 1.5em; background-color: darkblue; color: white; padding: 25px; ">
              <h3 style="line-height: 1.5em;  background-color: white; color: darkblue; padding: 15px; " class="side-heading-2 ">
                The <strong>PROMISES </strong>of  <strong>{{addiction.title}}</strong> Recovery Program
              </h3>
              <br>
              
              
              <h6 style="line-height: 1.6em">{{ addiction.promises }}</h6>

              <div class="spacer-extra-small">
                
              </div>
            </div>
            <br>
          </div>



              

        </div>
          
     <br><br><br><br>
     <router-link style=" padding: 20px" class="btn btn-main animation" v-bind:to="'/addictions/'">
       Back to see all Addictions
     </router-link>

     
      </div>






      
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