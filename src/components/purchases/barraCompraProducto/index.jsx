import "./index.css";

function Barra({ producto }) {
  const imagen = producto.imagen;
  const nombre = producto.nombre;
  const precio = producto.precio;
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

            <button>+</button>
            <p>1</p>
            <button>-</button>
            </div>
          </div>
          <div>
            <p>$ {precio}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export { Barra };
