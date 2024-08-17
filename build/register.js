import {  createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {  collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

import { ref, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js';


import { auth,db} from "./config.js";
import { storage } from "./config.js";


const firstName=document.querySelector('#firstName')
const lastName=document.querySelector('#lastName')
const email=document.querySelector('#email')
const password=document.querySelector('#password');
const profileImage = document.querySelector('#profile-image');
const registerBtn = document.querySelector('#register-btn');


registerBtn.addEventListener('click',async(event)=>{
    event.preventDefault();

    registerBtn.innerHTML = 'Loading....';

    
    console.log(profileImage.files[0]);
    const profileImageUrl = await showUrl(profileImage.files[0])
window.location = './login.html'
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(async(userCredential) => {
      
      const user = userCredential.user;
      
      console.log(user);
      
      try {
        const docRef = await addDoc(collection(db, "users"), {
          firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    profileImage:profileImageUrl,

  });

  
} catch (e) {
  console.error("Error adding document: ", e);
}





    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        
      });
    




});

async function showUrl(files){
const storageRef= ref(storage,email.value);

try{

const uploadImg = await uploadBytes(storageRef,files)
const url = await getDownloadURL(storageRef)
console.log(url);
return url;

}catch(e){
console.log(e);

}


}







