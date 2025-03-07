import { Box, Button, IconButton, Modal, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 460,

    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const CrearFlujoModal = () => {

const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const navigate = useNavigate();

  return (
    <>
        <button onClick={handleOpen} className='btn btn-primary'>Crear Flujo</button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className='modal-container'>
                    <p>
                        <h1>Crear Flujo</h1>
                    </p>

                    <div className='options'>
                        <label className='form-label-2'>Nombre Flujo</label>
                        <div className='input-group'>
                            <input type="text" 
                            className='form-control' 
                            aria-describedby='basic-addon3 basic-addon4'
                            placeholder='Escriba la clave del usuario'
                            />
                        </div>

                        <label className='form-label-2'>Cliente</label>
                        <div className='input-group'>
                            <select class="form-select" aria-label="Default select example">
                                <option>Seleccione una opcion</option>
                                <option value="1">Opcion 1</option>
                                <option value="2">Opcion 2</option>
                            </select>
                        </div>

                        <label className='form-label-2'>Estado</label>
                        <div className='input-group'>
                            <select class="form-select" aria-label="Default select example">
                                <option>Seleccione una opcion</option>
                                <option value="1">Activo</option>
                                <option value="2">Inactivo</option>
                            </select>
                        </div>

                        <div className='buttons'>
                            <Button variant="contained" color='error'>Cerrar</Button>
                            <Button variant="contained" color='success' onClick={() => navigate(`/NuevaConfig` )}>Guardar</Button>
                        </div>

                    </div>
                </div>
            </Box>

        </Modal>
    </>
  )
}

export default CrearFlujoModal