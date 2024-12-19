import React, { useEffect, useState } from 'react'
import ListaClientes from './listaClientes';
import getInfo from '../../services/GestorCliente/GestorClienteServ';

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
        <button className='btn btn-primary'>Agregar Notificacion</button>
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