<template>
  <div class="fourth-steps-new">

    <h1 class="text-center">New Fourth Step Inventory</h1>

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>


    <form>
      <div>
        <label>Type of Fourth step:</label><br>
        <select class="text-input" v-model="newFourthStepTypeOfFourth">
          <option value="resentments">Resentment inventory</option>
          <option value="harms">Harm inventory</option>
          <option value="fears">Fear inventory</option>
        </select>
      </div>
      <br>

      <div>
        <label>Who</label><br>
        <input class="text-input" type="text" placeholder="this is for resentment inventories or harms. Who:" v-model=" newFourthStepWho"> 
      </div>
      <br>

      <div>
        <label>What</label><br>
        <textarea placeholder="for resentment inventories or harms. What is the story.    For fears. What am I affraid of:" v-model="newFourthStepWhat"> </textarea>
      </div>
      <br>

      <div>
        <label>Why</label><br>
        <textarea placeholder="FOR FEAR INVENTORIES ONLY. Why am I affraid of it:" v-model="newFourthStepWhy"></textarea>
      </div>


      <h3>Affects My:</h3> 
      <br>

      <div>
        Self Esteem?
        <br>
        <input type="radio" v-model="newFourthStepSelfEsteem" v-bind:value="true">Yes  
        <input type="radio" v-model="newFourthStepSelfEsteem" v-bind:value="false">No
      </div>
      <br>

      <div>
        Pocket Book?
        <br>
        <input type="radio" v-model="newFourthStepPocketBook" v-bind:value="true">Yes 
        <input type="radio" v-model="newFourthStepPocketBook" v-bind:value="false">No
      </div>
      <br>

      <div>
        Ambitions?
        <br>
        <input type="radio" v-model="newFourthStepAmbitions" v-bind:value="true">Yes 
        <input type="radio" v-model="newFourthStepAmbitions" v-bind:value="false">No
      </div>
      <br>

      <div>
        Personal Relationships?
        <br>
        <input type="radio" v-model="newFourthStepPersonalRelationships" v-bind:value="true">Yes 
       
        <input type="radio" v-model="newFourthStepPersonalRelationships" v-bind:value="false">No
      </div>
      <br>

      <div>
        Physical Security?
        <br>
        <input type="radio" v-model="newFourthStepPhysicalSecurity" v-bind:value="true">Yes 
        <input type="radio" v-model="newFourthStepPhysicalSecurity" v-bind:value="false">No
      </div>
      <br>

      <div>
        Emotional Security?
        <br>
        <input type="radio" v-model="newFourthStepEmotionalSecurity" v-bind:value="true">Yes 
        <input type="radio" v-model="newFourthStepEmotionalSecurity" v-bind:value="false">No
      </div>
      <br>

      <div>
        Sex Relationships?
        <br>
        <input type="radio" v-model="newFourthStepSexRelationships" v-bind:value="true">Yes 
        <input type="radio" v-model="newFourthStepSexRelationships" v-bind:value="false">No
      </div>
      <br>


      <h4>For Fear inventories only</h4>
      <div>
        <label>How did fear solve this issue in the past?</label><br>
        <textarea  placeholder="Explain the pros and cons that fear did to you towards something like this in the past:"v-model="newFourthStepFearSolved"> </textarea>
      </div>
      <br>

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
        <textarea placeholder="Dig deep where was I acting out of fear, what was I affraid will happen if I let go?:" v-model="newFourthStepFrightened"> </textarea>
      </div>
      <br>

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
        <label>How can I now be setteled in the hands of my HP? <br> (opposite of fear) </label><br>
        <textarea placeholder="PUTS:" v-model="newFourthStepHpSerenity"> </textarea>
      </div>
      <br>

<!-- date -->
      <div>
        Did I complete a solid 5th step on this one?
        <br>
        <input type="radio" v-model="newFourthStepFifthDone" v-bind:value="true">Yes 
        <input type="radio" v-model="newFourthStepFifthDone" v-bind:value="false">No
      </div>
      <br>

<!-- date -->
      <div>
        Did I complete an 8th step on this one?
        <br>
        <input type="radio" v-model="newFourthStepEightDone" v-bind:value="true">Yes 
        <input type="radio" v-model="newFourthStepEightDone" v-bind:value="false">No
      </div>
      <br>

<!-- date -->
      <div>
        Did I complete a solid 9th step on this one?
        <br>
        <input type="radio" v-model="newFourthStepNinthDone" v-bind:value="true">Yes 
        <input type="radio" v-model="newFourthStepNinthDone" v-bind:value="false">No
      </div>
      <br>
      <br>


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
        <h3>Was I set compleatly free<br>of this specific inventory<br>through this step work?</h3>
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
        <p>If I did not, <strong>YET,</strong> get the promises above, at least to set myself free of this specific inventory issue, it is highly recommended for me to <strong>redo steps 4-9</strong> on this inventory.<br> <strong>THE PROMISES WILL COME!</strong></p>
      </div>
      <br>

      <div>
        <br>
        <button class="button-input" v-on:click="createFourthStep()"><h3>Click here to save this "Fourth Step"</h3></button>
      </div>
      <br>
    </form>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      
      newFourthStepTypeOfFourth: "",
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
        type_of_fourth: this.newFourthStepTypeOfFourth,
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
        this.newFourthStepTypeOfFourth = "";
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
    }

  }
};
</script>







 