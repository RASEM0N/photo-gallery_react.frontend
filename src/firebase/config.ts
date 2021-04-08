import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: 'AIzaSyA1gcJUcfIc552yeEbTayvLM1S217knlFg',
    authDomain: 'rs-ts--ph-gallery.firebaseapp.com',
    projectId: 'rs-ts--ph-gallery',
    storageBucket: 'rs-ts--ph-gallery.appspot.com',
    messagingSenderId: '436553531366',
    appId: '1:436553531366:web:96d728013e7f47002b2027',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// storage
const fbStorage: firebase.storage.Storage = firebase.storage()
// firestore
const fbFirestore: firebase.firestore.Firestore = firebase.firestore()
// now date
const timestamp: Function = firebase.firestore.FieldValue.serverTimestamp

export { fbStorage, fbFirestore, timestamp }
