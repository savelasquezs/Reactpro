import { Barra } from '../../components/purchases/barraCompraProducto';

function Purchases() {
	const producto1 = {
		nombre: 'seba',
		precio: 1000,
		imagen:
			'https://tse2.mm.bing.net/th?id=OIP.gcwCCbC66G5mjayWFfo-8AHaHa&pid=Api&P=0&h=180',
	};
	return (
		<>
			<Barra producto={producto1} />
			<Barra producto={producto1} />
			<Barra producto={producto1} />
		</>
	);
}

export { Purchases };
