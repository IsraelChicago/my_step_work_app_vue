<template> 
  <div class="fourth-steps-new">


</h5>              
    <form>

      <div>
          <div class="text-center" v-if="!newFourthStepTypeDone ">
            <br>
            <h1>
              New Fourth Step Inventory
            </h1>        
            <br>
          </div>
                  <br><br><br>

          <div class="home-intro-info-box-wrap">
                <!-- Nested Container Starts -->
            <div class="container text-xs-center text-sm-center text-md-left" >
                  <!-- Home Intro Info Box Starts -->
              <div class="home-intro-info-box" >

              <ul>
                <li v-for="error in errors">{{ error }}</li>
              </ul>


                <div class="type-of-fourth" v-if="!newFourthStepTypeDone">
          
                  <h1>
                    Type of Fourth step:
                  </h1>
                  <br>
                    <div>
                      <input @click="typeFourthStepR()" type="radio" name="type" v-model="newFourthStepResentment" v-bind:value="true">
                        Resentment inventory 
                        <br> 
                        <br> 
                      </input>
                    </div> 

                    <div>
                      <input @click="typeFourthStepH()" type="radio" name="type" v-model="newFourthStepHarm" v-bind:value="true">
                        Harm inventory
                        <br> 
                        <br> 
                      </input>
                    </div> 
             
                    <div> 
                      <input @click="typeFourthStepF()" type="radio" name="type" v-model="newFourthStepFear" v-bind:value="true">
                        Fear inventory
                      </input>
                    </div> 
                    <br>
                    <br>
                  </div>
                  <div class="type-of-fourth" v-if="!newFourthStepTypeDone">
                    <div v-if="newFourthStepResentment || newFourthStepFear || newFourthStepHarm">
                      <br>
                      <h3>Confirm Your selection below:</h3> 
                      <input type="radio" name="type-done" v-model="newFourthStepTypeDone" v-bind:value="true">
                    </div> 
                   
                  </div>
                </div>
              </div>
            </div>
                    <br><br>

     
        



              


       


              <div class="container">

          <div v-if="newFourthStepResentment || newFourthStepFear || newFourthStepHarm" style="background: darkblue; border: 5px solid; border-color: black; border-radius: 20px; margin: 40px 30px 60px 0px;">
                
                <h2 style=" margin: 25px 55px 30px 55px; color: white; "><strong>My inventory - </strong> Part A</h2>
                
          </div>
          <br>









          




                <div class="home-plan-info-tabs-wrap">
                <!-- Nav Tabs Starts -->
            <ul class="nav nav-tabs home-plan-info-tabs text-center animation">


                   <!-- AAAAAAAAAAAA -->
            <li style="height: 850px; 
                width: 37%; " class="nav-item">



                <!-- aaaaaaaaaaaaaaaaaaa -->
            <div v-if="newFourthStepTypeDone ">
              <div v-if="newFourthStepResentment ">

                <div style=" width: 35%;border-style: solid; border-width:   1px; border-color: blue; border-radius: 20px; background-color: coral ;margin: 0px 0px 15px 0px   ">

                  <h6 style="text-align: left; color: white; margin: 7px 0px 11px 18px">
                    <strong>Column One</strong>
                  </h6> 
                </div>


                <div>
                  <h4 style=" text-align: left; color: blue;  margin: 5px "> <strong >Who?</strong></h4>
                </div>


                <div style="background-color:lightblue; width: 95% ; height: 750px; padding: 10px;"class="text-left">

                  <textarea class="nav-link active show" style="width: 100% ; height: 100%; padding: 15px; font-size: 18px; line-height: 1.6em; background-color:lightyellow;" type="text" placeholder="Which person, place, thing, situation, or organization am I resenting?" v-model=" newFourthStepWho"></textarea>
                </div>

              </div>



              <!-- aaaaaaaaaaabbbbbbbbb-->





              <div v-if="newFourthStepHarm">
                <div style=" width: 35%;border-style: solid; border-width:   1px; border-color: blue; border-radius: 20px; background-color: coral ;margin: 0px 0px 15px 0px   ">

                  <h6 style="text-align: left; color: white; margin: 7px 0px 11px 18px">
                    <strong>Column One</strong>
                  </h6> 
                </div>
                <div>

                <h4 style=" text-align: left; color: blue;  margin: 5px "> <strong >Who?</strong></h4>
                </div>


                <div style="background-color:lightblue; width: 95% ; height: 750px; padding: 10px;"class="text-left">

                  <textarea class="nav-link active show" style="width: 100% ; height: 100%; padding: 15px; font-size: 18px; line-height: 1.6em; background-color:lightyellow;" type="text" placeholder="What specifically are the details about, how I harmed?:" v-model=" newFourthStepWho"></textarea>
                </div>
              </div>






              <!-- aaaaaaaaaaccccccccccccc-->





              <div v-if="newFourthStepFear">
                <div style=" width: 35%;border-style: solid; border-width:   1px; border-color: blue; border-radius: 20px; background-color: coral ;margin: 0px 0px 15px 0px   ">

                  <h6 style="text-align: left; color: white; margin: 7px 0px 11px 18px">
                    <strong>Column One</strong>
                  </h6> 
                </div>
                <div>

                <h4 style=" text-align: left; color: blue;  margin: 5px "> <strong >What?</strong></h4>
                </div>


                <div style="background-color:lightblue; width: 95% ; height: 750px; padding: 10px;"class="text-left">

                  <textarea class="nav-link active show" style="width: 100% ; height: 100%; padding: 15px; font-size: 18px; line-height: 1.6em; background-color:lightyellow;" type="text" placeholder="Which person, place, thing, situation, or organization am I afraid of?"v-model=" newFourthStepWhat"></textarea>
                </div>
              </div>
            </div>
            </li>
                        <!-- BBBBBBBBBBBBBBBB -->




               <!-- bbbbbbbbbbaaaaaaaaa -->


            <li style="height: 850px; 
                width: 37%; " class="nav-item">
                
            <div v-if="newFourthStepTypeDone ">
              <div v-if="newFourthStepResentment ">

                <div style=" width: 35%;border-style: solid; border-width:   1px; border-color: blue; border-radius: 20px; background-color: coral ;margin: 0px 0px 15px 0px   ">

                  <h6 style="text-align: left; color: white; margin: 7px 0px 11px 18px">
                    <strong>Column Two</strong>
                  </h6> 
                </div>


                <div>
                  <h4 style=" text-align: left; color: blue;  margin: 5px "> <strong >What?</strong></h4>
                </div>


                <div style="background-color:lightblue; width: 95% ; height: 750px; padding: 10px;"class="text-left">

                  <textarea class="nav-link active show" style="width: 100% ; height: 100%; padding: 15px; font-size: 18px; line-height: 1.6em; background-color:lightyellow;" type="text" placeholder="What am I resentful about?:" v-model=" newFourthStepWhat"></textarea>
                </div>

              </div>



              <!-- bbbbbbbbbbbbbbbbbbbb-->





              <div v-if="newFourthStepHarm">
                <div style=" width: 35%;border-style: solid; border-width:   1px; border-color: blue; border-radius: 20px; background-color: coral ;margin: 0px 0px 15px 0px   ">

                  <h6 style="text-align: left; color: white; margin: 7px 0px 11px 18px">
                    <strong>Column Two</strong>
                  </h6> 
                </div>
                <div>

                <h4 style=" text-align: left; color: blue;  margin: 5px "> <strong >What?</strong></h4>
                </div>


                <div style="background-color:lightblue; width: 95% ; height: 750px; padding: 10px;"class="text-left">

                  <textarea class="nav-link active show" style="width: 100% ; height: 100%; padding: 15px; font-size: 18px; line-height: 1.6em; background-color:lightyellow;" type="text" placeholder="What specifically are the details about, how I harmed?:"  v-model=" newFourthStepWhat"></textarea>
                </div>
              </div>






              <!-- bbbbbbbbbbbbccccccccccccc-->





              <div v-if="newFourthStepFear">
                <div style=" width: 35%;border-style: solid; border-width:   1px; border-color: blue; border-radius: 20px; background-color: coral ;margin: 0px 0px 15px 0px   ">

                  <h6 style="text-align: left; color: white; margin: 7px 0px 11px 18px">
                    <strong>Column Two</strong>
                  </h6> 
                </div>
                <div>

                <h4 style=" text-align: left; color: blue;  margin: 5px "> <strong >Why?</strong></h4>
                </div>


                <div style="background-color:lightblue; width: 95% ; height: 750px; padding: 10px;"class="text-left">

                  <textarea class="nav-link active show" style="width: 100% ; height: 100%; padding: 15px; font-size: 18px; line-height: 1.6em; background-color:lightyellow;" type="text" placeholder="Detail out on all levels, even the darkest scenario possible!:" v-model=" newFourthStepWhy"></textarea>
                </div>
              </div>
            </div>
            </li>



                        
            <li style="height: 850px; 
                width: 21%; " class="nav-item">
                

              <div v-if="newFourthStepTypeDone ">

                <div style=" width: 65%;border-style: solid; border-width:   1px; border-color: blue; border-radius: 20px; background-color: coral ;margin: 0px 0px 15px 0px   ">

                  <h6 style="text-align: left; color: white; margin: 7px 0px 11px 18px">
                    <strong>Column Three</strong>
                  </h6> 
                </div>


                <div>
                  <h4 style=" text-align: left; color: blue;  margin: 5px "> <strong >Affects my?</strong></h4>
                </div>


                <div style="background-color:lightblue; width: 95% ; height: 750px; padding: 10px;"class="text-left">

                  <div class="nav-link active show" style="width: 100% ; height: 100%; padding: 5px; background-color:lightyellow;" 
                  >
          <div style=" text-align: center;">
            <br>
            <div >
              <h5 style=" color: blue"><strong>Self Esteem? </strong> </strong></h5>
              
              <div style=" line-height: 2em; margin: 4px 30px 14px 30px; background-color: lightblue; color: coral;" ><input type="radio" v-model="newFourthStepSelfEsteem" v-bind:value="true"> Yes  
              <input type="radio" v-model="newFourthStepSelfEsteem" v-bind:value="false"> No</div>
            </div><br>
            

            <div>
              <h5 style=" color: blue"><strong>Pocket Book?  </strong></h5>
              <div style=" line-height: 2em; margin: 4px 30px 14px 30px; background-color: lightblue; color: coral;">
              <input type="radio" v-model="newFourthStepPocketBook" v-bind:value="true"> Yes 
              <input type="radio" v-model="newFourthStepPocketBook" v-bind:value="false"> No</div>
            </div><br>
            

            <div>
              <h5 style=" color: blue"><strong>Ambitions?  </strong></h5>
              
              <div style=" line-height: 2em; margin: 4px 30px 14px 30px; background-color: lightblue; color: coral;"><input type="radio" v-model="newFourthStepAmbitions" v-bind:value="true"> Yes 
              <input type="radio" v-model="newFourthStepAmbitions" v-bind:value="false"> No</div>
            </div><br>
            

            <div>
              <h5 style=" color: blue"><strong>Personal Relationships?  </strong></h5>
              
              <div style=" line-height: 2em; margin: 4px 30px 14px 30px; background-color: lightblue; color: coral;"><input type="radio" v-model="newFourthStepPersonalRelationships" v-bind:value="true"> Yes 
             
              <input type="radio" v-model="newFourthStepPersonalRelationships" v-bind:value="false"> No</div>
            </div><br>
            

            <div>
              <h5 style=" color: blue"><strong>Physical Security?  </strong></h5>
              
              <div style=" line-height: 2em; margin: 4px 30px 14px 30px; background-color: lightblue; color: coral;"><input type="radio" v-model="newFourthStepPhysicalSecurity" v-bind:value="true"> Yes 
              <input type="radio" v-model="newFourthStepPhysicalSecurity" v-bind:value="false"> No</div>
            </div><br>
            

            <div>
              <h5 style=" color: blue"><strong>Emotional Security?  </strong></h5>
              
              <div style=" line-height: 2em; margin: 4px 30px 14px 30px; background-color: lightblue; color: coral;"><input type="radio" v-model="newFourthStepEmotionalSecurity" v-bind:value="true"> Yes 
              <input type="radio" v-model="newFourthStepEmotionalSecurity" v-bind:value="false"> No</div>
            </div><br>
            

            <div>
              <h5 style=" color: blue"><strong>Sex Relationships?  </strong></h5>
              
              <div style=" line-height: 2em; margin: 4px 30px 14px 30px; background-color: lightblue; color: coral;"><input type="radio" v-model="newFourthStepSexRelationships" v-bind:value="true"> Yes 
              <input type="radio" v-model="newFourthStepSexRelationships" v-bind:value="false"> No</div>
            </div><br>
             
          
        </div>                   




                  </div>
                </div>

              </div> 
            </li>



                        
                        <!-- cccc -->

                       
                    </ul>
                  </div>
                </div>


          <div style="clear: both"></div>

          <br>
        <div style="text-align: center">
          <div v-if="newFourthStepTypeDone">

            <br>
            <br>
            <br>
            <br>
            <div>

              <div v-if="!newFourthStepThreeColumnsDone">
            
           
                <h3 style="color: darkblue">
                  Now I just completed the <strong>FIRST THREE COLUMNS </strong>of this inventory!
                </h3>
                <br>
                <br>
                <br>
            <div style="background-color: lightblue; width: 80%; margin: auto; color: darkgreen; border-radius: 45px;">
              <br><br>
                <h3><strong>
                  To go ahead! 
                </strong></h3><br>
    
                <h2>
                  Work on the: <strong> FOURTH COLUMN! 
                </strong></h2>
                <h2 style="width: 80%; padding: 20px; margin:30px auto; background-color: darkblue; color: white"> 
                  To dig deeper into this inventory Click below! </h2>

                  <h6 style="width: 25%; padding: 20px; margin:40px auto; background-color: darkblue; color: white"> 
                
                <strong> 
                  ------------> 
                  <input type="radio" name="fourth" v-model="newFourthStepThreeColumnsDone" v-bind:value="true"> 
                  <------------
                </strong></h6><br>
                
              </div>
              
              <br>
              <br>
           <h4> <strong> However to save this as is and start another inventory, click the save button in the bottom of this page! 
          </strong></h4>
        </div>
      </div>
      </div>
    </div>

  </div>  
    


        <!-- date completed first three columns -->


