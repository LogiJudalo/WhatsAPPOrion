import React, { useState } from 'react'
import FormularioEdicion from './FormularioEdicion'
import ModalEdicionMensaje from './ModalEdicionMensaje'
import { useLocation } from 'react-router-dom';

const EdicionMensajeView = () => {
  const location = useLocation();

  // Usar datos desde location.state o un valor predeterminado
  const initialData = location.state || {
    nombre_plantilla: '',
    titulo: '',
    mensaje: '',
    url: '',
    estado: '',
    numero_variables_mensajes: '',
  };

  const [formData, setFormData] = useState(initialData);

  const handleFormChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };
  return (
    <div>
        <div className='header'>
            <h1>Edicion de Mensaje Whatsaap</h1>
            <div className='buttons-container'>
                <button className='btn btn-primary'>Guardar</button>
                <ModalEdicionMensaje formData={formData}/>
            </div>
        </div>
        <div>
            <FormularioEdicion formData={formData} onFormChange={handleFormChange}/>
        </div>
    </div>
  )
}

export default EdicionMensajeView