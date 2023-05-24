import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
	sendEmailVerification,
} from 'firebase/auth';

const auth = getAuth();
const createAccount = (email, password, name) => {
	createUserWithEmailAndPassword(auth, email, password).then((credential) => {
		updateProfile(credential.user, { displayName: name });
		sendEmailVerification(credential.user, {});
	});
};
