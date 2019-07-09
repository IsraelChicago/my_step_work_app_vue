<template>
  <div class="fourth-steps-show">
    <div class="container">

      <small>Type of Fourth step: </small><br>
      <p> {{ fourthStep.type_of_fourth }} </p>
      <small> Who</small><br>
      <p> {{ fourthStep.who }} </p>

      <small> What:</small><br>
      <p> {{ fourthStep.what }} </p>

      <small>Why:</small><br>
      <p> {{ fourthStep.why }} </p>

      <h5>Affects my:</h5>

      
      <p v-if="fourthStep.self_esteem"> Self Esteem </p>

      <small> Pocket Book?</small><br>
      <p> {{ fourthStep.pocket_book}} </p>

      <small> Ambitions? </small><br>
      <p> {{ fourthStep.ambitions }} </p>

      <small> Personal Relationships?</small><br>
      <p> {{ fourthStep.personal_relationships }} </p>

      <small> Physical Security?</small><br>
      <p> {{ fourthStep.physical_security }} </p>

      <small> Emotional Security?</small><br>
      <p> {{ fourthStep.emotional_security }} </p>

      <small> Sex Relationships?</small><br>
      <p> {{ fourthStep.sex_relationships }} </p>

      <small> How did fear solve this issue in the past?</small><br>
      <p> {{ fourthStep.fear_solved }} </p>

      <small> Where was I selfish?</small><br>
      <p> {{ fourthStep.selfish }} </p>

      <small> Where was I dishonest?</small><br>
      <p> {{ fourthStep.dishonest }} </p>

      <small> Where was I self seeking?</small><br>
      <p> {{ fourthStep.self_seeking }} </p>

      <small> Where was I Frightened?</small><br>
      <p> {{ fourthStep.frightened }} </p>

      <small> How can I now be Selfless?</small><br>
      <p> {{ fourthStep.selfless }} </p>

      <small> How can I now be Rigorous Honest?</small><br>
      <p> {{ fourthStep.rigorous_honesty }} </p>

      <small> How can I now be "HP seeking"?</small><br>
      <p> {{ fourthStep.hp_seeking }} </p>

      <small> How can I now be setteled in the hands of my HP?</small><br>
      <p> {{ fourthStep.hp_serenity }} </p>
      
      <div>
        <p v-if="fourthStep.fifth_done"> Great! <br> A "Fifth Step" was succesfully done. <br> What am I doing next for my recovery? </p>
        <p v-if="!fourthStep.fifth_done"> Did I complete a solid 5th step on this one? </p>
      </div>


      <div>
        <p v-if="fourthStep.eight_done"> Great! <br> An "Eight Step" was succesfully done. <br> What am I doing next for my recovery? </p>
        <p v-if="!fourthStep.eight_done"> Did I complete a solid 8th step on this one? </p>
      </div>

      <div>
        <p v-if="fourthStep.ninth_done"> Great! <br> A "Ninth Step" was succesfully done.</p> 
        <br>
        <h3> What a relief! </h3>
        <p v-if="!fourthStep.ninth_done"> Did I complete a solid 8th step on this one? </p>
      </div>

      

      <small> Did I complete an 8th step on this one?</small><br>
      <p> {{ fourthStep.eight_done }} </p>

      <small> Did I complete a solid 9th step on this one?</small><br>
      <p> {{ fourthStep.ninth_done }} </p>

      <small> Was I set compleatly free of this specific inventory through this step work?</small><br>
      <p> {{ fourthStep.free }} </p>


      <router-link v-bind:to="'/fourth_steps/' + fourthStep.id + '/edit'">
        <button>Edit Recovery Information</button>
      </router-link>


      
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