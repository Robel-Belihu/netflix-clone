import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCBZHvFLAIHB2ZCcNaeZ_ZY20a0wZy2E0M",
    authDomain: "netflix-clone-8fda1.firebaseapp.com",
    projectId: "netflix-clone-8fda1",
    storageBucket: "netflix-clone-8fda1.appspot.com",
    messagingSenderId: "779930379236",
    appId: "1:779930379236:web:9fb4b13d79c72295c3ddf1"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();


export function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export { auth };