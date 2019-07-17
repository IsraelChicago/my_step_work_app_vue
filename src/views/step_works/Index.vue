<template>
  <div class="step-works-index">
    <div>
        <!-- Home Gallery Section Starts -->
      <section class="home-gallery-section parallax">
          <!-- Nested Container Starts -->
        <div class="container text-center">
            <!-- Heading Starts -->
          <h1 class="heading-2 text-center text-weight-light">
            <strong>
              My work on each step:
            </strong> 
          </h1>
          <br>
          <br>
          <br>

            <!-- Heading Ends -->
             <!-- Nested Row Starts -->
          <div class="row">
               <!-- Gallery #1 Starts -->
            <div v-for="stepWork in stepWorks"> 
              <!-- <h5> {{ addiction.title }} </h5> -->
              <!-- <h6> {{ addiction.addiction_family }} </h6> -->
              <div class="col-lg-14 col-md-12 col-sm-12">
                <div class="home-gallery-item">
                  <div class="hover-content">
                    <div class="container text-center animation-1" > 
                      <h1>.</h1>
                      <br>
                      
                      <h3 style="color: black">  <strong>Here is My-Work on</strong></h3>
                      <br>
                      <h2>Step: </h2>

                      <h1><strong style="color: black">{{ stepWork.step }}</strong></h1>
                      <h6 >___________________</h6>
                      <br>

                        <!-- <img v-bind:src="addictions.background_url" alt="" > -->
                    </div>
                    <div class="overlay animation">
                      <br>
                      

                      <h5 >It works when you work it!</h5>
                       
                      <h4>So</h4>
                      <h3>WORK IT! </h3>
                      <h4>Because </h4>
                      <h3>"YOU"</h3> 
                      <h4>are Worth it!</h4>
                      <br>
                      <div class="zoom animation"> 
                     <router-link  v-bind:to="'/step_works/' + stepWork.id"><button>
                Click here to edit this work:</button>
              </router-link> 
                      </div>
                      
                    
                    </div>
                  </div>
                </div>
              </div>
               <h6 style="color: black">Click above to see your work.</h6>
               <br>
               <br>
            </div>
          </div>     
        </div>

       

      </section>
    </div>
      
<br>
<br>




            <div class="container text-center" >                            
                               
           <router-link class="btn btn-main text-center animation" v-bind:to="'/step_works/new'">
             <button class="create-button">
              <br>
              <br>
               <h2>
                 <strong>
                   CLICK ME! 
                 </strong>
               </h2>
                 <br>
                 
                  <h3><small>
                   To start writing  
                 </small>
                 <br> 
                 <strong>
                 a new </strong></h3>
                 <h1><strong>"STEP WORK"</strong></h1>
                
               </h3>
             </button>
           </router-link> 
           </div>                    
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
      
      stepWorks: []
      
    };
  },
  created: function() {
    axios.get("/api/step_works").then(response => {
      this.stepWorks = response.data;
      console.log(this.stepWorks);
    });
  }
};
</script>