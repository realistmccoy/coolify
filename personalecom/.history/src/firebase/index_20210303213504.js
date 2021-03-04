import firebase from 'firebase/app';
import 'firebase/firestore'; // for the db

const config = {
	apiKey: 'AIzaSyAV1t0PQwH9GpqHy9Aw7XKMLyM1HBbaCGw',
	authDomain: 'coolify-31d43.firebaseapp.com',
	projectId: 'coolify-31d43',
	storageBucket: 'coolify-31d43.appspot.com',
	messagingSenderId: '1002075277448',
	appId: '1:1002075277448:web:bc13b163e21c4ba108b73d',
};


firebase.initializeApp(config);

const firestore = firebase.firestore();
const auth = firebase.auth();

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) { return };

  const userRef = firestore.doc(`users/${userAuth.uid}`) //users/uniq26535
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

export {
  firestore,
  createUserProfileDocument,
  auth,
}