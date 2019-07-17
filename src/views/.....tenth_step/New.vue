<template> 
  <div class="tenth-step-new">
 
    <form>


      <div>
        <div>
          <br>
          <h1>
            New Tenth Step Inventory
          </h1>        
          <br>
        </div>


        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>


        
            <div>
              <br>
              <h3>Start your Tenth step:</h3> 
            <input type="radio" v-model="newFourthStepTenthStep" v-bind:value="true">
          </div> 
            <br>
            <br>
          </div>
          

     
        
          <!-- date started -->
          
      <div v-if="newFourthStepTenthStep">
        <div>

          
          <section>

            <div>
              <label><strong>Who</strong></label><br>
              <input type="text" class="text-input"  v-model=" newFourthStepWho"></input>
            </div>

            <br>
            <div>
              <label><strong>What</strong></label><br>
              <input type="text" class="text-input"  v-model=" newFourthStepWhat"></input>
            </div>

            <br>
            <div>
              <label><strong>Why</strong></label><br>
              <input type="text" class="text-input"  v-model=" newFourthStepWhy"></input>
            </div>

            <br>
          </section>
            
          <section>
            
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
        </section>
              
              
              
           
    


        <!-- date completed first three columns -->




      <div>
        
        

          <div>
            <label>Where was I selfish?</label><br>
            <input v-model="newFourthStepSelfish"> </input>
          </div>
          <br>

          <div>
            <label>Where was I dishonest?</label><br>
            <input v-model="newFourthStepDishonest"> </input>
          </div>
          <br>

          <div>
            <label>Where was I self seeking?</label><br>
            <input v-model="newFourthStepSelfSeeking"> </input>
          </div>
          <br>

          <div>
            <label>Where was I Frightened?</label><br>
            <input v-model="newFourthStepFrightened"> </input>
          </div>
          <br>
        </div>

        <div >
            


          
          <div>
            <label>How did fear solve this issue in the past?</label><br>
            <input  v-model="newFourthStepFearSolved"> </input>
          </div>
          <br>
        </div>
      </div>


         <!-- date completed fourth column -->
      <div id="fifth-column" >
        


        <div>
          <label>How can I now be Selfless? <br>(opposite of selfish) </label><br>
          <input v-model="newFourthStepSelfless"> </input>
        </div>
        <br>

        <div>
          <label>How can I now be Rigorous Honest? <br>(opposite of dishonest) </label><br>
          <input  v-model="newFourthStepRigorousHonesty"> </input>
        </div>
        <br>

        <div>
          <label>How can I now be "HP seeking"? <br>(opposite of self seeking) </label><br>
          <input v-model="newFourthStepHpSeeking"> </input>
        </div>
        <br>

        <div>
          <label>How can I now be settled in the hands of my HP? <br> (opposite of fear) </label><br>
          <input v-model="newFourthStepHpSerenity"> </input>
        </div>
        <br>
        
      </div>

         

      <div>

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

        
      </div>


          <!-- date completed ninth step -->



      <div>
        <h2>Am I getting the promises?</h2>

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






      <div>
        
        <br>
        <p>Anytime during writing this inventory you need a break and come back to it later, use this save button </p>
        <button class="create-button" v-on:click="createFourthStep()"><p><strong>Click me! </strong><br> <small>To save this </small><br> <strong>"Tenth Step"</strong></p></button>
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
      
      newFourthStepTenthStep: "",

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
      

      newFourthStepFearSolved: "",
      newFourthStepSelfish: "",
      newFourthStepDishonest: "",
      newFourthStepSelfSeeking: "",
      newFourthStepFrightened: "",
     
      
      newFourthStepSelfless: "",
      newFourthStepRigorousHonesty: "",
      newFourthStepHpSeeking: "",
      newFourthStepHpSerenity: "",
      
      

      newFourthStepFifthDone: "",
      newFourthStepEightDone: "",
      newFourthStepNinthDone: "",
     

      newFourthStepFree: "",
      errors: []
    };
  },
  created: function() {
  },
  methods: {
    createFourthStep: function() {
      var params = {
        
        
        tenth_step: this.newFourthStepTenthStep,
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
        


        fear_solved: this.newFourthStepFearSolved,
        selfish: this.newFourthStepSelfish,
        dishonest: this.newFourthStepDishonest,
        self_seeking: this.newFourthStepSelfSeeking,
        frightened: this.newFourthStepFrightened,
        

        
        selfless: this.newFourthStepSelfless,
        rigorous_honesty: this.newFourthStepRigorousHonesty,
        hp_seeking: this.newFourthStepHpSeeking,
        hp_serenity: this.newFourthStepHpSerenity,
        

        fifth_done: this.newFourthStepFifthDone,
        eight_done: this.newFourthStepEightDone,
        ninth_done: this.newFourthStepNinthDone,
        

        free: this.newFourthStepFree,
        };
      axios.post("/api/fourth_steps", params).then(response => {
        this.fourth_steps.push(response.data);

        
        this.newFourthStepWho = "";
        this.newFourthStepTenthStep = "";
        this.newFourthStepWhat = "";
        this.newFourthStepWhy = "";
        this.newFourthStepSelfEsteem = "";
        this.newFourthStepPocketBook = "";
        this.newFourthStepAmbitions = "";
        this.newFourthStepPersonalRelationships = "";
        this.newFourthStepPhysicalSecurity = "";
        this.newFourthStepEmotionalSecurity = "";
        this.newFourthStepSexRelationships = "";
        

        

        this.newFourthStepFearSolved = "";


        this.newFourthStepSelfish = "";
        this.newFourthStepDishonest = "";
        this.newFourthStepSelfSeeking = "";
        this.newFourthStepFrightened = "";
        

        this.newFourthStepSelfless = "";
        this.newFourthStepRigorousHonesty = "";
        this.newFourthStepHpSeeking = "";
        this.newFourthStepHpSerenity = "";
       


        this.newFourthStepFifthDone = "";
        this.newFourthStepEightDone = "";
        this.newFourthStepNinthDone = "";
       


        this.newFourthStepFree = "";
      })
      this.$router.push("/fourth_steps/");
    },

    }
  };
</script>







 