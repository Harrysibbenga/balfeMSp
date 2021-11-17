import firebase from "firebase/app";
import "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import "firebase/analytics";

// firebase init goes here
const config = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_APP_ID,
    measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const currentUser = auth.currentUser;
const fbApiKey = config.apiKey
const fbDbURL = config.databaseURL

// firebase collections
const historicCollection = db.collection("historic");
const postsCollection = db.collection("posts");
const mediaCollection = db.collection("media");
const usersCollection = db.collection("users");
const driversCollection = db.collection("drivers");
const calenderRounds = db.collection("calender");
const imageUrlCollection = db.collection('images');
const partnersCollection = db.collection('partners');
const logosCollection = db.collection('logos');
const videosCollection = db.collection('videos');
const galleryCollection = db.collection('gallery');
const tracksCollection = db.collection("tracks");
const driversImagesCollection = db.collection("driver_images");
const tracksImagesCollection = db.collection("track_images");

export {
    auth,
    storage,
    currentUser,
    fbApiKey,
    fbDbURL,
    usersCollection,
    postsCollection,
    historicCollection,
    mediaCollection,
    driversCollection,
    calenderRounds,
    imageUrlCollection,
    driversImagesCollection,
    tracksImagesCollection,
    logosCollection,
    partnersCollection,
    videosCollection,
    galleryCollection,
    tracksCollection
};