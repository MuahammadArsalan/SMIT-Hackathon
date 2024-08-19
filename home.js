import {  onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


import { auth } from "./config.js";





let loginBtn = document.querySelector('#login-btn');
let div = document.querySelector('#container');
let ReadBtn = document.querySelectorAll('#read-moreBtn');

let arr= [];


console.log(ReadBtn);
ReadBtn.forEach((btn)=>{
btn.addEventListener('click',()=>{
alert('Login Please')
      window.location =' login.html'
    
})


})


loginBtn.addEventListener('click',(event)=>{


    window.location = './login.html'
})




