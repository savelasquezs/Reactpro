import React, { useState } from 'react';
import './modal.css';

const Modal = ({
	inputs,
	submitButtonText,
	onSubmit,
	showModal,
	closeModal,
}) => {
	const [formValues, setFormValues] = useState({});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit(formValues);
		setFormValues({}); // Borrar los datos del formulario después de enviarlo
	};

	if (!showModal) {
		return null; // No se muestra el modal si showModal es falso
	}

	return (
		<div className="modal-overlay">
			<div className="modal">
				<button className="close-button" onClick={closeModal}>
					&times;
				</button>
				<div className="modal-content">
					<form onSubmit={handleSubmit}>
						{inputs.map((input) => (
							<div key={input.variable} className="input-group">
								<label htmlFor={input.variable}>{input.label}</label>
								<input
									type={input.type}
									name={input.variable}
									placeholder={input.label}
									value={formValues[input.variable] || ''}
									onChange={handleInputChange}
								/>
							</div>
						))}
						<button type="submit">{submitButtonText}</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Modal;
