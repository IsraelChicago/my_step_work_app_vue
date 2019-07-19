<template>
  <div class="addictions-index">
    <div>



<div style="width: 90%">
      <!-- Home Intro Info Box Wrap Starts -->
        <div class="home-intro-info-box-wrap">
        <!-- Nested Container Starts -->
          <div class="container text-xs-center text-sm-center text-md-left" >
          <!-- Home Intro Info Box Starts -->
            <div class="home-intro-info-box" style="background-color: lightblue ">
              <h1 style="color: darkblue"class="text-weight-light"> <strong style="color: darkred">No more shame! <br> </strong> <span  class="text-weight-bold" > RECOVER TODAY!</span></h1>
              <div class="row">
                <div class="col-md-8 col-sm-12">
                  <h5 style="color: black">Enough is enough!</h5> <h6 style="color: darkred"><br>
How much longer will I wallow in pain and procrastinate showing up for my recovery? <br> Obviously shame is ego based, so unfortunately it has the power to kill, if I allow it to. I see here how many recovery groups are out there! Millions are getting the promises of Recovery. I am choosing now to be one of them.  </h6>
                </div>
                
                <div class="col-md-4 col-sm-12 text-center">

                  <router-link v-bind:to="'/login'" class="btn btn-outline-1 animation"><h4>Login now</h4></router-link>
                </div>
              </div>
            </div>
          <!-- Home Intro Info Box Ends -->
          </div>
        <!-- Nested Container Ends -->
        </div>
        </div>
      <!-- Home Intro Info Box Wrap Ends -->


<br>



          
            
          <!-- Content Ends -->
          <!-- Spacer Starts -->
            <div class=" container spacer-small"></div>
          <!-- Spacer Ends -->
          <!-- Gallery Starts -->
            <ul class="list-unstyled row text-center" >
            <!-- Gallery #1 Starts -->  
              <li v-if="addiction.all_types_welcome " v-for="addiction in addictions" style="  height:  575px " class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div  style=" border: solid darkgrey 1px; height:  390px "class="gallery-item-1 br-3">
                  <h6 style="background-color: lightblue; color: lightblue">.</h6>
                  
                <h6 style="color: darkgrey" >Addictive Behaivior</h6>
                  
                  
                  <h5 style="color: red" class="text-weight-bold ">All Types Welcome</h5>

                  

                  <h6 style="background-color: lightblue; color: lightblue">.</h6>
              
                  <div class="gallery-item-1-caption">
                    <h3 class="text-brand-color text-uppercase text-weight-bold" style="color: black">{{ addiction.title }} </h3>
                    <br>
                    <br>

                    <img style=" height:  100px; background-color: lightgrey" v-bind:src="addiction.logo_url" alt="No image yet" class="img-fluid img-center animation br-3">
                    <br>
                    
                    <br>
                         
                    
                  </div>
                  <div class=" text-center" >
                  <br>
                  
                  
                </div>

                  
                </div>
                
                
                  <div class=" text-center" style="background-color: darkgrey">
                    <br>
                      <router-link style="color: darkblue" v-bind:to="'/addictions/' + addiction.id" class="btn btn-outline-1 animation">Click here for more info</router-link>

                      <br>
                      <br>
                    </div>
              </li>
            
            </ul>
          <!-- Gallery Ends -->
              </div>
        



                
              























   
      
     


      
          
       
          </div>
        <!-- Nested Container Ends -->
       </section>
      </div>
    </div>







    
</template>

<style>
 
</style>

<script>
import axios from "axios";


export default {
  
  data: function() {
    return {
      
      addictions: []
      
    };
  },
  created: function() {
    axios.get("/api/addictions").then(response => {
      this.addictions = response.data;
      console.log(this.addictions);
    });
  }
};
</script>