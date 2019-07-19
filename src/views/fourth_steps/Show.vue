<template>
  <div class="fourth-steps-show">
    
<!-- AAAAAAAA -->
<br><br>
 
    <div class="container">

<div style="background: darkblue; border: 5px solid; border-color: black; border-radius: 20px; margin: 40px 30px 60px 0px;">
      
      <h2 style=" margin: 25px 55px 30px 55px; color: white; "><strong>My inventory - </strong> Part A</h2>
      
</div>
<br>



      <div class="home-plan-info-tabs-wrap">
      <!-- Nav Tabs Starts -->
          <ul class="nav nav-tabs home-plan-info-tabs text-center animation">


            <!-- aaaa -->
              <li style="height: 900px; text-align: left;
              width: 37%; " class="\ nav-item">
              <div style=" width: 180px;border-style: solid; border-width:   2px; border-color: blue; border-radius: 50px; background-color: coral ">
              <h5 style="color: white; margin: 7px 0px 11px 20px"><strong>Column one</strong></h5>
              
              </div><br>

                <div style="background-color: lightyellow ; height: 600px; padding: 18px;"class="nav-link active show">
                  <div v-if="!fourthStep.fear">
                    <h5 style="background-color: lightblue; text-align: left; border-radius: 20px; color: blue; padding: 20px; margin: 20px 150px 30px 5px"> <strong >Who?</strong></h5><br>
                    <h4> <strong>{{ fourthStep.who }} </strong></h4>
                    <br>
                    <br>
                  </div>


                  <div v-if="fourthStep.fear">
                    <h5 style="background-color: lightblue; border-radius: 20px; color: blue; text-align: left; padding: 20px; margin: 20px 150px 30px 5px"> <strong >What?</strong></h5><br>
                    <h4> <strong>{{ fourthStep.what }}</strong> </h4>
                    <br>
                    <br>
                  </div>
                </div>
                      
              </li>
              <!-- bbbb -->



              <li style=" text-align: left; height: 900px;
              width: 37%; " class="\ nav-item">
              <div style=" width: 180px;border-style: solid; border-width:   2px; border-color: blue; border-radius: 50px; background-color: coral ">
              <h5 style="color: white; margin: 7px 0px 11px 20px"><strong>Column Two</strong></h5>
              
              </div><br>

                <div style="padding: 18px; height: 600px; background-color: lightyellow ; "class="nav-link active show">
                  <div v-if="!fourthStep.fear">
                    <h5 style="text-align: left; background-color: lightblue; border-radius: 20px; color: blue; padding: 20px; margin: 20px 150px 30px 5px"> <strong >What?</strong></h5>
                    <h5 style="padding: 10px"> {{ fourthStep.what }} </h5>
                    <br>
                    <br>
                  </div>


                  <div v-if="fourthStep.fear">
                    <h5 style="text-align: left; background-color: lightblue; border-radius: 20px; color: blue; padding: 20px; margin: 20px 150px 30px 5px"> <strong >Why?</strong></h5>
                    <h5 style="padding: 10px"> {{ fourthStep.why }} </h5 >
                    <br>
                    <br>
                  </div>
                </div>
                      
              </li>

              <!-- cccc -->

              <li style=" text-align: left; height: 900px;
              width: 21%; " class="\ nav-item">
              <div style=" width: 180px;border-style: solid; border-width:   2px; border-color: blue; border-radius: 50px; background-color: coral ">
              <h5 style="color: white; margin: 7px 0px 11px 20px"><strong>Column Three</strong></h5>
              
              </div><br>

                <div style="padding: 18px; height: 600px; background-color: lightyellow ; "class="nav-link active show">
                  <div >
                    <h5 style="text-align: left; background-color: lightblue; border-radius: 20px; color: blue; padding: 20px; margin: 20px 30px 30px 5px"> <strong >Affects my?</strong></h5>
                    <h5 style="padding: 10px"> {{ fourthStep.what }} </h5>
                    
                   
                    
                    <p v-if="fourthStep.self_esteem"> Self Esteem </p>
                    <p v-if="fourthStep.pocket_book"> Pocket Book </p>
                    <p v-if="fourthStep.ambitions"> Ambitions </p>
                    <p v-if="fourthStep.personal_relationships"> Personal Relationships </p>
                    <p v-if="fourthStep.physical_security"> Physical Security </p>
                    <p v-if="fourthStep.emotional_security"> Emotional Security </p>
                    <p v-if="fourthStep.sex_relationships"> Sex Relationships </p>


                    <br>
                    <br>
                  </div>
                </div> 
              </li>
          </ul>
        </div>


