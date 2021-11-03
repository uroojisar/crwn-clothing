import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAtSTag4EZS1Y-l0Q3OoU0Rd4ygb82iA1E",
    authDomain: "crwn-db-c5514.firebaseapp.com",
    projectId: "crwn-db-c5514",
    storageBucket: "crwn-db-c5514.appspot.com",
    messagingSenderId: "669934105432",
    appId: "1:669934105432:web:5ba30217b2210069bc2b2d"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = userRef.get();

    if (!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        // We use userReference (i.e. documentReference) object to perform CRUD operations
        // calling .set() method on userReference 
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      } catch(error){
        console.log("error creating user, ", error.message);

      }
    }
    return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Allow for signing in with Google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : "select_account"});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;