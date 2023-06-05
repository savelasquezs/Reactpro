import { useState } from 'react';
import Modal from '../components/Modal';

function App() {
	const [showModal, setShowModal] = useState(false);
	const openModal = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	const handleSubmit = (formValues) => {
		console.log('Valores del formulario:', formValues);
		closeModal(); // Cerrar el modal después de enviar el formulario
	};

	const modalInputs = [
		{ type: 'text', label: 'Nombre', variable: 'nombre' },
		{ type: 'email', label: 'Email', variable: 'email' },
		{ type: 'number', label: 'phone', variable: 'phone' },
		{ type: 'text', label: 'Direccion', variable: 'direccion' },
		{ type: 'text', label: 'apellido', variable: 'apellido' },
		// Agrega aquí más objetos para cada input adicional que necesites
	];

	return (
		<>
			<div>
				<h1>Página Principal</h1>
				<button onClick={openModal}>Abrir Modal</button>
				<Modal
					inputs={modalInputs}
					submitButtonText="Enviar"
					onSubmit={handleSubmit}
					showModal={showModal}
					closeModal={closeModal}
					title="Create customer"
				/>
			</div>
		</>
	);
}

export default App;
