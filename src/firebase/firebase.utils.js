import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCPRHwcrCgoaa4PjDmBM_E6IUis8UV68Ag",
  authDomain: "ecommercetemplate-336f2.firebaseapp.com",
  databaseURL: "https://ecommercetemplate-336f2.firebaseio.com",
  projectId: "ecommercetemplate-336f2",
  storageBucket: "ecommercetemplate-336f2.appspot.com",
  messagingSenderId: "1067450635149",
  appId: "1:1067450635149:web:80bb09f703f7515b7e63c4",
  measurementId: "G-EBY1KZCTYN",
};

export const createUserProfileDocument = async (userAuth, aditionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...aditionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
