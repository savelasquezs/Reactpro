import { Icon } from '@iconify/react';
import './index.css';

function Productos({ producto, pedidos, precio_venta, ganancia }) {
	return (
		<>
			{/* <div className='nombres-prodcutos'>
                <th>Productos</th>
                <th>Pedidos</th>
                <th>Precio Venta</th>
                <th>Ganancia</th>
        </div>
        <div>
            <table className="productos">
                <th><Icon icon={producto} width="40" height="40" /></th>
                <th>{pedidos}</th>
                <th>{precio_venta}</th>
                <th>{ganancia}</th>
            </table>
        </div> */}
		</>
	);
}

export default Productos;
