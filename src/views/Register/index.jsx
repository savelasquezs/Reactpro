import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createAccount } from '../../authentication';

function App() {
	const [formData, setFormData] = useState({}); // State to hold form data

	const handleChange = (event) => {
		// Update the form data state when input
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Perform any necessary actions with the form data
		console.log(formData);
		const { email, name, password, password2 } = formData;
		setFormData({});
		if (password == password2) {
			try {
				createAccount(email, password, name);
				alert('Revisa tu correo para verificar tu cuenta por favor');
			} catch (error) {
				console.log(error);
			}
		}
	};
	return (
		<div className="container mt-5 w-25 p-5 border rounded shadow">
			<h3 className="text-center mb-4">Sign up</h3>

			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="emailRegister" className="form-label">
						Email address
					</label>
					<input
						name="email"
						value={formData['email'] || ''}
						type="email"
						className="form-control"
						id="emailRegister"
						aria-describedby="emailHelp"
						onChange={handleChange}
					/>
					<div id="emailHelp" className="form-text">
						No compartiremos tu correo con nadie
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="nameRegister" className="form-label">
						Name
					</label>
					<input
						name="name"
						value={formData['name'] || ''}
						type="text"
						className="form-control"
						id="nameRegister"
						onChange={handleChange}
					/>
				</div>

				<div className="mb-3">
					<label htmlFor="passwordRegister" className="form-label">
						Password
					</label>
					<input
						name="password"
						value={formData['password'] || ''}
						type="password"
						className="form-control"
						id="passwordRegister"
						onChange={handleChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="confirmPasswordRegister" className="form-label">
						Confirm your password
					</label>
					<input
						name="password2"
						value={formData['password2'] || ''}
						type="password"
						className="form-control"
						id="confirmPasswordRegister"
						onChange={handleChange}
					/>
				</div>

				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
			<Link to="/login">Already have an account? Log in</Link>
		</div>
	);
}

export default App;
