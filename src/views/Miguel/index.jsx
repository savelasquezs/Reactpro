import Estadisticas from "../../components/Miguel/GenericoEstadistica";
import Productos from "../../components/Miguel/Productos";
import Promedio from "../../components/Miguel/EstadisticasPromedio";
// import { Bar } from "react-chartjs-2";

function App() {
  // const data = {
  //   labels: ['Productos'],
  //   datasets:[{
  //     label: 'Ventas Semanales',
  //     backgroundColor: '#003049',
  //     borderColor: 'black',
  //     borderWidth: 1,
  //     hoverBackgroundColor: '#535353',
  //     hoverBorderColor: '#FF0',
  //     data: [500]
  //   }]
  // };
  // const opciones = {
  //   maintainAspectRatio: false,
  //   responsive: true
  // }

  return (
    <>
	<div className="d-flex">
      <div>
        <div className="d-flex justify-content-between gap-3">
          <Estadisticas
            icono="foundation:dollar"
            valor="12456"
            titulo="Total venta"
          />
          <Estadisticas
            icono="material-symbols:order-approve"
            valor="1039"
            titulo="Total pedidos"
          />
          <Estadisticas icono="ph:cursor-light" valor="199" titulo="Compras" />
        </div>
        <div>
          <Productos
            producto="game-icons:cement-shoes"
            pedidos="53110"
            precio_venta="$113.99"
            ganancia="212214.70"
          />
        </div>
      </div>

      <div>
        <h3>Estadisticas promedio</h3>
        <Promedio nombre="Esta Semana" />
        <Promedio nombre="Esta Mes" />
        <Promedio nombre="Esta Año" />
      </div>

      {/* <div className="grafica" style={{width: '40%', height: '200px'}}>
        <Bar data={data} options={opciones} />
      </div> */}
	</div>

    </>
  );
}

export default App;
