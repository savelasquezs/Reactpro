import { useState } from 'react';
import './App.css';
import NavButton from '../components/Sidebar/NavButton';
import Modal from '../components/Modal';

function App() {
	const [papacho, setPapacho] = useState('Mi fai');
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
			<input type="text" onChange={(e) => setPapacho(e.target.value)} />
			<h2>Hola mi papacho</h2>
			<p>{papacho}</p>
			<NavButton title="Hola mi so" icon="❤️" />
			<div>
				<h1>Página Principal</h1>
				<button onClick={openModal}>Abrir Modal</button>
				<Modal
					inputs={modalInputs}
					submitButtonText="Enviar"
					onSubmit={handleSubmit}
					showModal={showModal}
					closeModal={closeModal}
				/>
			</div>
		</>
	);
}

export default App;
