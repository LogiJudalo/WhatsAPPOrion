import React from 'react'
import HistoricoConfig from './HistoricoConfig'
import { useNavigate } from 'react-router-dom';
import ModalVerificacionUsuario from './ModalVerificacionUsuario';


const ConfigDatos = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className='header'>
        <h1>Configuracion de datos de la API de Whatsapp</h1>
        <ModalVerificacionUsuario/>
      </div>
      <div className='content'>
        <HistoricoConfig/>
      </div>
    </div>
  )
}

export default ConfigDatos