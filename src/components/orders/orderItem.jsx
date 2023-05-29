import './orderItem.css';
function OrderItem({ order }) {
	const id = order.docId;
	const cantProductos = order.productos.reduce((a, b) => a + b.cantidad, 0);
	const total = order.productos.reduce((a, b) => a + b.subtotal, 0);
	const hora = order.hora;
	return (
		<>
			<input type="radio" name="order" id={id} />
			<label htmlFor={id}>
				<div className="orden_container">
					<div className="orden_header">
						<div>Orden # {id}</div>
						<div>{hora}</div>
					</div>
					<div className="orden_footer">
						<div>Numero de productos {cantProductos}</div>
						<div className="orden_pago">
							<div>${total}</div>
							<div>
								<button className="btn btn-success rounded-4">Completar</button>
							</div>
						</div>
					</div>
				</div>
			</label>
		</>
	);
}

export default OrderItem;
