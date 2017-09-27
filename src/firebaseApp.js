import Firebase from 'firebase'
// Initialize Firebase
const config = {
    apiKey: "AIzaSyDsc4CtLFZBkjIvs9oQyu2wkwmBtcEm9Nc",
    authDomain: "turnout-vuejs.firebaseapp.com",
    databaseURL: "https://turnout-vuejs.firebaseio.com",
    projectId: "turnout-vuejs",
    storageBucket: "",
    messagingSenderId: "763810493759"
};


export const firebaseApp = Firebase.initializeApp(config)