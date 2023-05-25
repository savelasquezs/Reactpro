import React, { useState } from 'react';
import './modal.css';

const Modal = ({
	title,
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
		<div className="modal_mio-overlay">
			<div className="modal_mio">
				{/* <button className="close-button " onClick={closeModal}>
					&times;
				</button> */}
				<button
					type="button"
					className="btn-close float-end mb-3"
					onClick={closeModal}
				></button>
				<h3 className="text-center">{title}</h3>
				<div className="modal_mio-content">
					<form onSubmit={handleSubmit}>
						{inputs.map((input) => (
							<div key={input.variable} className="input-group">
								<input
									type={input.type}
									name={input.variable}
									placeholder={input.label}
									value={formValues[input.variable] || ''}
									onChange={handleInputChange}
									className="form-control"
								/>
							</div>
						))}
						<button
							type="submit"
							className="btn btn-outline-success w-100 mt-3"
						>
							{submitButtonText}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Modal;
