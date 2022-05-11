import config from './config';

import firebase from  'firebase/compat/app';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
});

export const auth = config[process.env.NODE_ENV || "development"].auth(() => app.auth());

export default app;

/*
MPUrBAmJpWWjtsBlWa02h4cSI1H2
admin@mail.com
password
*/