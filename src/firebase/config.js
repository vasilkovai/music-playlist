import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAHNAj76SfqXunupxVQqjPkkJTiIZDfMx8",
  authDomain: "music-playlist-ee3a9.firebaseapp.com",
  projectId: "music-playlist-ee3a9",
  storageBucket: "music-playlist-ee3a9.appspot.com",
  messagingSenderId: "564863783332",
  appId: "1:564863783332:web:8374f50b64d474edf8f131"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

// export firestore
export { projectAuth, projectFirestore, projectStorage, timestamp }