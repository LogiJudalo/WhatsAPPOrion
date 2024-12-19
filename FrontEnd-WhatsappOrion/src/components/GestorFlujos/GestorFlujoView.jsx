import React from 'react'
import ListaFlujos from './ListaFlujos'
import CrearFlujoModal from './CrearFlujoModal'

const GestorFlujoView = () => {
  return (
    <div>
        <div className='header'>
            <h1>Gestor de mensajes</h1>
            <CrearFlujoModal/>
        </div>
        <div className='content'>
            <ListaFlujos/>
        </div>
    </div>
  )
}

export default GestorFlujoView