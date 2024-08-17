import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBcNwVmh9gZ2l35T6AUFKf_WG035wm6WfA", 
  authDomain: "buy-sells-corner-8a5a0.firebaseapp.com",
  projectId: "buy-sells-corner-8a5a0",
  storageBucket: "buy-sells-corner-8a5a0.appspot.com",
  messagingSenderId: "845609637016",
  appId: "1:845609637016:web:fc8db580fc2703b8c5aced",
  measurementId: "G-WJL31GWQWZ"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