<div style="clear: both"></div>

<br>



<!-- BBBBBBBBBB -->

    <div class="container">
      



      
<div style="background: darkblue; border: 5px solid; border-color: black; border-radius: 20px; margin: 40px 30px 60px 0px;">
      
      <h2 style=" margin: 25px 55px 30px 55px; color: white; "><strong>My inventory - </strong> Fourth Step</h2>
      
</div>

<br>

      <div class="home-plan-info-tabs-wrap">
      <!-- Nav Tabs Starts -->
          <ul class="nav nav-tabs home-plan-info-tabs text-center animation">


            <!-- aaaa -->
              <li style="height: 750px; text-align: left;
              width: 75%; " class="\ nav-item">
              <div style=" width: 300px;border-style: solid; border-width:   2px; border-color: blue; border-radius: 50px; background-color: coral ">
              <h5 style="color: white; margin: 7px 0px 11px 20px"><strong>Where was I Selfish?</strong></h5>
              
              </div><br>

                <div style="height: 600px; padding: 18px;"class="nav-link active show">
                  <div>
                    
                    <h5 style="line-height: 1.6em" > {{ fourthStep.selfish }} </h5>
                    <br>
                    <br>
                  </div>
                </div>
                      
              </li>



              <!-- bbbb -->

              <li style="height: 750px; text-align: left;
              width: 75%; " class="\ nav-item">
              <div style=" width: 300px;border-style: solid; border-width:   2px; border-color: blue; border-radius: 50px; background-color: coral ">
              <h5 style="color: white; margin: 7px 0px 11px 20px"><strong>Where was I Dishonest?</strong></h5>
              
              </div><br>

                <div style="height: 600px; padding: 18px;"class="nav-link active show">
                  <div>
                    
                    <h5 style="line-height: 1.6em" > {{ fourthStep.dishonest }} </h5>
                    <br>
                    <br>
                  </div>
                </div>
                      
              </li>

              

              <!-- cccc -->

              <li style="height: 750px; text-align: left;
              width: 75%; " class="\ nav-item">
              <div style=" width: 300px;border-style: solid; border-width:   2px; border-color: blue; border-radius: 50px; background-color: coral ">
              <h5 style="color: white; margin: 7px 0px 11px 20px"><strong>Where was I Self Seeking?</strong></h5>
              
              </div><br>

                <div style="height: 600px; padding: 18px;"class="nav-link active show">
                  <div>
                    
                    <h5 style="line-height: 1.6em" > {{ fourthStep.self_seeking }} </h5>
                    <br>
                    <br>
                  </div>
                </div>
                      
              </li>




              <!-- dddd -->

              <li style="height: 750px; text-align: left;
              width: 75%; " class="\ nav-item">
              <div style=" width: 300px;border-style: solid; border-width:   2px; border-color: blue; border-radius: 50px; background-color: coral ">
              <h5 style="color: white; margin: 7px 0px 11px 20px"><strong>Where was I Frightened?</strong></h5>
              
              </div><br>

                <div style="height: 600px; padding: 18px;"class="nav-link active show">
                  <div>
                    
                    <h5 style="line-height: 1.6em" > {{ fourthStep.frightened }} </h5>
                    <br>
                    <br>
                  </div>
                </div>
                      
              </li>





              <!-- eeee -->

              <li v-if="fourthStep.fear "style="height: 750px; text-align: left;
              width: 75%; " class="\ nav-item">
              <div style=" border-style: solid; border-width:   2px; border-color: blue; border-radius: 50px; background-color: coral ">
              <h5 style="color: white; margin: 7px 0px 11px 20px"><strong>How did fear solve this issue in the past?   <br>How did fear cause an Opposite effect?</strong></h5>
              
              </div><br>

                <div style="height: 600px; padding: 18px;"class="nav-link active show">
                  <div>
                    
                    <h5 style="line-height: 1.6em" > {{ fourthStep.fear_solved }} </h5>
                    <br>
                    <br>
                  </div>
                </div>
                      
              </li>


              
              
          </ul>



        </div>


