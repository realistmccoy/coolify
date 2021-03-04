const firebaseAdmin = require('firebase-admin')
firebaseAdmin.initializeApp()

const db = firebaseAdmin.firestore();
const auth = firebaseAdmin.A