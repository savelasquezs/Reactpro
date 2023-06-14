import {
	createUserWithEmailAndPassword,
	updateProfile,
	sendEmailVerification,
	signOut,
} from 'firebase/auth';
import { auth } from '../firebaseConfig';
const createAccount = (email, password, name) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then((credential) => {
			updateProfile(credential.user, { displayName: name }).catch((err) =>
				console.log(err)
			);
			const configuration = { url: 'http://localhost:5173/login' };
			sendEmailVerification(credential.user, configuration).catch((err) =>
				console.log(err)
			);
			signOut(auth).catch((err) => console.log(err));
			alert(`Bienvenido ${name}`);
		})
		.catch((err) => alert(err));
};

export { createAccount };
