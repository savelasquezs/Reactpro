import {
	createUserWithEmailAndPassword,
	updateProfile,
	sendEmailVerification,
	signOut,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	FacebookAuthProvider,
	sendPasswordResetEmail,
} from 'firebase/auth';
import { redirect } from 'react-router-dom';
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

const authCuentaGoogle = () => {
	const providerGoogle = new GoogleAuthProvider();
	signInWithPopup(auth, providerGoogle).then((result) => {
		console.log(result);
		console.log(result.user);
	});
};
const authCuentaFacebook = () => {
	const providerFacebook = new FacebookAuthProvider();
	signInWithPopup(auth, providerFacebook).then((result) => {
		console.log(result);
		console.log(result.user);
	});
};

const sendPasswordReset = (email) => {
	sendPasswordResetEmail(auth, email)
		.then((result) => console.log(result))
		.catch((err) => alert(err));
};

const logIn = (email, password) => {
	signInWithEmailAndPassword(auth, email, password)
		.then((result) => {
			alert(`Welcome ${result.user.displayName}`);
			redirect('/miguel');
		})
		.catch((err) => {
			alert(err.code);
			console.log(err.code);
		});
};

export {
	createAccount,
	logIn,
	authCuentaGoogle,
	authCuentaFacebook,
	sendPasswordReset,
};
