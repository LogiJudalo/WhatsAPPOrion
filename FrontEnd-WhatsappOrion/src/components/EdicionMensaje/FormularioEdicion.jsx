import React, { useState } from 'react'

const FormularioEdicion = ({ formData, onFormChange }) => {

  const [checkboxChecked, setCheckboxChecked] = useState(!!formData.url);

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setCheckboxChecked(isChecked);

    if (!isChecked) {
      onFormChange('url', '');
    }
  };

  const handleChange = (key) => (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    onFormChange(key, value);
  };

  return (
    <div className='content'>
        <div className='form-2'>
            <div className='form-content-2'>
              <div className='options'>
                <label className='form-label-2'>Notificacion</label>
                <div className='input-group'>
                    <input type="text" 
                      className='form-control' 
                      aria-describedby='basic-addon3 basic-addon4' 
                      value={formData.nombre_plantilla}
                      onChange={handleChange('nombre_plantilla')} 
                    />
                </div>
              </div>

              <div className='options'>
                <label className='form-label-2'>Titulo</label>
                <div className='input-group'>
                    <input type="text" 
                      className='form-control' 
                      aria-describedby='basic-addon3 basic-addon4'
                      value={formData.titulo}
                      onChange={handleChange('titulo')} 
                    />
                </div>
              </div>

              <div className='options'>
                <label className='form-label-2'>Descripcion</label>
                <div className='input-group'>
                  <textarea 
                    className="form-control" 
                    aria-label="With textarea" 
                    value={formData.mensaje}
                    onChange={handleChange('mensaje')}
                  >
                  </textarea>
                </div>
              </div>

              <div className="options-checkbox">
                <div className="input-group">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      aria-describedby="basic-addon3 basic-addon4"
                      checked={checkboxChecked}
                      onChange={handleCheckboxChange}
                    />
                    <label className="form-label-2">La notificación tendrá URL</label>
                  </div>
              </div>

              {checkboxChecked && (
                <div className="options">
                  <label className="form-label-2">URL</label>
                  <div className="input-group">
                    <select 
                    className="form-select form-select" 
                    aria-label="Small select example"
                    value={formData.estado}
                    onChange={handleChange('URL')}
                    >
                      <option value="">Seleccione una opcion</option>
                      <option value="1">URL 1</option>
                      <option value="2">URL 2</option>
                    </select>
                  </div>
                </div>
              )}

              <div className='options'>
                <label className='form-label-2'>Estado</label>
                <select 
                  className="form-select form-select" 
                  aria-label="Small select example"
                  value={formData.estado}
                  onChange={handleChange('estado')}
                >
                  <option value="">Seleccione una opcion</option>
                  <option value="1">Activo</option>
                  <option value="2">Inactivo</option>
                </select>
              </div>

              <div className='options'>
                <label className='form-label-2'>Numero Variables Por Mensaje</label>
                <div className='input-group'>
                    <input 
                      type="text" 
                      className='form-control' 
                      aria-describedby='basic-addon3 basic-addon4' 
                      value={formData.numero_variables_mensajes}
                      onChange={handleChange('numero_variables_mensajes')}
                    />
                </div>
              </div>  


            </div>
        </div>
    </div>
  )
}

export default FormularioEdicion