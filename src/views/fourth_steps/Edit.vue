
<template>
  <div class="fourthSteps-edit">

    <h1>Edit Fourth Step information</h1>

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div>
        <label>Type of Fourth step:</label><br>
        <select class="text-input" v-model="fourthStep.type_of_fourth">
          <option value="resentments">Resentment inventory</option>
          <option value="harms">Harm inventory</option>
          <option value="fears">Fear inventory</option>
        </select>
      </div>
      <br>

      <div>
        <label>Who</label><br>
        <input class="text-input" type="text" placeholder="this is for resentment inventories or harms. Who:" v-model="fourthStep.who"> 
      </div>
      <br>

      <div>
        <label>What</label><br>
        <textarea placeholder="for resentment inventories or harms. What is the story.    For fears. What am I affraid of:" v-model="fourthStep.what"> </textarea>
      </div>
      <br>

      <div>
        <label>Why</label><br>
        <textarea placeholder="FOR FEAR INVENTORIES ONLY. Why am I affraid of it:" v-model="fourthStep.why"></textarea>
      </div>


      <h3>Affects My:</h3> 
      <br>

      <div>
        Self Esteem?
        <br>
        <input type="radio" v-model="fourthStep.self_esteem" v-bind:value="true">Yes  
        <input type="radio" v-model="fourthStep.self_esteem" v-bind:value="false">No
      </div>
      <br>

      <div>
        Pocket Book?
        <br>
        <input type="radio" v-model="fourthStep.pocket_book" v-bind:value="true">Yes 
        <input type="radio" v-model="fourthStep.pocket_book" v-bind:value="false">No
      </div>
      <br>

      <div>
        Ambitions?
        <br>
        <input type="radio" v-model="fourthStep.ambitions" v-bind:value="true">Yes 
        <input type="radio" v-model="fourthStep.ambitions" v-bind:value="false">No
      </div>
      <br>

      <div>
        Personal Relationships?
        <br>
        <input type="radio" v-model="fourthStep.personal_relationships" v-bind:value="true">Yes 
       
        <input type="radio" v-model="fourthStep.personal_relationships" v-bind:value="false">No
      </div>
      <br>

      <div>
        Physical Security?
        <br>
        <input type="radio" v-model="fourthStep.physical_security" v-bind:value="true">Yes 
        <input type="radio" v-model="fourthStep.physical_security" v-bind:value="false">No
      </div>
      <br>

      <div>
        Emotional Security?
        <br>
        <input type="radio" v-model="fourthStep.emotional_security" v-bind:value="true">Yes 
        <input type="radio" v-model="fourthStep.emotional_security" v-bind:value="false">No
      </div>
      <br>

      <div>
        Sex Relationships?
        <br>
        <input type="radio" v-model="fourthStep.sex_relationships" v-bind:value="true">Yes 
        <input type="radio" v-model="fourthStep.sex_relationships" v-bind:value="false">No
      </div>
      <br>


      <h4>For Fear inventories only</h4>
      <div>
        <label>How did fear solve this issue in the past?</label><br>
        <textarea  placeholder="Explain the pros and cons that fear did to you towards something like this in the past:"v-model="fourthStep.fear_solved"> </textarea>
      </div>
      <br>

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
        <textarea placeholder="Dig deep where was I acting out of fear, what was I affraid will happen if I let go?:" v-model="fourthStep.frightened"> </textarea>
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
        <label>How can I now be setteled in the hands of my HP? <br> (opposite of fear) </label><br>
        <textarea placeholder="PUTS:" v-model="fourthStep.hp_serenity"> </textarea>
      </div>
      <br>

            <!-- date -->
      <div>
        Did I complete a solid 5th step on this one?
        <br>
        <input type="radio" v-model="fourthStep.fifth_done" v-bind:value="true">Yes 
        <input type="radio" v-model="fourthStep.fifth_done" v-bind:value="false">No
      </div>
      <br>

          <!-- date -->
      <div>
        Did I complete an 8th step on this one?
        <br>
        <input type="radio" v-model="fourthStep.eight_done" v-bind:value="true">Yes 
        <input type="radio" v-model="fourthStep.eight_done" v-bind:value="false">No
      </div>
      <br>

              <!-- date -->
      <div>
        Did I complete a solid 9th step on this one?
        <br>
        <input type="radio" v-model="fourthStep.ninth_done" v-bind:value="true">Yes 
        <input type="radio" v-model="fourthStep.ninth_done" v-bind:value="false">No
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
          <input type="radio" v-model="fourthStep.free" v-bind:value="true">Yes
        
          <input type="radio" v-model="fourthStep.free" v-bind:value="false">No
        </h2>
      </div>

      <div v-if="fourthStep.free">
        <h1>Great! Good for you!</h1>
      </div>
      <div v-if="fourthStep.free == false">
        <p>If I did not, <strong>YET,</strong> get the promises above, at least to set myself free of this specific inventory issue, it is highly recommended for me to <strong>redo steps 4-9</strong> on this inventory.<br> <strong>THE PROMISES WILL COME!</strong></p>
      </div>
      <br>

      <div>
        <br>
        <div>
          <button class="button-input" type="submit">Update Fourth Step
          </button>
        </div>
      </div>
      <br>
    </form>


    <div>
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
        type_of_fourth: this.fourthStep.type_of_fourth,                   
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
        fear_solved: this.fourthStep.fear_solved,
        selfish: this.fourthStep.selfish,                   
        dishonest: this.fourthStep.dishonest, 
        self_seeking: this.fourthStep.self_seeking,   
        frightened: this.fourthStep.frightened,        
        selfless: this.fourthStep.selfless,                   
        rigorous_honesty: this.fourthStep.rigorous_honesty,  
        hp_seeking: this.fourthStep.hp_seeking, 
        hp_serenity: this.fourthStep.hp_serenity,      
        fifth_done: this.fourthStep.fifth_done,       
        eight_done: this.fourthStep.eight_done,         
        ninth_done: this.fourthStep.ninth_done,          
        free: this.fourthStep.free    
      };
      
      axios.patch("/api/fourth_steps/" + this.fourthStep.id, params).then(response => {
        console.log("Success!", response.data);
        this.$router.push("/fourth_steps/" + this.fourthStep.id);
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    },
    destroyfourthStep: function() {
      
      if(confirm("Do you really want to delete " + this.fourthStep.title + "?"))
      axios.delete("/api/fourth_steps/" + this.fourthStep.id).then(response => {
        console.log("Success!", response.data);
        this.$router.push("/fourth_steps/index");
      });
    }
  }
};
</script>