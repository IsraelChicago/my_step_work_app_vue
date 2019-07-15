<template>
  <div class="fourth-steps-show">
    <div class="container">

      <div id="type-of-fourth-show">
        <small>Type of Fourth step: </small><br>
        <p> {{ fourthStep.type_of_fourth }} </p>
      </div>




      <div id="first-three-coulmns-show">
        <small> Who</small><br>
        <p> {{ fourthStep.who }} </p>

        <small> What:</small><br>
        <p> {{ fourthStep.what }} </p>

        <div v-if="fourthStep.fear">
          <small>Why:</small><br>
          <p> {{ fourthStep.why }} </p>
        </div>
        <br>
        <br>

        <h5>Affects my:</h5>
        
        <p v-if="fourthStep.self_esteem"> Self Esteem </p>
        <p v-if="fourthStep.pocket_book"> Pocket Book </p>
        <p v-if="fourthStep.ambitions"> Ambitions </p>
        <p v-if="fourthStep.personal_relationships"> Personal Relationships </p>
        <p v-if="fourthStep.physical_security"> Physical Security </p>
        <p v-if="fourthStep.emotional_security"> Emotional Security </p>
        <p v-if="fourthStep.sex_relationships"> Sex Relationships </p>
      </div>

      <br>
      <br>


      <div id:="for-fear-only-show">
        <small> How did fear solve this issue in the past?</small><br>
        <p> {{ fourthStep.fear_solved }} </p>
      </div>




      <div id="fourth-column-show">
        <small> Where was I selfish?</small><br>
        <p> {{ fourthStep.selfish }} </p>

        <small> Where was I dishonest?</small><br>
        <p> {{ fourthStep.dishonest }} </p>

        <small> Where was I self seeking?</small><br>
        <p> {{ fourthStep.self_seeking }} </p>

        <small> Where was I Frightened?</small><br>
        <p> {{ fourthStep.frightened }} </p>
      </div>







      <div id="fifth-column-show">
        <small> How can I now be Selfless?</small><br>
        <p> {{ fourthStep.selfless }} </p>

        <small> How can I now be Rigorous Honest?</small><br>
        <p> {{ fourthStep.rigorous_honesty }} </p>

        <small> How can I now be "HP seeking"?</small><br>
        <p> {{ fourthStep.hp_seeking }} </p>

        <small> How can I now be setteled in the hands of my HP?</small><br>
        <p> {{ fourthStep.hp_serenity }} </p>
      </div>


        <div id="fifth-done-show">
          <p v-if="fourthStep.fifth_done"> <strong> Great! </strong> <br> A <strong> "Fifth Step"</strong>  was succesfully done. <br> What am I doing next for my recovery? </p>
          <p v-if="!fourthStep.fifth_done"> When am I planing to complete a solid 5th step on this one? </p>
        </div>


        <div id="eight-done-show">
          <p v-if="fourthStep.eight_done"> <strong> Great! </strong> <br> An <strong> "Eight Step"</strong>  was succesfully done. <br> What am I doing next for my recovery? </p>
          <p v-if="!fourthStep.eight_done"> When am I planing to complete a solid 8th step on this one? </p>
        </div>

        <div id="ninth-done-show">
          <p v-if="fourthStep.ninth_done"> <strong> Great! </strong> <br> A <strong> "Ninth Step"</strong>  was succesfully done. </p>
          <h4 v-if="fourthStep.ninth_done">After a complete 9th step, I may feel great!</h4>
          <p v-if="!fourthStep.ninth_done"> When am I planing to complete a solid 9th step on this one? </p>
        </div>

        <br>
        

        

        
        <div >
          <div v-if="!fourthStep.free"> 
            <h2>
              I DO NOT WANT TO MISS OUT! 
            </h2>
            <p>
              I have a promise that this work, if done right, will set me compleatly free! <br> At least free of this specific inventory item!!!
            </p>
          </div>

          <div v-if="fourthStep.free"> 
            <p>
               "I WAS SET FREE!"
            </p> 
            <h1>
              GREAT! 
            </h1> 

            <h3>
              I have recieved grace from my HP.
            </h3>

            <h4>
               "What a miraculous feeling of releif!"
            </h4> 
            <h3>
              Keep on trudging the road to a happy destiny
            </h3>

          </div>
        </div>
        <br>
        <br>

        <router-link  v-bind:to="'/fourth_steps/' + fourthStep.id + '/edit'">
          <button class="button-input">Edit this Fourth Step</button>
        </router-link>
        <br>
        <br>
        <router-link  v-bind:to="'/fourth_steps'">
          <button class="button-input">Back to all fourth steps page</button>
        </router-link>
    
    </div>
    <br>
        <br>
        <br>     
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