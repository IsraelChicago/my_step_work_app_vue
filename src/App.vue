<template>
  <div id="app">
    <br>
    <div>
      <nav id="main-nav" role="navigation">
        <ul>
          <li>
            <router-link to="/">     Home</router-link>
          </li>


          <li>
            <router-link to="/addictions/">
              Addiction
            </router-link>
          </li>

          <li v-if="isLoggedIn()">
            <router-link to="/fourth_steps/">
              Fourth Steps
            </router-link> 
          </li>

          <li v-if="isLoggedIn()">
            <router-link to="/step_works/">
              Step Work
            </router-link>
          </li>

          <li v-if="isLoggedIn()">
            <router-link to="/users/show">
              Profile
            </router-link>
          </li>


          <li>
            <router-link to="/about">
              About
            </router-link>
          </li>


          <li v-if="isLoggedIn()">
            <router-link to="/logout">Logout {{ username }}</router-link>
          </li>


          <li v-if="!isLoggedIn()">
            <router-link to="/login">Login</router-link>
          </li>


          <li v-if="!isLoggedIn()" class="cta">
            <router-link to="/signup">Sign Up</router-link>
          </li>


        </ul>
    </nav>

      <br>
      <br>


      
    </div>
    <router-view/>
  </div>
</template>

<style>

  button:hover{
    background-color:red;
  }

  #three-columns-a{
    float:left;
    width:40%;
    border:2px solid #ccc;
    padding:10px;
    box-sizing:border-box;
    display: block;
    
  }
  #three-columns-b{
    float:left;
    width:40%;
    border:2px solid #ccc;
    padding:10px;
    box-sizing:border-box;
    display: block;
    
  }
  #three-columns-c{
    float:left;
    width:20%;
    border:2px solid #ccc;
    padding:10px;
    box-sizing:border-box;
    display: block;
    
  }

  #welcome {
  background-color: yellow;
    color: green;
    font-family:Arial, Helvetica, sans-serif;
    font-size:25px;
    font-weight: 1000;
    line-height:3.4em;
    width: 100%;
    margin: auto; 
    padding: 10px;
  }

  #app {
    font-family: Arial, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    }
  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }


#main-nav{
  background-color:#333;
  color:#fff;
  height: 80px

}

#main-nav ul{
  padding: 30px;
  margin-top: 40;
  list-style: none;
}

#main-nav li{
  display:inline;
}

#main-nav a{
  color:#fff;
  text-decoration: none;
  font-size:25px;
  padding:30px;
}

.clr{
  clear:both;
}

.three-columns{
  float:left;
  width:70%;
  padding:15px;
  box-sizing: border-box;
}

  #ready  {
    background-color: yellow;
    padding: 10px red;
    color: blue; 
  }

  #beginning  {
    color: red; 
  }

  .new-step {
    background-color: green;
    
  }

  .new-step h1{
    color: white; 
    font-size: 90px
    line-height 4.5em
  }

  .type-of-fourth  {
    background-color: lightgrey;
  }


  #first-three-coulmns {

  }


  #for-fear-only {

  }


  #fourth-column {

  }


  #fifth-column {

  }


  #ask-yourself {

  }


  #am-i-free {

  }


  #submit-fourth {

  }


  #update-fourth {

  }





  #type-of-fourth-show {
    
  }


  #first-three-coulmns-show {
    
  }


  #for-fear-only-show {

  }


  #fourth-column-show {

  }

    
  #fifth-column-show {

  }

      

  #fifth-done-show {

  }

        
  #eight-done-show {

  }

          
  #ninth-done-show {

  }


  body{
    background-color:#f4f4f4;
    color: black;
    font-family:Arial, Helvetica, sans-serif;
    font-size:16px;
    line-height:1.6em;
    width: 90%;
    margin: auto; 
  }
  textarea {
    width: 70%;
    height: 200px;
  }

  .text-input {
    width: 300px;
    height: 50px;
  }


  .button-input {
    width: 240px;
    height: 60px;
    background-color: grey; 
    border: 2px solid black; 
    border-radius: 10px;
    color: white;
    padding: 4px 4px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 17px;
  }

  .create-button {
    padding: 0;
    height: 120px;
    line-height: 1.6em;
    background-color: green;
    width: 240px;
    border: 2px solid black; 
    border-radius: 10px;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
  }

  button {
    margin-bottom: 50px; 
    height: 35px
    
  }

  


  /*@media(max-width:600px){
  
  #three-columns-a{
    width:100%;
    float:none;

  #three-columns-b{
    width:100%;
    float:none;
  }
  #three-columns-c{
    width:100%;
    float:none;
  }
}*/


</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      username: localStorage.getItem('username'),
      user: {}
    };
  },
  created: function() {
    axios.get("/api/users/me").then(response => {
      this.user = response.data;
      console.log(this.user);
    });
  },
  methods: {
    isLoggedIn: function() {
      if (localStorage.getItem('jwt')) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
