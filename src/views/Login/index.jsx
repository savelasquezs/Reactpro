import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

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
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
			<Link to="/register">Dont´t have an account? Sign up</Link>
		</div>
	);
}

export default App;
