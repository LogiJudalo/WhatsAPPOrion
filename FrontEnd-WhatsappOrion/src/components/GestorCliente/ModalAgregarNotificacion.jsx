import { Box, Button, IconButton, Modal, Tooltip, Typography } from '@mui/material';
import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };



const ModalAgregarNotificacion = () => {
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

  return (
    <>
        <Tooltip title="Agregar Notificacion">
            <IconButton color='primary' onClick={handleOpen} className='btn btn-primary'>
                <AddCircleIcon/>
            </IconButton>
        </Tooltip>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className='modal-container'>
                    <p>
                        <h1>Agregar notificacion</h1>
                    </p>

                    <div className='options'>
                        <label className='form-label-2'>Notificacion</label>
                        <div className='input-group'>
                            <input type="text" 
                            className='form-control' 
                            aria-describedby='basic-addon3 basic-addon4'
                            placeholder=''
                            />
                        </div>

                        <label className='form-label-2'>Titulo</label>
                        <div className='input-group'>
                            <input type="text" 
                            className='form-control' 
                            aria-describedby='basic-addon3 basic-addon4'
                            placeholder=''
                            />
                        </div>

                        <label className='form-label-2'>Descripcion</label>
                        <div className='input-group'>
                            <input type="text" 
                            className='form-control' 
                            aria-describedby='basic-addon3 basic-addon4'
                            placeholder=''
                            />
                        </div>

                        <label className='form-label-2'>Codigo Cliente</label>
                        <div className='input-group'>
                            <input type="text" 
                            className='form-control' 
                            aria-describedby='basic-addon3 basic-addon4'
                            placeholder='Escriba el codigo'
                            />
                        </div>

                        <label className='form-label-2'>URL</label>
                        <div>
                            <select class="form-select" aria-label="">
                                <option selected>Seleccionar</option>
                                <option value="1">URL 1</option>
                                <option value="2">URL 2</option> 
                            </select>
                        </div>

                        <label className='form-label-2'>Estado</label>
                        <div className='input-group'>
                            <select class="form-select" aria-label="">
                                <option selected>Seleccionar</option>
                                <option value="1">Activo</option>
                                <option value="2">Inactivo</option> 
                            </select>
                        </div>
                        
                        <div className='buttons'>
                            <Button variant="contained" color='error'>Cerrar</Button>
                            <Button variant="contained" color='success'>Guardar</Button>
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>
    </>
  )
}

export default ModalAgregarNotificacion;