import "./index.css";
import {useState} from "react";

function Barra({ producto }) {
  const imagen = producto.imagen;
  const nombre = producto.nombre;
  const precio = producto.precio;
  const [cantidad,setCantidad]=useState(1);
  const agregarCantidad= () =>{
    setCantidad(cantidad + 1);
  };
  const disminuirCantidad= () =>{
    if(cantidad > 1){
      setCantidad(cantidad - 1);
  }};
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

            <button onClick={agregarCantidad}><span>+</span></button>
            <p>{cantidad}</p>
            <button onClick={disminuirCantidad}><span>-</span></button>
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
