import './index.css';
import { useState } from 'react';

function Barra({ producto }) {
	const imagen = producto.imagen;
	const nombre = producto.nombre;
	const precio = producto.precio;
	const [cantidad, setCantidad] = useState(2);

	const agregarCantidad = () => {
		setCantidad(cantidad + 1);
	};
	return (
		<>
			<div className="contenedorGeneral">
				<div className="shoes">
					<img src={imagen} alt="" />
				</div>

				<div className="details">
					<div>
						<p>{nombre}</p>
						<div className="d-flex">
							<button onClick={agregarCantidad}>+</button>
							<p>{cantidad}</p>
							<button
								onClick={() =>
									cantidad <= 1 ? setCantidad(1) : setCantidad(cantidad - 1)
								}
							>
								-
							</button>
						</div>
					</div>
					<div>
						<p>$ {precio * cantidad}</p>
					</div>
				</div>
			</div>
		</>
	);
}

export { Barra };
