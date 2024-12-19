import { Button } from '@mui/material'
import React from 'react'
import Swal from 'sweetalert2'

const NuevaConfig = () => {

const handleSendClick = () => {
    Swal.fire({
        title: 'Token Activo',
        text: "El token ha sido activado con exito",
        icon: 'success',
        confirmButtonText: 'Aceptar',
    })
}

  return (
    <div>
        <div className='header'>
            <h1>Configuracion de datos de la API de Whatsaap</h1>
        </div>

        <div className='content'>
            <div className='form'>
                <div className='form-content'>
                    <div className="options">
                        <label className="form-label">Token API</label>
                        <div className='input-group'>
                            <textarea
                                className='form-control'
                                aria-label="With textarea"
                                placeholder='Token de API' 
                            >
                            </textarea>
                        </div>
                    </div>

                    <div className="options">
                        <label className="form-label">Numero Verificacion de funcionamiento</label>
                        <div className='input-group'>
                            <input type="number" 
                                className='form-control'
                                aria-describedby='basic-addon3 basic-addon4'
                                placeholder='+57'
                            />
                        </div>
                    </div>

                    <div className='buttons'>
                        <Button variant="contained" color='secondary'>Guardar</Button>
                        <Button 
                            variant="contained" 
                            color='success'
                            onClick={handleSendClick}
                        >
                            Enviar</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NuevaConfig