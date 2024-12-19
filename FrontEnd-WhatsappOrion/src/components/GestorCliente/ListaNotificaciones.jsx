import React, { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate }  from 'react-router-dom';


const ListaNotificaciones = ({ rawData }) => {

  const data = useMemo(
    () =>
      rawData.flatMap((cliente) =>
        cliente.plantillas.map((plantilla) => ({
          id_cliente: cliente.id_cliente,
          nombre_cliente: cliente.nombre_cliente,
          nombre_plantilla: plantilla.nombre_plantilla,
          id_plantilla: plantilla.id_plantilla_cab,
          mensaje: plantilla.mensaje,
          titulo: plantilla.titulo,
          url: plantilla.url,
          numero_variables_mensajes: plantilla.numero_variables_mensajes,
          estado: plantilla.estado
        }))
      ),
    [rawData] 
  );



  const navigate = useNavigate();
  const columns = useMemo(
    () => [
      {
        accessorKey: 'nombre_plantilla', 
        header: 'Notificacion',
        size: 150,
      },
      {
        accessorKey: 'titulo', 
        header: 'Titulo',
        size: 150,
      },
      {
        accessorKey: 'mensaje', 
        header: 'Descripcion',
        size: 150,
      },
      {
        accessorKey: 'url', 
        header: 'URL Boton',
        size: 150,
      },
      {
        header: 'Acciones',
        size: 150,
        Cell: ({ row }) => (
          <div>
            <Tooltip title="Editar">
              <IconButton
                color='primary'
                onClick={() => navigate(`/EdicionMensaje`, {state: row.original })}
              >
                <EditIcon/>
              </IconButton>
            </Tooltip>
          </div>
        )
      },
    ],
    [navigate]
  );

  // Configuración de la tabla
  const table = useMaterialReactTable({
    columns,
    data, 
  });

  console.log({data});

  return <MaterialReactTable table={table} />;
};

export default ListaNotificaciones;
