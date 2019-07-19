<template>
  <div class="fourth-steps-index"> 

<div class="text-center">

 <router-link v-bind:to="'/fourth_steps/new'">
   <button class="btn btn-main flat animation" >
     <h6 style="background-color: green; padding: 20px">
       <strong>
         Click me! 
       </strong>
       <br>
        <small>
         To start writing a New
       </small>
       <br> 
       <strong>
       "Fourth Step inventory"<br>
       </strong>
       
     </h6>
   </button>
 </router-link>
 </div>
 <br><br><br><br>
    <div class="home-intro-info-box-wrap">
        <!-- Nested Container Starts -->
          <div class="container text-xs-center text-sm-center text-md-left" >
          <!-- Home Intro Info Box Starts -->
            <div class="home-intro-info-box">

        <div class="container" style="background-color: lightblue">
          <br>

    <div style="background: red; width: 65%;border: 5px solid; border-color: black; border-radius: 20px; margin: 20px auto ;">
          
          <h2 style=" margin: 25px 55px 30px 55px; color: white; ">All <strong>"RESENTMENT" - </strong>-Inventories</h2>
          
    </div>
    <br>



          <div class="home-plan-info-tabs-wrap">
          <!-- Nav Tabs Starts -->
              <ul class="nav nav-tabs home-plan-info-tabs text-center animation">


                <!-- aaaa -->
                
                  <li style="height: 150px;"v-for="fourthStep in fourthSteps">

                  <div v-if="fourthStep.resentment" style="height: 100px; text-align: left;
                  width: 100%; " class=" nav-item">

                    <div style="background-color: lightyellow ;border-color: black; border-width: 2px;    padding: 18px;"class="nav-link active show">
                      
                        <h4> <strong>{{ fourthStep.who }} </strong></h4>
                        <router-link  v-bind:to="'/fourth_steps/' + fourthStep.id"><button>
                                  See this full fourth step info:</button>
                                </router-link>
                    </div>

                  </div>
                          
                  </li>
                </ul>
              </div>
            </div>
          </div></div></div>
                  <!-- bbbb -->

    <div>

<div style="clear: both;"><h6>.</h6> 
</div>
</div>
<br><br><br><br><br><br><br>

<div class="home-intro-info-box-wrap">
    <!-- Nested Container Starts -->
      <div class="container text-xs-center text-sm-center text-md-left" >
      <!-- Home Intro Info Box Starts -->
        <div class="home-intro-info-box">
       
        <div class="container" style="background-color: lightblue">
          <br>

    <div style="background: blue; border: 5px solid; border-color: black; border-radius: 20px; width: 65%; margin: 20px auto;">
          
          <h2 style=" margin: 25px 55px 30px 55px; color: white; ">All <strong>"HARM" - </strong>-Inventories</h2>
          
    </div>
    <br>



          <div class="home-plan-info-tabs-wrap">
          <!-- Nav Tabs Starts -->
              <ul class="nav nav-tabs home-plan-info-tabs text-center animation">


                <!-- aaaa -->
                
                  <li style="height: 150px;"v-for="fourthStep in fourthSteps">

                  <div v-if="fourthStep.harm" style="height: 100px; text-align: left;
                  width: 100%; " class=" nav-item">

                    <div style="background-color: lightyellow ;border-color: black; border-width: 2px;    padding: 18px;"class="nav-link active show">
                      
            <h4> <strong>{{ fourthStep.who }} </strong></h4>
            <router-link  v-bind:to="'/fourth_steps/' + fourthStep.id"><button>
                      See this full fourth step info:</button>
                    </router-link>
        </div>

          </div>
                  
          </li>
        </ul>
      </div>
    </div>
          <!-- bbbb --></div></div></div>

          <div>

<div style="clear: both;"><h6>.</h6> 
</div>
</div>
<br><br><br><br><br><br><br>



          <div class="home-intro-info-box-wrap">
              <!-- Nested Container Starts -->
                <div class="container text-xs-center text-sm-center text-md-left" >
                <!-- Home Intro Info Box Starts -->
                  <div class="home-intro-info-box">
                 
                  <div class="container" style="background-color: lightblue">
                    <br>

    


                          <div class="container">

                      <div style="background: gold; border: 5px solid; border-color: black; border-radius: 20px; width:75%;margin: 20px auto;">
                            
                            <h2 style=" margin: 25px 55px 30px 55px; color: darkred; ">All <strong>FEAR - </strong>Inventories</h2>
                            
                      </div>
                      <br>



      <div class="home-plan-info-tabs-wrap">
      <!-- Nav Tabs Starts -->
          <ul class="nav nav-tabs home-plan-info-tabs text-center animation">


            <!-- aaaa -->
            
              <li style="width: 32%;  height: 150px;"v-for="fourthStep in fourthSteps">


              <div v-if="fourthStep.fear" style="height: 100px; text-align: left;
              width: 100%; " class=" nav-item">

                <div style="background-color: lightyellow ; width: 100%; border-color: black;height: 100px; border-width: 2px;    padding: 18px;"class="nav-link active show">
                  
                    <h4> <strong>{{ fourthStep.what }} </strong></h4>
                    <router-link  v-bind:to="'/fourth_steps/' + fourthStep.id"><button>
                              See this full fourth step info:</button>
                            </router-link>

                </div>
                
              </div>
                      
              </li>
            </ul>
          </div>
        </div>







 </div></div></div><br><br><br>

    <div>

<div style="clear: both;"><h6>.</h6> 
</div>


      

     
      <br><br>

      
     <div class="text-center">

      <router-link v-bind:to="'/fourth_steps/new'">
        <button class="btn btn-main flat animation" >
          <h4 style="background-color: green; padding: 20px">
            <br><strong>
              Click me! 
            </strong>
            <br>
             <small>
              To start writing a New 
            </small>
            <br> 
            <strong>
            "Fourth Step inventory"<br>
            </strong>
            <br>
          </h4>
        </button>
      </router-link>
      </div>
    </div>
</div>







    </div>
  </div>
</template>

<style>
 
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";


export default {

   mixins: [Vue2Filters.mixin],
  
  data: function() {
    return {
      
      fourthSteps: []
      
    };
  },
  created: function() {
    axios.get("/api/fourth_steps").then(response => {
      this.fourthSteps = response.data;
      console.log(this.fourthSteps);
    });
  }
};
</script>