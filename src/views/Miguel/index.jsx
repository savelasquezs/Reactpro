import Estadisticas from "../../components/Miguel/GenericoEstadistica";

function Miguelucho() {
	return (
		<>
		<div className="d-flex justify-content-between gap-3">
			<Estadisticas icono='foundation:dollar' valor= '12456' titulo='Total venta'/>
			<Estadisticas icono='material-symbols:order-approve' valor= '1039' titulo='Total pedidos'/>
			<Estadisticas icono='ph:cursor-light' valor= '199' titulo='Compras'/>
		</div>
		</>
	);
}

export default Miguelucho;