<div class="container">

      <div v-if="newFourthStepThreeColumnsDone">
        
        <div id=fourth-column>
          <div>
            <h2>Fourth column</h2>
            <h4>Referring to our list again. Putting out of our minds the wrongs others had done, we resolutely looked for our own mistakes. <strong>Where had we been selfish, dishonest, self-seeking and frightened? </strong> Though a situation had not been entirely our fault, we tried to disregard the other person involved entirely. Where were we to blame? The inventory was ours, not the other man’s. When we saw our faults we listed them. We placed them before us in black and white. We admitted our wrongs honestly and were willing to set these matters straight. <br> <small>(BB pg. 67)</small></h4>
          </div>
          <br>

          <div>
            <label>Where was I selfish?</label><br>
            <textarea style="width: 400px ; height: 400px; padding: 15px; font-size: 18px; line-height: 1.6em; background-color:lightyellow;" placeholder="Dig deep where was I selfish, no matter on anyone else:" v-model="newFourthStepSelfish"> </textarea>
          </div>
          <br>

          <div>
            <label>Where was I dishonest?</label><br>
            <textarea style="width: 400px ; height: 400px; padding: 15px; font-size: 18px; line-height: 1.6em; background-color:lightyellow;"placeholder="Dig deep where and how was I dishonest, no matter on anyone else:" v-model="newFourthStepDishonest"> </textarea>
          </div>
          <br>

          <div>
            <label>Where was I self seeking?</label><br>
            <textarea style="width: 400px ; height: 400px; padding: 15px; font-size: 18px; line-height: 1.6em; background-color:lightyellow;" placeholder="Dig deep where was I self seeking, I should get something out, no matter on anyone else:" v-model="newFourthStepSelfSeeking"> </textarea>
          </div>
          <br>

          <div>
            <label>Where was I Frightened?</label><br>
            <textarea style="width: 400px ; height: 400px; padding: 15px; font-size: 18px; line-height: 1.6em; background-color:lightyellow;" placeholder="Dig deep where was I acting out of fear, what was I afraid will happen if I let go?:" v-model="newFourthStepFrightened"> </textarea>
          </div>
          <br>
        </div>
        <br><br>

        <div v-if="newFourthStepFear "id:="for-fear-only">

          <div>

            <h1>For Fear:</h1>

            <h4>We reviewed our fears thoroughly. We put them on paper, even though we had no resentment in connection with them. We asked ourselves why we had them. Wasn’t it because self-reliance failed us? Self reliance was good as far as it went, but it didn’t go far enough. Some of us once had great self-confidence, but it didn’t fully solve the fear problem, or any other. When it made us cocky, it was worse. Perhaps there is a better way—we think so. For we are now on a different basis; the basis of trusting and relying upon God. We trust infinite God rather than our finite selves. We are in the world to play the role He assigns. Just to the extent that we do as we think He would have us, and humbly rely on Him, does He enable us to match calamity with serenity. We never apologize to anyone for depending </h4>

            BB p.68
          </div>


          <h4>For Fear inventories only</h4>
          <div>
            <label>How did fear solve this issue in the past?</label><br>
            <textarea style="width: 400px ; height: 400px; padding: 15px; font-size: 18px; line-height: 1.6em; background-color:lightyellow;"  placeholder="Explain the pros and cons that fear did to you towards something like this in the past:"v-model="newFourthStepFearSolved"> </textarea>
          </div>
          <br>
        </div>


              <br>
              <br>
              <div><div v-if="!newFourthStepFourthColumnDone" class="container">

                <div v-if="newFourthStepThreeColumnsDone">
              <br>
                  <br>
             
                  <h3 style="color: darkblue">
                    Now I just completed the <strong>FOUR COLUMNS </strong>of the inventory!
                  </h3>
                  <br>
                  <br>
                  <br>
              <div style="padding: 25px;background-color: lightblue; text-align: center; width: 80%; margin: auto; color: darkgreen; border-radius: 45px;">
                <br><br>
                  <h3 ><strong>
                    To go ahead! 
                  </strong></h3><br>
        
                  <h2>
                    Work on a: <strong> FIFTH COLUMN! 
                  </strong></h2>
                  <h2 style="width: 80%; padding: 20px; margin:30px auto; background-color: darkblue; color: white"> 
                    To recover even more! </h2>
                    <h3>Here is a powerful reccomended Fifth Column</h3>

                    <h6 style="width: 25%; padding: 20px; margin:40px auto; background-color: darkblue; color: white"> 
                  
                  <strong> 
                    -------> 
                    <input type="radio" name="fourth" v-model="newFourthStepFourthColumnDone" v-bind:value="true"> 
                    <-------
                  </strong></h6>
                  
                </div>
                
                
                <br><br>
             <h4 style="text-align: center;" > <strong> However to save this as is and start another inventory, <br>click the save button in the bottom of this page! 
            </strong></h4>
          </div>
          </div>
        </div>

        
      </div>


         <!-- date completed fourth column -->
      <div id="fifth-column" v-if="newFourthStepFourthColumnDone">
        <div>
          <br><br><br>
          <h2>A recommended Fifth column</h2><br>
          <h4>Perhaps there is a better way-—we think so. For we are now on a different basis; the basis of trusting and relying upon God. We trust infinite God rather than our finite selves. We are in the world to play the role He assigns. Just to the extent that we do as we think He would have us, and humbly rely on Him, does He enable us to match calamity with serenity.
          <br>
          <small>(BB pg. 68)</small></h4>
        </div>
        <br>


        <div>
          <label>How can I now be Selfless? <br>(opposite of selfish) </label><br>
          <textarea style="width: 400px ; height: 400px; padding: 15px; font-size: 18px; line-height: 1.6em; background-color:lightyellow;" placeholder="PUTS:" v-model="newFourthStepSelfless"> </textarea>
        </div>
        <br>

        <div>
          <label>How can I now be Rigorous Honest? <br>(opposite of dishonest) </label><br>
          <textarea style="width: 400px ; height: 400px; padding: 15px; font-size: 18px; line-height: 1.6em; background-color:lightyellow;" placeholder="PUTS:" v-model="newFourthStepRigorousHonesty"> </textarea>
        </div>
        <br>

        <div>
          <label>How can I now be "HP seeking"? <br>(opposite of self seeking) </label><br>
          <textarea style="width: 400px ; height: 400px; padding: 15px; font-size: 18px; line-height: 1.6em; background-color:lightyellow;" placeholder="PUTS:" v-model="newFourthStepHpSeeking"> </textarea>
        </div>
        <br>

        <div>
          <label>How can I now be settled in the hands of my HP? <br> (opposite of fear) </label><br>
          <textarea style="width: 400px ; height: 400px; padding: 15px; font-size: 18px; line-height: 1.6em; background-color:lightyellow;" placeholder="PUTS:" v-model="newFourthStepHpSerenity"> </textarea>
        </div>
        <br>
              <br>
              <br>
              <div><div v-if="!newFourthStepFifthColumnDone " class="container">

                <div v-if="newFourthStepFourthColumnDone  ">
              <br>
                  <br>
             
                  <h3 style="color: darkblue">
                    Now I just completed a <strong>FIFTH COLUMN </strong>for this inventory!
                  </h3>
                  <br>
                  <br>
                  <br>
              <div style="padding: 25px;background-color: lightblue; text-align: center; width: 80%; margin: auto; color: darkgreen; border-radius: 45px;">
                <br><br>
                  <h3 ><strong>
                    To go ahead! 
                  </strong></h3><br>
        
                  <h2>
                    Keep myself more <strong> ACOUNTABLE! 
                  </strong></h2>
                  <h2 style="width: 80%; padding: 20px; margin:30px auto; background-color: darkblue; color: white"> 
                    To recover even more! </h2>
                    <h3>Here is some accountability points!</h3>

                    <h6 style="width: 25%; padding: 20px; margin:40px auto; background-color: darkblue; color: white"> 
                  
                  <strong> 
                    -------> 
                    <input type="radio" name="fourth" v-model="newFourthStepFifthColumnDone " v-bind:value="true"> 
                    <-------
                  </strong></h6>
                  
                </div>
                
                
                <br><br>
             <h4 style="text-align: center;" > <strong> However to save this as is and start another inventory, <br>click the save button in the bottom of this page! 
            </strong></h4>
          </div>
          </div>
        </div>
        <div style="color: red; background-color: lightgrey;
        line-height: 3.5em">
          <br>
          
          
          <br>
          <br>
        </div>

        
      </div>

          <!-- date completed fifth column -->





      <div id="ask-yourself" style="padding: 30px; background-color: darkgreen;color: white;" v-if="newFourthStepFifthColumnDone ">
