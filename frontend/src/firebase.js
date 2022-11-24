// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBt-QiXzw48DPngkp5oAisZQPkzEHTOINs',
    authDomain: 'mystockplug.firebaseapp.com',
    projectId: 'mystockplug',
    storageBucket: 'mystockplug.appspot.com',
    messagingSenderId: '673485161324',
    appId: '1:673485161324:web:5cab4a7cf04e8439f72949'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
