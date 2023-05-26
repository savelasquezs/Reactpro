import { Icon } from '@iconify/react';
import './index.css'

function Estadisticas({icono, valor, titulo}) {
    return (
    <>
    <div className='estadisticas'>
        <ul>
            <li><Icon icon={icono} width="40" height="40" /></li>
            <li>
                {valor}
            </li>
            <li>
                {titulo}
            </li>
        </ul>
    </div>
    </>
    )
}

export default Estadisticas;