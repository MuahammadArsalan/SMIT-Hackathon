import {  createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"; 




import { auth,db} from "./config.js";
import { storage } from "./config.js";


const firstName=document.querySelector('#firstName')
const lastName=document.querySelector('#lastName')
const email=document.querySelector('#email')
const password=document.querySelector('#password');
const form=document.querySelector('#form');
const registerBtn = document.querySelector('#register-btn');


form.addEventListener('submit',async(event)=>{

event.preventDefault();
    registerBtn.innerHTML = 'Loading....';

    
    
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(async(userCredential) => {
      
      const user = userCredential.user;
      
      console.log(user);
      try{
        console.log(firstName.value,lastName.value,email.value);
        const docRef = await addDoc(collection(db, "Users"), {
          first: firstName.value,
          last: lastName.value,
          email: email.value
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
      
      window.location = './login.html'
    })
    .catch((error) => {
      const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        
      });
    




});











// async function showUrl(files){
// const storageRef= ref(storage,email.value);

// try{

// const uploadImg = await uploadBytes(storageRef,files)
// const url = await getDownloadURL(storageRef)
// console.log(url);
// return url;

// }catch(e){
// console.log(e);

// }


// }







