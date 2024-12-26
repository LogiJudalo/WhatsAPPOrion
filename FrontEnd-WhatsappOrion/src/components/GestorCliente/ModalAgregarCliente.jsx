import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };



const ModalCrearCliente = () => {
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

  return (
    <div>
        <button onClick={handleOpen} className='btn btn-primary'>Crear cliente</button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className='modal-container'>
                    <p>
                        <h1>Agregar de cliente</h1>
                    </p>

                    <div className='options'>
                        <label className='form-label'>Codigo Cliente</label>
                        <div className='input-group'>
                            <input type="text" 
                            className='form-control' 
                            aria-describedby='basic-addon3 basic-addon4'
                            placeholder='Escriba el codigo'
                            />
                        </div>

                        <label className='form-label'>Cliente</label>
                        <div className='input-group'>
                            <select className="form-select" aria-label="Default select example">
                                <option>Seleccione una opcion</option>
                                <option value="1">Cliente 1</option>
                                <option value="2">Cliente 2</option>
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
    </div>
  )
}

export default ModalCrearCliente