<template> 
  <div class="fourth-steps-new">
 
    <form>


      <div>
        <div class="new-step" v-if="!newFourthStepTypeDone ">
          <br>
          <h1>
            New Fourth Step Inventory
          </h1>        
          <br>
        </div>


        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>


        <div class="type-of-fourth" v-if="!newFourthStepTypeDone">
          <br>
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
            <br>
            <br>
          </div>
          

     
        
          <!-- date started -->
          
      <div v-if="newFourthStepTypeDone">

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

            <div v-if="newFourthStepResentment ">
              <h1>Who am I Resenting?</h1><br>
              <label><strong>Who</strong></label><br>
              <textarea class="text-input" type="text" placeholder="Which person, place, thing, situation, or organization am I resenting?" v-model=" newFourthStepWho"></textarea>
            </div>

            <br>

            <div v-if="newFourthStepHarm">
              <h1>Who did I harm?</h1><br>
              <label><strong>Who</strong></label><br>
              <textarea class="text-input" type="text" placeholder="Which person, place, thing, or organization did I harm?" v-model=" newFourthStepWho"></textarea>
            </div>


            <br>

            <div v-if="newFourthStepFear">
              <h1>What am I afraid of?</h1><br>
              <label><strong>What</strong></label><br>
              <textarea class="text-input" type="text" placeholder="Which person, place, thing, situation, or organization am I afraid of?" v-model=" newFourthStepWhat"></textarea>
            </div>
          </section>  
          
        

          <section id="three-columns-b">
              <div>
                <h3>
                  Column two:
                </h3>
                <br>
              </div>

              <div v-if="newFourthStepResentment ">
                <h1>What am I Resenting?</h1><br>
                <label><strong>What</strong></label><br>
                <textarea placeholder="What am I resentful about?:" v-model="newFourthStepWhat"> </textarea>
              </div>
              <br>

              <div v-if="newFourthStepHarm">
                <h1>What was the harm?</h1><br>
                <label><strong>What</strong></label><br>
                <textarea placeholder="What specifically are the details about, how I harmed?:" v-model="newFourthStepWhat"> </textarea>
              </div>
              <br>

              <div v-if="newFourthStepFear">
                <h1>Why am I afraid of this?</h1><br>
                <label><strong>Why</strong></label><br>
                <textarea placeholder="Detail out on all levels, even the darkest scenario possible!:" v-model="newFourthStepWhy"> </textarea>
              </div>
              <br>

          </section>




          <section id="three-columns-c" v-if="newFourthStepTypeDone">
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
                
                <input type="radio" v-model="newFourthStepSelfEsteem" v-bind:value="true">Yes  
                <input type="radio" v-model="newFourthStepSelfEsteem" v-bind:value="false">No
              </div>
              

              <div>
                Pocket Book?
                
                <input type="radio" v-model="newFourthStepPocketBook" v-bind:value="true">Yes 
                <input type="radio" v-model="newFourthStepPocketBook" v-bind:value="false">No
              </div>
              

              <div>
                Ambitions?
                
                <input type="radio" v-model="newFourthStepAmbitions" v-bind:value="true">Yes 
                <input type="radio" v-model="newFourthStepAmbitions" v-bind:value="false">No
              </div>
              

              <div>
                Personal Relationships?
                
                <input type="radio" v-model="newFourthStepPersonalRelationships" v-bind:value="true">Yes 
               
                <input type="radio" v-model="newFourthStepPersonalRelationships" v-bind:value="false">No
              </div>
              

              <div>
                Physical Security?
                
                <input type="radio" v-model="newFourthStepPhysicalSecurity" v-bind:value="true">Yes 
                <input type="radio" v-model="newFourthStepPhysicalSecurity" v-bind:value="false">No
              </div>
              

              <div>
                Emotional Security?
                
                <input type="radio" v-model="newFourthStepEmotionalSecurity" v-bind:value="true">Yes 
                <input type="radio" v-model="newFourthStepEmotionalSecurity" v-bind:value="false">No
              </div>
              

              <div>
                Sex Relationships?
                
                <input type="radio" v-model="newFourthStepSexRelationships" v-bind:value="true">Yes 
                <input type="radio" v-model="newFourthStepSexRelationships" v-bind:value="false">No
              </div>
              </strong> 
            </small>
          </div>
              
              
              
            
            <br>
              <br>
            
          </section>
          <div class="clr"></div>
            <br>
            <br>
            <br>
            <br>
          <div>

          <div v-if="!newFourthStepThreeColumnsDone">
            
           
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
              <strong> ------------> <input type="radio" name="fourth" v-model="newFourthStepThreeColumnsDone" v-bind:value="true"> <------------</strong>
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




      <div v-if="newFourthStepThreeColumnsDone">
        
        <div id=fourth-column>
          <div>
            <h2>Fourth column</h2>
            <p>Referring to our list again. Putting out of our minds the wrongs others had done, we resolutely looked for our own mistakes. <strong>Where had we been selfish, dishonest, self-seeking and frightened? </strong> Though a situation had not been entirely our fault, we tried to disregard the other person involved entirely. Where were we to blame? The inventory was ours, not the other man’s. When we saw our faults we listed them. We placed them before us in black and white. We admitted our wrongs honestly and were willing to set these matters straight. <br> <small>(BB pg. 67)</small></p>
          </div>
          <br>

          <div>
            <label>Where was I selfish?</label><br>
            <textarea placeholder="Dig deep where was I selfish, no matter on anyone else:" v-model="newFourthStepSelfish"> </textarea>
          </div>
          <br>

          <div>
            <label>Where was I dishonest?</label><br>
            <textarea placeholder="Dig deep where and how was I dishonest, no matter on anyone else:" v-model="newFourthStepDishonest"> </textarea>
          </div>
          <br>

          <div>
            <label>Where was I self seeking?</label><br>
            <textarea placeholder="Dig deep where was I self seeking, I should get something out, no matter on anyone else:" v-model="newFourthStepSelfSeeking"> </textarea>
          </div>
          <br>

          <div>
            <label>Where was I Frightened?</label><br>
            <textarea placeholder="Dig deep where was I acting out of fear, what was I afraid will happen if I let go?:" v-model="newFourthStepFrightened"> </textarea>
          </div>
          <br>
        </div>

        <div v-if="newFourthStepFear "id:="for-fear-only">

          <div>

            <p>We reviewed our fears thoroughly. We put them on paper, even though we had no resentment in connection with them. We asked ourselves why we had them. Wasn’t it because self-reliance failed us? Self reliance was good as far as it went, but it didn’t go far enough. Some of us once had great self-confidence, but it didn’t fully solve the fear problem, or any other. When it made us cocky, it was worse. Perhaps there is a better way—we think so. For we are now on a different basis; the basis of trusting and relying upon God. We trust infinite God rather than our finite selves. We are in the world to play the role He assigns. Just to the extent that we do as we think He would have us, and humbly rely on Him, does He enable us to match calamity with serenity. We never apologize to anyone for depending </p>

            BB p.68
          </div>


          <h4>For Fear inventories only</h4>
          <div>
            <label>How did fear solve this issue in the past?</label><br>
            <textarea  placeholder="Explain the pros and cons that fear did to you towards something like this in the past:"v-model="newFourthStepFearSolved"> </textarea>
          </div>
          <br>
        </div>


        <div style="color: red; background-color: lightgrey;
        line-height: 3.5em">
          <br>
          <h1>
            When I am ready to recover more, <br> ready to do a FIFTH COLUMN <br>I click here: <br>-------->
          
          <input type="radio"  v-model="newFourthStepFourthColumnDone" v-bind:value="true">
            
          </input> <--------
          </h1>
          <br>
          <br>
        </div>
      </div>


         <!-- date completed fourth column -->
      <div id="fifth-column" v-if="newFourthStepFourthColumnDone">
        <div>
          <h2>A recommended Fifth column</h2>
          <p>Perhaps there is a better way-—we think so. For we are now on a different basis; the basis of trusting and relying upon God. We trust infinite God rather than our finite selves. We are in the world to play the role He assigns. Just to the extent that we do as we think He would have us, and humbly rely on Him, does He enable us to match calamity with serenity.
          <br>
          <small>(BB pg. 68)</small></p>
        </div>
        <br>


        <div>
          <label>How can I now be Selfless? <br>(opposite of selfish) </label><br>
          <textarea placeholder="PUTS:" v-model="newFourthStepSelfless"> </textarea>
        </div>
        <br>

        <div>
          <label>How can I now be Rigorous Honest? <br>(opposite of dishonest) </label><br>
          <textarea placeholder="PUTS:" v-model="newFourthStepRigorousHonesty"> </textarea>
        </div>
        <br>

        <div>
          <label>How can I now be "HP seeking"? <br>(opposite of self seeking) </label><br>
          <textarea placeholder="PUTS:" v-model="newFourthStepHpSeeking"> </textarea>
        </div>
        <br>

        <div>
          <label>How can I now be settled in the hands of my HP? <br> (opposite of fear) </label><br>
          <textarea placeholder="PUTS:" v-model="newFourthStepHpSerenity"> </textarea>
        </div>
        <br>

        <div style="color: red; background-color: lightgrey;
        line-height: 3.5em">
          <br>
          
          <h1>Ready to KEEP MYSELF ACCOUNTABLE <br>I click here: <br>-------->
          
          <input type="radio" name="getting-ready" v-model="newFourthStepFifthColumnDone" v-bind:value="true">
            
          </input> <--------
          </h1>
          <br>
          <br>
        </div>

        
      </div>

          <!-- date completed fifth column -->





      <div id="ask-yourself" v-if="newFourthStepFifthColumnDone ">

        <h2>To keep myself accountable:</h2>

        <div>
          Did I complete a solid 5th step on this one?
          <br>
          <input type="radio" v-model="newFourthStepFifthDone" v-bind:value="true">Yes 
          <input type="radio" v-model="newFourthStepFifthDone" v-bind:value="false">No
        </div>
        <br>

          <!-- date completed fifth step -->




        <div>
          Did I complete an 8th step on this one?
          <br>
          <input type="radio" v-model="newFourthStepEightDone" v-bind:value="true">Yes 
          <input type="radio" v-model="newFourthStepEightDone" v-bind:value="false">No
        </div>
        <br>


          <!-- date completed eight step -->


        
        <div>
          Did I complete a solid 9th step on this one?
          <br>
          <input type="radio" v-model="newFourthStepNinthDone" v-bind:value="true">Yes 
          <input type="radio" v-model="newFourthStepNinthDone" v-bind:value="false">No
        </div>

        <div style="color: red; background-color: lightgrey;
        line-height: 3.5em">
          <br>
          
          <h1>IMPORTANT TEST FOR MYSELF: <br>-------->
          
          <input type="radio" name="getting-ready" v-model="newFourthStepAdditionalDone " v-bind:value="true">
            
          </input> <--------
          </h1>
          <br>
          <br>
        </div>
      </div>


          <!-- date completed ninth step -->



      <div id="am-i-free" v-if="newFourthStepAdditionalDone ">
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
            <input type="radio" v-model="newFourthStepFree" v-bind:value="true">Yes
          
            <input type="radio" v-model="newFourthStepFree" v-bind:value="false">No
          </h2>
        </div>

        <div v-if="newFourthStepFree">
          <h1>Great! Good for you!</h1>
        </div>
        <div v-if="newFourthStepFree == false">
          <p>If I did not, <strong>YET,</strong> get the promises above, at least to set myself free of this specific inventory issue, it is highly recommended to ask my sponsor if it is the next right thing for me to <strong>redo steps 4-9</strong> on this inventory.<br> <strong>THE PROMISES WILL COME!</strong></p>
        </div>
        <br>
      </div>






      <div id="submit-fourth" v-if="newFourthStepTypeDone" style="line-height: 3em">
        
        <br>
        <p>Anytime during writing this inventory you need a break and come back to it later, use this save button </p>
        <button class="create-button" v-on:click="createFourthStep()"><p><strong>Click me! </strong><br> <small>To save this </small><br> <strong>"Fourth Step"</strong></p></button>
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







 