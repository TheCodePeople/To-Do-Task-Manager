
export function getFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyBIAbH6ujiJAs6k_dvl3iGZdUoMBF_BWmo",
    authDomain: "to-do-list-dbe1d.firebaseapp.com",
    projectId: "to-do-list-dbe1d",
    storageBucket: "to-do-list-dbe1d.appspot.com",
    messagingSenderId: "442867229431",
    appId: "1:442867229431:web:ca12328562fa2a94b2a9f2",
  };
  const fairBaseApp = firebase.initializeApp(firebaseConfig);
  const db = fairBaseApp.firestore();
  return db;
}
getFirebase();
