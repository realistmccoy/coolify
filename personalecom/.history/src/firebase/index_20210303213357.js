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

const firestore = firebase.firestore()

const createUserProfileDocument = async (userAuth, additional) => {

}

export {
  firestore,
}