<div style="clear: both"></div>

<br>

</div>

<!-- DDDDDDDDDD -->

    <div class="container">
      



      
<div style="background: darkblue; border: 5px solid; border-color: black; border-radius: 20px; margin: 40px 30px 60px 0px;">
      
      <h2 style=" margin: 25px 55px 30px 55px; color: white; "><strong>My inventory - </strong> Fourth Step</h2>
      
</div>

<br>

      <div class="home-plan-info-tabs-wrap">
      <!-- Nav Tabs Starts -->
          <ul class="nav nav-tabs home-plan-info-tabs text-center animation">


            <!-- aaaa -->
              <li style="height: 750px; text-align: left;
              width: 75%; " class="\ nav-item">
              <div style=" width: 350px;border-style: solid; border-width:   2px; border-color: blue; border-radius: 50px; background-color: lightblue ">
              <h5 style="color: darkblue; margin: 7px 0px 11px 20px"><strong>How can I now be Selfless? </strong> <br> <small>Opposite of Selfish</small></h5>
              
              </div><br>

                <div style="height: 600px; padding: 18px; background-color: darkgreen"class="nav-link active show">
                  <div>
                    
                    <h5 style="color: white;line-height: 1.6em" > {{ fourthStep.selfless }} </h5>
                    <br>
                    <br>
                  </div>
                </div>
                      
              </li>



              <!-- bbbb -->

              
              <li style="height: 750px; text-align: left;
              width: 75%; " class="\ nav-item">
              <div style=" width: 350px;border-style: solid; border-width:   2px; border-color: blue; border-radius: 50px; background-color: lightblue ">
              <h5 style="color: darkblue; margin: 7px 0px 11px 20px"><strong>How can I now be Rigorous Honest? </strong> <br><small>Opposite of Dishonesty</small></h5>
              
              </div><br>

                <div style="height: 600px; padding: 18px; background-color: darkgreen"class="nav-link active show">
                  <div>
                    
                    <h5 style="color: white;line-height: 1.6em" > {{ fourthStep.rigorous_honesty }} </h5>
                    <br>
                    <br>
                  </div>
                </div>
                      
              </li>

              

              <!-- cccc -->


              <li style="height: 750px; text-align: left;
              width: 75%; " class="\ nav-item">
              <div style=" width: 350px;border-style: solid; border-width:   2px; border-color: blue; border-radius: 50px; background-color: lightblue ">
              <h5 style="color: darkblue; margin: 7px 0px 11px 20px"><strong>How can I now be "HP seeking? </strong> <br><small>Opposite of Self Seeking</small></h5>
              
              </div><br>

                <div style="height: 600px; padding: 18px; background-color: darkgreen"class="nav-link active show">
                  <div>
                    
                    <h5 style="color: white;line-height: 1.6em" > {{ fourthStep.rigorous_honesty }} </h5>
                    <br>
                    <br>
                  </div>
                </div>
                      
              </li>


              <!-- dddd -->

              <li style="height: 750px; text-align: left;
              width: 75%; " class="\ nav-item">
              <div style=" width: 470px;border-style: solid; border-width:   2px; border-color: blue; border-radius: 50px; background-color: lightblue ">
              <h5 style="color: darkblue; margin: 7px 0px 11px 20px"><strong>How can I now be settled in the hands of my HP? </strong> <br><small>Opposite of frightened</small></h5>
              
              </div><br>

                <div style="height: 600px; padding: 18px; background-color: darkgreen"class="nav-link active show">
                  <div>
                    
                    <h5 style="color: white;line-height: 1.6em" > {{ fourthStep.hp_serenity }} </h5>
                    <br>
                    <br>
                  </div>
                </div>  
              </li>
          </ul>
        </div>