<br><br><br>
        <h2 style="padding: 25px;background-color: lightgreen;color: darkgreen;"><strong>To keep myself accountable:</strong></h2>

        <br><br>
<br>
        <div>
          <h4>Did I complete a solid FIFTH step on this one?</h4>
          
          <input type="radio" v-model="newFourthStepFifthDone" v-bind:value="true"> Yes 
          <input type="radio" v-model="newFourthStepFifthDone" v-bind:value="false"> No
        </div>
        <br>

          <!-- date completed fifth step -->



<br><br>
<br>
        <div>
          <h4>Did I complete an EIGHT step on this one?</h4>
          
          <input type="radio" v-model="newFourthStepEightDone" v-bind:value="true"> Yes 
          <input type="radio" v-model="newFourthStepEightDone" v-bind:value="false"> No
        </div>
        <br>
<br><br><br>

          <!-- date completed eight step -->


        
        <div>
          <h4>Did I complete a solid NINTH step on this one?</h4>
          
          <input type="radio" v-model="newFourthStepNinthDone" v-bind:value="true"> Yes 
          <input type="radio" v-model="newFourthStepNinthDone" v-bind:value="false"> No
        </div>
<br><br><br>
        <div style="color: red; background-color: lightgreen;
        line-height: 3.5em">
          <br>
          
          <h5>IMPORTANT TEST FOR MYSELF: <br>-------->
          
          <input type="radio" name="getting-ready" v-model="newFourthStepAdditionalDone " v-bind:value="true">
            
          </input> <--------
          </h5>
          
          <br>
        </div>
      </div>


          <!-- date completed ninth step -->

