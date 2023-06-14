// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAsH7dcV-FuDaZG3x9oCWeIKldfREmmMps',
	authDomain: 'inventario-297a1.firebaseapp.com',
	projectId: 'inventario-297a1',
	storageBucket: 'inventario-297a1.appspot.com',
	messagingSenderId: '1007641216607',
	appId: '1:1007641216607:web:fdcc86e53024bb66cc3dea',
	measurementId: 'G-042E20STRW',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, analytics, db, storage };