<div style="clear: both"></div>

<br>
</div>






      
<div style="background: darkblue; border: 5px solid; border-color: black; border-radius: 20px; margin: 40px 30px 60px 0px;">
      
      <h2 style=" margin: 25px 55px 30px 55px; color: white; ">My inventory<strong> Was "SUCCESFULLY" compleated! </strong></h2>
      
</div>





      <div class="container text-center "> 

        <div id="fifth-done-show">
          <h4 v-if="fourthStep.fifth_done"> <strong> Great! </strong> <br> A <strong> "Fifth Step"</strong>  was successfully done. <br> What am I doing next for my recovery? </h4>
          <h4 v-if="!fourthStep.fifth_done"> I need to plan a time to complete a solid 5th step on this one? </h4>
        </div>
<br><br>

        <div id="eight-done-show">
          <h4 v-if="fourthStep.eight_done"> <strong> Great! </strong> <br> An <strong> "Eight Step"</strong>  was successfully done. <br> What am I doing next for my recovery? </h4>
          <h4 v-if="!fourthStep.eight_done"> I need to plan a time to complete a solid 8th step on this one? </h4>
        </div>
<br><br>
        <div id="ninth-done-show">
          <h3 v-if="fourthStep.ninth_done"> <strong> Great! </strong> <br> A <strong> "Ninth Step"</strong>  was successfully done. </h3>
          <h4 v-if="fourthStep.ninth_done">After a complete 9th step, I may feel great!</h4>
          <h4 v-if="!fourthStep.ninth_done"> I need to plan a time to complete a solid 9th step on this one? </h4>
        </div>

        <br><br>
        

        

        
        <div style="border-radius: 25px; background-color: lightblue">
          <div v-if="!fourthStep.free"> 
            <br>
            <h1>
              I DO NOT WANT TO MISS OUT! 
              
            </h1>
            <br>
            <h4>
              I have a promise that this work, if done right, will set me completely free! <br><br> At least free of this specific inventory item!!!
            </h4>
          </div>
        </div>
<br><br><div class="container text-center "> 
          <div style="border-radius: 25px; background-color: darkgreen;color:white;" v-if="fourthStep.free"> 
<br><br>

            <h3>
               "I WAS SET FREE!"
            </h3> 
            <h1><strong>
              GREAT! 
            </strong></h1> 

            <h3>
              I have received grace from my HP.
            </h3>
            <br><br><br>

            <h4><strong>
               "What a miraculous feeling of relief!"
            </strong></h4> 
            <h3>
              Keep on trudging the road to a happy destiny
            </h3>
<br><br>
          </div>
        </div>
        <br>
        <br><br>

        <router-link  v-bind:to="'/fourth_steps/' + fourthStep.id + '/edit'">
          <button class="btn btn-main flat animation"> Edit this Fourth Step</button>
        </router-link>
        <br>
        <br>
        <br>
        <router-link  v-bind:to="'/fourth_steps'">
          <button class="btn btn-main flat animation">Back to all fourth steps page</button>
        </router-link>
      </div>
    </div>
    <br>
    </div>
       
  </div>

</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      fourthStep: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/fourth_steps/" + this.$route.params.id).then(response => {
      this.fourthStep = response.data;
      console.log(this.fourthStep);
    });
  }
  
};
</script>