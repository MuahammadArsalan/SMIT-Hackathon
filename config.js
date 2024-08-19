import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9dm9xIGct_-QTzWa-1gc9J-eCJeyCwNc",
  authDomain: "smit-hackathon-3d5fd.firebaseapp.com",
  projectId: "smit-hackathon-3d5fd",
  storageBucket: "smit-hackathon-3d5fd.appspot.com",
  messagingSenderId: "513747472098",
  appId: "1:513747472098:web:7cfc1a07ea6cb9aead18bb",
  measurementId: "G-SN7TH4TP0E"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
