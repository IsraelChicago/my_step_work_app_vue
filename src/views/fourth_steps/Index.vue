<template>
  <div class="fourth-steps-index">
    <div>            
      <div v-for="fourthStep in fourthSteps">
        <p>type_of_fourth: {{ fourthStep.type_of_fourth }} </p>                   
        <p> who: {{ fourthStep.who }} </p>                   
        <p> what: {{ fourthStep.what }} </p>                   
        <p> why: {{ fourthStep.why }} </p>                   
        <p> self_esteem: {{ fourthStep.self_esteem }} </p>                   
        <p> pocket_book: {{ fourthStep.pocket_book }} </p>                   
        <p> ambitions: {{ fourthStep.ambitions }} </p>                   
        <p> personal_relationships: {{ fourthStep.personal_relationships }} </p>    
        <p> physical_security: {{ fourthStep.physical_security }} </p>                   
        <p> emotional_security: {{ fourthStep.emotional_security }} </p>                   
        <p> sex_relationships: {{ fourthStep.sex_relationships }} </p>                   
        <p> fear_solved: {{ fourthStep.fear_solved }} </p>                   
        <p> selfish: {{ fourthStep.selfish }} </p>                   
        <p> dishonest: {{ fourthStep.dishonest }} </p>                   
        <p> self_seeking: {{ fourthStep.self_seeking }} </p>                   
        <p> frightened: {{ fourthStep.frightened }} </p>                   
        <p> selfless: {{ fourthStep.selfless }} </p>                   
        <p> rigorous_honesty: {{ fourthStep.rigorous_honesty }} </p>                   
        <p> hp_seeking: {{ fourthStep.hp_seeking }} </p>                   
        <p> hp_serenity: {{ fourthStep.hp_serenity }} </p>                   
        <p> fifth_done: {{ fourthStep.fifth_done }} </p>                   
        <p> eight_done: {{ fourthStep.eight_done }} </p>                   
        <p> ninth_done: {{ fourthStep.ninth_done }} </p>                   
        <p> free: {{ fourthStep.free }} </p>        
      </div>                      
    </div>
  </div>
</template>

<style>
 
</style>

<script>
import axios from "axios";


export default {
  
  data: function() {
    return {
      
      fourthStep: []
      
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