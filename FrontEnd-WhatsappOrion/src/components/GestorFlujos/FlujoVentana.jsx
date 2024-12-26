import React from 'react'

import DiagramaView from './DiagramaReactFlow/DiagramaView'




const FlujoVentana = () => {
  return (
    <div>
        <div className='header'>
            <h1>Gestor de flujo de procesos</h1>
            {/* <div className='buttons-container'>
            <button className='btn btn-primary'>Cargar</button>
            <button className='btn btn-primary'>Guardar</button>
            </div> */}
        </div>

        <div className='content'>
          <DiagramaView/>
        </div>
    </div>
  )
}

export default FlujoVentana