import OrderItem from '../../components/orders/orderItem';

function Orders() {
	const order = {
		docId: 'ASds',
		hora: '17:05',
		productos: [{ nombre: 'ropa vieja', cantidad: 3, subtotal: 125800 }],
	};
	return (
		<>
			<h3>Vista de santy</h3>
			<OrderItem order={order} />
		</>
	);
}
export default Orders;