<br><br><br><br>

      <div id="am-i-free" v-if="newFourthStepAdditionalDone ">
        <h2>Am I getting the promises?</h2>

        <div>
          <h5><strong>We are going to know a new freedom
          and a new happiness.<br> We will not regret the past nor wish to shut the door on it.<br> We will comprehend the word serenity and we will know peace. <br>No matter how far down the scale we have gone, we will see how
          our experience can benefit others. <br>That feeling of uselessness and self-pity will disappear.<br> We will lose interest in selfish things and gain interest in our
          fellows. <br>Self-seeking will slip away. <br>Our whole attitude and outlook upon life will change. <br>Fear of people and of economic insecurity will leave us. <br>We will intuitively know how to handle situations which used to baffle us. <br>We will suddenly realize that God is doing for us what we could not do for ourselves.</strong><br>
          <small>(BB pg. 83-84)</small></h5>
        </div>
        <br>

        <div>
          <h3>Was I set completely free<br>of this specific inventory<br>through this step work?</h3>
        </div>
      


        <div> 
          <h2>
            <input type="radio" v-model="newFourthStepFree" v-bind:value="true"> Yes
          
            <input type="radio" v-model="newFourthStepFree" v-bind:value="false"> No
          </h2>
        </div>

        <div v-if="newFourthStepFree">
          <h1>Great! Good for you!</h1>
        </div>
        <div v-if="newFourthStepFree == false">
          <h4>If I did not, <strong>YET,</strong> get the promises above, at least to set myself free of this specific inventory issue, it is highly recommended to ask my sponsor if it is the next right thing for me to <strong>redo steps 4-9</strong> on this inventory.<br> <strong>THE PROMISES WILL COME!</strong></h4>
        </div>
        <br>
      </div>






      <div id="submit-fourth" v-if="newFourthStepTypeDone" style="line-height: 3em">
        
        <br>
        <h4>Anytime during writing this inventory you need a break and come back to it later, use this save button </h4>
        <button class="btn btn-main flat animation" v-on:click="createFourthStep()"><h5><strong>Click me! </strong><br> <small>To save this </small><br> <strong>"Fourth Step"</strong></h5></button>
      </div>
    
  </div>
  </form>
      <br>
    

  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      
      newFourthStepResentment: "",
      newFourthStepHarm: "",
      newFourthStepFear: "",
      newFourthStepTypeDone: "",

      newFourthStepWho: "",
      newFourthStepWhat: "",
      newFourthStepWhy: "",
      newFourthStepSelfEsteem: "",
      newFourthStepPocketBook: "",
      newFourthStepAmbitions: "",
      newFourthStepPersonalRelationships: "",
      newFourthStepPhysicalSecurity: "",
      newFourthStepEmotionalSecurity: "",
      newFourthStepSexRelationships: "",
      newFourthStepThreeColumnsDone: "",

      newFourthStepFearSolved: "",
      newFourthStepSelfish: "",
      newFourthStepDishonest: "",
      newFourthStepSelfSeeking: "",
      newFourthStepFrightened: "",
      newFourthStepFourthColumnDone: "",

      
      newFourthStepSelfless: "",
      newFourthStepRigorousHonesty: "",
      newFourthStepHpSeeking: "",
      newFourthStepHpSerenity: "",
      newFourthStepFifthColumnDone: "",
      

      newFourthStepFifthDone: "",
      newFourthStepEightDone: "",
      newFourthStepNinthDone: "",
      newFourthStepAdditionalDone: "",

      newFourthStepFree: "",
      errors: []
    };
  },
  created: function() {
  },
  methods: {
    createFourthStep: function() {
      var params = {
        
        resentment: this.newFourthStepResentment,
        fear: this.newFourthStepFear,
        harm: this.newFourthStepHarm,
        type_done: this.newFourthStepTypeDone,


        who: this.newFourthStepWho,
        what: this.newFourthStepWhat,
        why: this.newFourthStepWhy,
        self_esteem: this.newFourthStepSelfEsteem,
        pocket_book: this.newFourthStepPocketBook,
        ambitions: this.newFourthStepAmbitions,
        personal_relationships: this.newFourthStepPersonalRelationships,
        physical_security: this.newFourthStepPhysicalSecurity,
        emotional_security: this.newFourthStepEmotionalSecurity,
        sex_relationships: this.newFourthStepSexRelationships,
        three_columns_done: this.newFourthStepThreeColumnsDone,


        fear_solved: this.newFourthStepFearSolved,
        selfish: this.newFourthStepSelfish,
        dishonest: this.newFourthStepDishonest,
        self_seeking: this.newFourthStepSelfSeeking,
        frightened: this.newFourthStepFrightened,
        fourth_column_done: this.newFourthStepFourthColumnDone,


        
        selfless: this.newFourthStepSelfless,
        rigorous_honesty: this.newFourthStepRigorousHonesty,
        hp_seeking: this.newFourthStepHpSeeking,
        hp_serenity: this.newFourthStepHpSerenity,
        fifth_column_done: this.newFourthStepFifthColumnDone,



        fifth_done: this.newFourthStepFifthDone,
        eight_done: this.newFourthStepEightDone,
        ninth_done: this.newFourthStepNinthDone,
        additional_done: this.newFourthStepAdditionalDone,


        free: this.newFourthStepFree,
        };
      axios.post("/api/fourth_steps", params).then(response => {
        this.fourth_steps.push(response.data);

        this.newFourthStepResentment = "";
        this.newFourthStepHarm = "";
        this.newFourthStepFear = "";
        this.newFourthStepTypeDone = "";

        this.newFourthStepWho = "";
        this.newFourthStepWhat = "";
        this.newFourthStepWhy = "";
        this.newFourthStepSelfEsteem = "";
        this.newFourthStepPocketBook = "";
        this.newFourthStepAmbitions = "";
        this.newFourthStepPersonalRelationships = "";
        this.newFourthStepPhysicalSecurity = "";
        this.newFourthStepEmotionalSecurity = "";
        this.newFourthStepSexRelationships = "";
        this.newFourthStepThreeColumnsDone = "";


        

        this.newFourthStepFearSolved = "";


        this.newFourthStepSelfish = "";
        this.newFourthStepDishonest = "";
        this.newFourthStepSelfSeeking = "";
        this.newFourthStepFrightened = "";
        this.newFourthStepFourthColumnDone = "";


        this.newFourthStepSelfless = "";
        this.newFourthStepRigorousHonesty = "";
        this.newFourthStepHpSeeking = "";
        this.newFourthStepHpSerenity = "";
        this.newFourthStepFifthColumnDone = "";


        this.newFourthStepFifthDone = "";
        this.newFourthStepEightDone = "";
        this.newFourthStepNinthDone = "";
        this.newFourthStepAdditionalDone = "";



        this.newFourthStepFree = "";
      })
      this.$router.push("/fourth_steps/");
    },

    typeFourthStepR: function() {
      this.newFourthStepResentment = true;
      this.newFourthStepHarm = false;
      this.NewFourthStepFear = false;
      }, 

    typeFourthStepH: function() {
      this.newFourthStepHarm = true;
      this.newFourthStepResentment = false;
      this.NewFourthStepFear = false;
      }, 
    
    typeFourthStepF: function() {
      this.NewFourthStepFear = true;
      this.newFourthStepResentment = false;
      this.newFourthStepHarm = false;
      }
    }
  };
</script>







 