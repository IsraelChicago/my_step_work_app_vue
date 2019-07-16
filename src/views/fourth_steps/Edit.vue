<template> 
  <div class="fourth-steps-edit">
 
    <form v-on:submit.prevent="submit()">


        <div>

              <div class="new-step" v-if="!fourthStep.type_done ">
                <br>
                <h1>
                  Edit Fourth Step
                </h1>        
                <br>
              </div>


              <ul>
                <li v-for="error in errors">{{ error }}</li>
              </ul>


              <div class="type-of-fourth" v-if="!fourthStep.type_done ">
                <br>
                <h3>
                  Type of Fourth step:
                </h3>
                
                  <div v-if="fourthStep.resentment">
                    <h1>
                    Resentment Inventory </h1>
                                         
                    </input>
                  </div> 

                  <div v-if="fourthStep.harm">
                    <h1>
                    Harm Inventory </h1>
                       
                    </input>
                  </div> 

                  <div v-if="fourthStep.fear">
                    <h1>
                    fear Inventory </h1>
                       
                    </input>
                  </div>                
                  <br>
                  
                </div>


                <div class="type-of-fourth" v-if="!fourthStep.type_done">
                    <div v-if="fourthStep.resentment || fourthStep.fear || fourthStep.harm">
                      <br>
                      <h3>Confirm the inventory below:</h3> 
                      <input type="radio" name="type-done" v-model="fourthStep.type_done" v-bind:value="true">
                    </div> 
                    <br>
                    <br>
                </div>
                

           
              
                <!-- date started -->
                
            <div v-if="fourthStep.type_done">

                <div>
                  <br>
                  <br>
                  <h1>
                    First three columns:
                  </h1>
                </div>


                <section id="three-columns-a">

                  <div>
                    <h3>
                      Column one:
                    </h3>
                    <br>
                  </div>

                  <div v-if="fourthStep.resentment ">
                    <h1>Who am I Resenting?</h1><br>
                    <label><strong>Who</strong></label><br>
                    <textarea class="text-input" type="text" placeholder="Which person, place, thing, situation, or organization am I resenting?" v-model=" fourthStep.who"></textarea>
                  </div>

                  <br>

                  <div v-if="fourthStep.harm">
                    <h1>Who did I harm?</h1><br>
                    <label><strong>Who</strong></label><br>
                    <textarea class="text-input" type="text" placeholder="Which person, place, thing, or organization did I harm?" v-model=" fourthStep.who"></textarea>
                  </div>


                  <br>

                  <div v-if="fourthStep.fear">
                    <h1>What am I afraid of?</h1><br>
                    <label><strong>What</strong></label><br>
                    <textarea class="text-input" type="text" placeholder="Which person, place, thing, situation, or organization am I afraid of?" v-model=" fourthStep.what"></textarea>
                  </div>
                </section>  
                
              

                <section id="three-columns-b">
                    <div>
                      <h3>
                        Column two:
                      </h3>
                      <br>
                    </div>

                    <div v-if="fourthStep.resentment ">
                      <h1>What am I Resenting?</h1><br>
                      <label><strong>What</strong></label><br>
                      <textarea placeholder="What am I resentful about?:" v-model="fourthStep.what"> </textarea>
                    </div>
                    <br>

                    <div v-if="fourthStep.harm">
                      <h1>What was the harm?</h1><br>
                      <label><strong>What</strong></label><br>
                      <textarea placeholder="What specifically are the details about, how I harmed?:" v-model="fourthStep.what"> </textarea>
                    </div>
                    <br>

                    <div v-if="fourthStep.fear">
                      <h1>Why am I afraid of this?</h1><br>
                      <label><strong>Why</strong></label><br>
                      <textarea placeholder="Detail out on all levels, even the darkest scenario possible!:" v-model="fourthStep.why"> </textarea>
                    </div>
                    <br>

                </section>




                <section id="three-columns-c" v-if="fourthStep.type_done">
                  <div>
                    <h3>
                      Column three:
                    </h3>
                    <br>
                  </div>

                  <h1>Affects My:</h1> 
                  <br>
                  

                  <div><small><strong>
                    <div>
                      Self Esteem?
                      
                      <input type="radio" v-model="fourthStep.self_esteem" v-bind:value="true">Yes  
                      <input type="radio" v-model="fourthStep.self_esteem" v-bind:value="false">No
                    </div>
                    

                    <div>
                      Pocket Book?
                      
                      <input type="radio" v-model="fourthStep.pocket_book" v-bind:value="true">Yes 
                      <input type="radio" v-model="fourthStep.pocket_book" v-bind:value="false">No
                    </div>
                    

                    <div>
                      Ambitions?
                      
                      <input type="radio" v-model="fourthStep.ambitions" v-bind:value="true">Yes 
                      <input type="radio" v-model="fourthStep.ambitions" v-bind:value="false">No
                    </div>
                    

                    <div>
                      Personal Relationships?
                      
                      <input type="radio" v-model="fourthStep.personal_relationships" v-bind:value="true">Yes 
                     
                      <input type="radio" v-model="fourthStep.personal_relationships" v-bind:value="false">No
                    </div>
                    

                    <div>
                      Physical Security?
                      
                      <input type="radio" v-model="fourthStep.physical_security" v-bind:value="true">Yes 
                      <input type="radio" v-model="fourthStep.physical_security" v-bind:value="false">No
                    </div>
                    

                    <div>
                      Emotional Security?
                      
                      <input type="radio" v-model="fourthStep.emotional_security" v-bind:value="true">Yes 
                      <input type="radio" v-model="fourthStep.emotional_security" v-bind:value="false">No
                    </div>
                    

                    <div>
                      Sex Relationships?
                      
                      <input type="radio" v-model="fourthStep.sex_relationships" v-bind:value="true">Yes 
                      <input type="radio" v-model="fourthStep.sex_relationships" v-bind:value="false">No
                    </div>
                    </strong> 
                  </small>
                </div>
                    <br>
                    <br>
                  
                </section>

                <div class="clr">
                  <br>
                  <br>
                  <br>
                  <br>
                <div>

                <div v-if="!fourthStep.three_columns_done">
                  
                 
                  <h1>
                    Now I just completed the first three columns of this inventory!
                  </h1>
                  <br>
                  <br>
                  <br>
                  <h3>
                    To go ahead! 
                  </h3>
          
                  <h1>Work on the fourth column! </h1>
                   <h2> Dig deeper into this inventory
                    click here! <br> <br> <br>
                    <strong> ------------> <input type="radio" name="fourth" v-model="fourthStep.three_columns_done" v-bind:value="true"> <------------</strong>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                  To save this as is and start another inventory click the save button in the bottom of this page! 
                </h2>
              </div>
            </div>
          </div>

        </div>  
          


              <!-- date completed first three columns -->




            <div v-if="fourthStep.three_columns_done">
              
              <div id=fourth-column>
                <div>
                  <h2>Fourth column</h2>
                  <p>Referring to our list again. Putting out of our minds the wrongs others had done, we resolutely looked for our own mistakes. <strong>Where had we been selfish, dishonest, self-seeking and frightened? </strong> Though a situation had not been entirely our fault, we tried to disregard the other person involved entirely. Where were we to blame? The inventory was ours, not the other man’s. When we saw our faults we listed them. We placed them before us in black and white. We admitted our wrongs honestly and were willing to set these matters straight. <br> <small>(BB pg. 67)</small></p>
                </div>
                <br>

                <div>
                  <label>Where was I selfish?</label><br>
                  <textarea placeholder="Dig deep where was I selfish, no matter on anyone else:" v-model="fourthStep.selfish"> </textarea>
                </div>
                <br>

                <div>
                  <label>Where was I dishonest?</label><br>
                  <textarea placeholder="Dig deep where and how was I dishonest, no matter on anyone else:" v-model="fourthStep.dishonest"> </textarea>
                </div>
                <br>

                <div>
                  <label>Where was I self seeking?</label><br>
                  <textarea placeholder="Dig deep where was I self seeking, I should get something out, no matter on anyone else:" v-model="fourthStep.self_seeking"> </textarea>
                </div>
                <br>

                <div>
                  <label>Where was I Frightened?</label><br>
                  <textarea placeholder="Dig deep where was I acting out of fear, what was I afraid will happen if I let go?:" v-model="fourthStep.frightened"> </textarea>
                </div>
                <br>
              </div>

              <div v-if="fourthStep.fear "id:="for-fear-only">

                <div>

                  <p>We reviewed our fears thoroughly. We put them on paper, even though we had no resentment in connection with them. We asked ourselves why we had them. Wasn’t it because self-reliance failed us? Self reliance was good as far as it went, but it didn’t go far enough. Some of us once had great self-confidence, but it didn’t fully solve the fear problem, or any other. When it made us cocky, it was worse. Perhaps there is a better way—we think so. For we are now on a different basis; the basis of trusting and relying upon God. We trust infinite God rather than our finite selves. We are in the world to play the role He assigns. Just to the extent that we do as we think He would have us, and humbly rely on Him, does He enable us to match calamity with serenity. We never apologize to anyone for depending </p>

                  BB p.68
                </div>


                <h4>For Fear inventories only</h4>
                <div>
                  <label>How did fear solve this issue in the past?</label><br>
                  <textarea  placeholder="Explain the pros and cons that fear did to you towards something like this in the past:"v-model="fourthStep.fear_solved"> </textarea>
                </div>
                <br>
              </div>


              <div style="color: red; background-color: lightgrey;
              line-height: 3.5em">
                <br>
                <h1>
                  When I am ready to recover more, <br> ready to do a FIFTH COLUMN <br>I click here: <br>-------->
                
                <input type="radio"  v-model="fourthStep.fourth_column_done" v-bind:value="true">
                  
                </input> <--------
                </h1>
                <br>
                <br>
              </div>
            </div>


               <!-- date completed fourth column -->
            <div id="fifth-column" v-if="fourthStep.fourth_column_done">
              <div>
                <h2>A recommended Fifth column</h2>
                <p>Perhaps there is a better way-—we think so. For we are now on a different basis; the basis of trusting and relying upon God. We trust infinite God rather than our finite selves. We are in the world to play the role He assigns. Just to the extent that we do as we think He would have us, and humbly rely on Him, does He enable us to match calamity with serenity.
                <br>
                <small>(BB pg. 68)</small></p>
              </div>
              <br>


              <div>
                <label>How can I now be Selfless? <br>(opposite of selfish) </label><br>
                <textarea placeholder="PUTS:" v-model="fourthStep.selfless"> </textarea>
              </div>
              <br>

              <div>
                <label>How can I now be Rigorous Honest? <br>(opposite of dishonest) </label><br>
                <textarea placeholder="PUTS:" v-model="fourthStep.rigorous_honesty"> </textarea>
              </div>
              <br>

              <div>
                <label>How can I now be "HP seeking"? <br>(opposite of self seeking) </label><br>
                <textarea placeholder="PUTS:" v-model="fourthStep.hp_seeking"> </textarea>
              </div>
              <br>

              <div>
                <label>How can I now be settled in the hands of my HP? <br> (opposite of fear) </label><br>
                <textarea placeholder="PUTS:" v-model="fourthStep.hp_serenity"> </textarea>
              </div>
              <br>

              <div style="color: red; background-color: lightgrey;
              line-height: 3.5em">
                <br>
                
                <h1>Ready to KEEP MYSELF ACCOUNTABLE <br>I click here: <br>-------->
                
                <input type="radio" name="getting-ready" v-model="fourthStep.fifth_column_done" v-bind:value="true">
                  
                </input> <--------
                </h1>
                <br>
                <br>
              </div>

              
            </div>

                <!-- date completed fifth column -->





            <div id="ask-yourself" v-if="fourthStep.fifth_column_done ">

              <h2>To keep myself accountable:</h2>

              <div>
                Did I complete a solid 5th step on this one?
                <br>
                <input type="radio" v-model="fourthStep.fifth_done" v-bind:value="true">Yes 
                <input type="radio" v-model="fourthStep.fifth_done" v-bind:value="false">No
              </div>
              <br>

                <!-- date completed fifth step -->




              <div>
                Did I complete an 8th step on this one?
                <br>
                <input type="radio" v-model="fourthStep.eight_done" v-bind:value="true">Yes 
                <input type="radio" v-model="fourthStep.eight_done" v-bind:value="false">No
              </div>
              <br>


                <!-- date completed eight step -->


              
              <div>
                Did I complete a solid 9th step on this one?
                <br>
                <input type="radio" v-model="fourthStep.ninth_done" v-bind:value="true">Yes 
                <input type="radio" v-model="fourthStep.ninth_done" v-bind:value="false">No
              </div>

              <div style="color: red; background-color: lightgrey;
              line-height: 3.5em">
                <br>
                
                <h1>IMPORTANT TEST FOR MYSELF: <br>-------->
                
                <input type="radio" name="getting-ready" v-model="fourthStep.additional_done " v-bind:value="true">
                  
                </input> <--------
                </h1>
                <br>
                <br>
              </div>
            </div>


                <!-- date completed ninth step -->



            <div id="am-i-free" v-if="fourthStep.additional_done ">
              <h2>Am I getting the promises?</h2>

              <div>
                <p><strong>We are going to know a new freedom
                and a new happiness.<br> We will not regret the past nor wish to shut the door on it.<br> We will comprehend the word serenity and we will know peace. <br>No matter how far down the scale we have gone, we will see how
                our experience can benefit others. <br>That feeling of uselessness and self-pity will disappear.<br> We will lose interest in selfish things and gain interest in our
                fellows. <br>Self-seeking will slip away. <br>Our whole attitude and outlook upon life will change. <br>Fear of people and of economic insecurity will leave us. <br>We will intuitively know how to handle situations which used to baffle us. <br>We will suddenly realize that God is doing for us what we could not do for ourselves.</strong><br>
                <small>(BB pg. 83-84)</small></p>
              </div>
              <br>

              <div>
                <h3>Was I set completely free<br>of this specific inventory<br>through this step work?</h3>
              </div>
            


              <div> 
                <h2>
                  <input type="radio" v-model="fourthStep.free" v-bind:value="true">Yes
                
                  <input type="radio" v-model="fourthStep.free" v-bind:value="false">No
                </h2>
              </div>

              <div v-if="fourthStep.free">
                <h1>Great! Good for you!</h1>
              </div>
              <div v-if="fourthStep.free == false">
                <p>If I did not, <strong>YET,</strong> get the promises above, at least to set myself free of this specific inventory issue, it is highly recommended to ask my sponsor if it is the next right thing for me to <strong>redo steps 4-9</strong> on this inventory.<br> <strong>THE PROMISES WILL COME!</strong></p>
              </div>
              <br>
            </div>
              
              <br>
              <p>Anytime during writing this inventory you need a break and come back to it later, use this save button </p>
              <button type="submit" class="create-button"><p><strong>Click me! </strong><br> <small>To update and save this </small><br> <strong>"Fourth Step"</strong></p></button>
            </div>
    </form>


      <br>
      <br>
      <br>
      <br>
      <div >
        <button v-on:click="destroyFourthStep()">
          DELETE THIS FOURTH STEP
        </button>
      </div>   

  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {

      errors: [],
      fourthStep: {}
    };
  },
  created: function() {
    axios.get("/api/fourth_steps/" + this.$route.params.id).then(response => {
      this.fourthStep = response.data;
      console.log(this.fourthStep);
    });
  },
  methods: {
    submit: function() {
      var params = {
        
        resentment: this.fourthStep.resentment,
        fear: this.fourthStep.fear,
        harm: this.fourthStep.harm,
        type_done: this.fourthStep.type_done,


        who: this.fourthStep.who,
        what: this.fourthStep.what,
        why: this.fourthStep.why,
        self_esteem: this.fourthStep.self_esteem,
        pocket_book: this.fourthStep.pocket_book,
        ambitions: this.fourthStep.ambitions,
        personal_relationships: this.fourthStep.personal_relationships,
        physical_security: this.fourthStep.physical_security,
        emotional_security: this.fourthStep.emotional_security,
        sex_relationships: this.fourthStep.sex_relationships,
        three_columns_done: this.fourthStep.three_columns_done,


        fear_solved: this.fourthStep.fear_solved,
        selfish: this.fourthStep.selfish,
        dishonest: this.fourthStep.dishonest,
        self_seeking: this.fourthStep.self_seeking,
        frightened: this.fourthStep.frightened,
        fourth_column_done: this.fourthStep.fourth_column_done,


        
        selfless: this.fourthStep.selfless,
        rigorous_honesty: this.fourthStep.rigorous_honesty,
        hp_seeking: this.fourthStep.hp_seeking,
        hp_serenity: this.fourthStep.hp_serenity,
        fifth_column_done: this.fourthStep.fifth_column_done,



        fifth_done: this.fourthStep.fifth_done,
        eight_done: this.fourthStep.eight_done,
        ninth_done: this.fourthStep.ninth_done,
        additional_done: this.fourthStep.additional_done,


        free: this.fourthStep.free
        };
      axios.patch("/api/fourth_steps/" + this.fourthStep.id, params).then(response => {
        console.log("Success!", response.data);
        this.$router.push("/fourth_steps/" + this.fourthStep.id);
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    },
    destroyFourthStep: function() {
      
      if(confirm("Do you really want to delete " + this.fourthStep.who + "?"))
      axios.delete("/api/fourth_steps/" + this.fourthStep.id).then(response => {
        console.log("Success!", response.data);

        this.$router.push("/fourth_steps");
      });
    },

    typeFourthStepR: function() {
      this.fourthStep.resentment = true;
      this.fourthStep.harm = false;
      this.fourthStep.fear = false;
      }, 

    typeFourthStepH: function() {
      this.fourthStep.harm = true;
      this.fourthStep.resentment = false;
      this.fourthStep.fear = false;
      }, 
    
    typeFourthStepF: function() {
      this.fourthStep.fear = true;
      this.fourthStep.resentment = false;
      this.fourthStep.harm = false;
      }
    }
  };
</script>







 