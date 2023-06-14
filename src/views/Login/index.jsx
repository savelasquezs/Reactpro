import React, { useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import {
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
} from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { Icon } from '@iconify/react';

function App() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({}); // State to hold form data

	const handleChange = (event) => {
		// Update the form data state when input values change
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};
	const logIn = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((result) => {
				// if (result.user.emailVerified) {
				navigate('/');
				setTimeout(() => {
					alert(`Welcome ${result.user.displayName}`);
				}, 2000);
				// } else {
				// 	signOut(auth);
				// 	alert(`Verify your email please`);
				// }
			})
			.catch((err) => {
				alert(err.code);
				console.log(err.code);
			});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const { email, password } = formData;
		console.log(formData);
		logIn(email, password);
	};

	const signInGoogle = (e) => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider).then((result) => {
			navigate('/');
		});
	};
	const signInFacebook = (e) => {
		e.preventDefault();
		authCuentaFacebook();
	};
	return (
		<div className="container mt-5 w-25 p-5 border rounded shadow">
			<h3 className="text-center mb-4">Log in</h3>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email address
					</label>
					<input
						name="email"
						type="email"
						value={formData['email'] || ''}
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						onChange={handleChange}
					/>
					<div id="emailHelp" className="form-text">
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Password
					</label>
					<input
						name="password"
						value={formData['password'] || ''}
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						onChange={handleChange}
					/>
				</div>
				<div className="mb-3 form-check">
					<input
						type="checkbox"
						className="form-check-input"
						id="exampleCheck1"
					/>
					<label className="form-check-label" htmlFor="exampleCheck1">
						Check me out
					</label>
				</div>
				<button type="submit" className="btn btn-primary w-100 h-25 ">
					Submit
				</button>
			</form>
			<Link to="/register">Dont´t have an account? Sign up</Link>
			{/* <button
				className="btn my-2 btn-light d-block w-100 h-25 d-flex justify-content-evenly"
				type="button"
				onClick={() => sendPasswordReset(formData['email'])}
			>
				Forgot your password?
			</button> */}
			<button
				className="btn my-2 btn-light d-block w-100 h-25 d-flex justify-content-evenly"
				onClick={signInGoogle}
			>
				<span>Or sign in with Google</span>
				<Icon icon="devicon:google" width="20" />
			</button>
			{/* <button
				className="btn my-2 btn-light d-block w-100 h-25 d-flex justify-content-evenly"
				onClick={signInFacebook}
			>
				<span>Or sign in with Facebook</span>
				<Icon icon="devicon:facebook" width="20" />
			</button> */}
		</div>
	);
}

export default App;
