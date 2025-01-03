import { Box, Button, Modal, Typography } from '@mui/material';
import React, { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import ClientApiService from '../../services/GestorCliente/ClientApiService';

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

const [formData, setFormData] = useState({
    id_cliente_whatsapp: '',
    nombre: '',
    estado: 1,
});

const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({
        ...prevState,
        [name]: value,
    }));
}

const handleSave = async () => {
    try {
        await ClientApiService.createClient(formData);
        Swal.fire({
            title: 'Cliente Creado',
            text: `El cliente "${formData.nombre}" se ha creado con éxito.`,
            icon: 'success',
            confirmButtonText: 'Aceptar',
            
        });
        setFormData({ id_cliente_whatsapp: '', nombre: '', estado: 1 }); 
        handleClose(); 
    } catch (error) {
        console.error('Error creando cliente:', error);
        handleClose(); 
        Swal.fire({
            title: 'Error',
            text: 'Hubo un problema al crear el cliente. Intenta nuevamente.',
            icon: 'error',
            confirmButtonText: 'Aceptar',
        });
    }
}
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
                        <label className='form-label-2'>Codigo Cliente</label>
                        <div className='input-group'>
                            <input type="text" 
                                className='form-control' 
                                aria-describedby='basic-addon3 basic-addon4'
                                placeholder='Escriba el codigo'
                                name='id_cliente_whatsapp'
                                value={formData.id_cliente_whatsaap}
                                onChange={handleChange}
                            />
                        </div>

                        <label className='form-label-2'>Cliente</label>
                        <div className='input-group'>
                            <select 
                                className="form-select" 
                                aria-label="Default select example"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}                
                            >
                                <option>Seleccione una opcion</option>
                                <option value="Cliente 1">Cliente 1</option>
                                <option value="Cliente 2">Cliente 2</option>
                            </select>
                        </div>

                        <label className="form-label-2">Estado</label>
                        <div className="input-group">
                            <select
                                className="form-select"
                                name="estado"
                                value={formData.estado} 
                                onChange={handleChange} 
                            >
                                <option value={1}>Activo</option>
                                <option value={0}>Inactivo</option>
                            </select>
                        </div>
                        
                        <div className='buttons'>
                            <Button variant="contained" color='error' onClick={handleClose}>Cerrar</Button>
                            <Button variant="contained" color='success' onClick={handleSave}>Guardar</Button>
                        </div>
                    </div>
                </div>
            </Box>

        </Modal>
    </div>
  )
}

export default ModalCrearCliente