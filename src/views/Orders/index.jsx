import OrderItem from '../../components/orders/orderItem';

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
	return (
		<>
			<h3>Vista de santy</h3>

			<OrderItem order={order} />
			<OrderItem order={order1} />
		</>
	);
}
export default Orders;
