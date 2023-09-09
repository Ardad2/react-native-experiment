import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAUuZUgvlmMYBOl_Kg43Eb2sHnEJp4_us4",
  authDomain: "sandler-cookbook.firebaseapp.com",
  projectId: "sandler-cookbook",
  storageBucket: "sandler-cookbook.appspot.com",
  messagingSenderId: "519878306197",
  appId: "1:519878306197:web:4fe836d84e5caae16dae9c",
  measurementId: "G-PF1Q3WHM3P"
};



if (!firebase.apps.length)
{
firebase.initializeApp(firebaseConfig);
}

export {firebase}


/*/
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAUuZUgvlmMYBOl_Kg43Eb2sHnEJp4_us4",
  authDomain: "sandler-cookbook.firebaseapp.com",
  projectId: "sandler-cookbook",
  storageBucket: "sandler-cookbook.appspot.com",
  messagingSenderId: "519878306197",
  appId: "1:519878306197:web:4fe836d84e5caae16dae9c",
  measurementId: "G-PF1Q3WHM3P"
};

// Initialize Firebase

if(!firebase.apps.length)
{
initializeApp(firebaseConfig);
}
*/
