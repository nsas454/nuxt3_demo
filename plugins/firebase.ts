// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { initializeApp } from 'firebase/app'
import { defineNuxtPlugin } from '#app'


export default defineNuxtPlugin( () => {

    const config = useRuntimeConfig()
    const firebaseConfig = {
        apiKey: "AIzaSyDAzaDBLjXZsL7delBnGOhfZbLVYLWKnAI",
        authDomain: "test-bddc4.firebaseapp.com",
        projectId: "test-bddc4",
        storageBucket: "test-bddc4.appspot.com",
        messagingSenderId: "996449484814",
        appId: "1:996449484814:web:4fe6d7b97ba62ef7adfc5f",
        measurementId: "G-CJP5XFHRR6"
    }

    initializeApp(firebaseConfig)
})