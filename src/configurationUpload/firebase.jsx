// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBLBuG3gRmUsUIIOR06GA3n9soA5R-9y5M',
  authDomain: 'uploadingfile-597dd.firebaseapp.com',
  projectId: 'uploadingfile-597dd',
  storageBucket: 'uploadingfile-597dd.appspot.com',
  messagingSenderId: '427283562357',
  appId: '1:427283562357:web:20c2b64e51521fc5dfdd3c'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
