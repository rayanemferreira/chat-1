//esse é o arquivo principal, onde tem toda a configuraçao para usar o firebase
// pra vc baixar todas as dependencia desse projeto coloca no terminal: npm i 
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = {
    apiKey: "AIzaSyC1W4_EZj55bH-Cq9bnbhHUm9JH7h2OAxs",
    authDomain: "chat-react-9d657.firebaseapp.com",
    projectId: "chat-react-9d657",
    storageBucket: "chat-react-9d657.appspot.com",
    messagingSenderId: "106814898523",
    appId: "1:106814898523:web:09fb341c7aad74dfa7da7e"
  };

  
const app = initializeApp(firebaseApp);

const auth = getAuth(app);

const db = getFirestore(app);

export { app, auth, db }