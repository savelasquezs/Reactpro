import { useState } from 'react';
import OrderItem from '../../components/orders/orderItem';
import { Icon } from '@iconify/react';
import Modal from '../../components/Modal';
import { collection, addDoc, getDoc, updateDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../firebaseConfig'; // Importa tu instancia de Firebase Firestore y Firebase Storage

function Orders() {
	const order = {
		docId: 'ASds',
		hora: '17:05',
		productos: [{ nombre: 'ropa vieja', cantidad: 3, subtotal: 125800 }],
	};
	const order1 = {
		docId: 'santy',
		hora: '15:05',
		productos: [{ nombre: 'ranchero', cantidad: 20, subtotal: 125800 }],
	};
	const [showModal, setShowModal] = useState(false);
	const openModal = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	const handleSubmit = async (formValues) => {
		const { name, price, stock, image } = formValues;
		const data = { name, price, stock };
		const articuloRef = await addDoc(collection(db, 'items'), data);
		const itemId = articuloRef.id;
		const storageRef = ref(storage, `articulos/${itemId}/${name}`);
		await uploadBytes(storageRef, image);
		const imageUrl = await getDownloadURL(storageRef);
		await updateDoc(doc(db, 'items', itemId), { image: imageUrl });

		alert('Item saved successfuly');
		closeModal(); // Cerrar el modal después de enviar el formulario
	};

	const modalInputs = [
		{ type: 'text', label: 'Name', variable: 'name' },
		{ type: 'number', label: 'price', variable: 'price' },
		{ type: 'number', label: 'Stock', variable: 'stock' },
		{ type: 'file', label: 'Image', variable: 'image' },

		// Agrega aquí más objetos para cada input adicional que necesites
	];
	return (
		<>
			<div className="container position-relative h-100	">
				<Modal
					inputs={modalInputs}
					submitButtonText="Enviar"
					onSubmit={handleSubmit}
					showModal={showModal}
					closeModal={closeModal}
					title="Create customer"
				/>
				<Icon
					icon="simple-line-icons:plus"
					color="green"
					width="40"
					className="position-absolute bottom-0 end-0"
					role="button"
					onClick={openModal}
				/>

				<OrderItem order={order} />
				<OrderItem order={order1} />
			</div>
		</>
	);
}
export default Orders;
