import React, { useEffect, useState } from 'react'
import getInfo from '../../services/GestorCliente/ClientApiService';
import ModalCrearCliente from './ModalAgregarCliente';
import ListaClientes from './ListaClientes';


const GestorClienteView = () => {



  return (
    <div>
      <div className='header'>
        <h1>Gestor de mensajes</h1>
        <div className='buttons-container'>
          <ModalCrearCliente/>
        </div>
      </div>
      <div className='content'>
        <ListaClientes/>
      </div>
    </div>
  )
}

export default GestorClienteView;