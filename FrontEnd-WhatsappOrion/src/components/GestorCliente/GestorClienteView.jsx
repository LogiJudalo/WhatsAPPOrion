import React, { useEffect, useState } from 'react'
import getInfo from '../../services/GestorCliente/GestorClienteServ';
import ModalCrearCliente from './ModalAgregarCliente';
import ListaClientes from './ListaClientes';


const GestorClienteView = () => {

  const [ListClient, setListClient] = useState([]);

  const consultarData = async () => {
    const data = await getInfo();
    setListClient(data);
  }

  useEffect(() => {
    consultarData();
  }, [])
  

  return (
    <div>
      <div className='header'>
        <h1>Gestor de mensajes</h1>
        <div className='buttons-container'>
          <ModalCrearCliente/>
        </div>
      </div>
      <div className='content'>
        <ListaClientes
          dato={ListClient}
        />
      </div>
    </div>
  )
}

export default GestorClienteView;