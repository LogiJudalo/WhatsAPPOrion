import React, { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Box, IconButton, Tooltip } from "@mui/material";
import ListaNotificaciones from "./ListaNotificaciones";
import BlockIcon from '@mui/icons-material/Block';
import ModalAgregarNotificacion from "./ModalAgregarNotificacion";

// Datos de ejemplo
 

const ListaClientes = ({ id_cliente }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMensajes = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/client/list`
        );
        setData(response.data);
        console.log("Funciona");
      } catch (error) {
        console.error("Error fetching mensajes");
        setError("Hubo un problema en la carga de datos")
      }   
    };

    if (id_cliente) {
      fetchMensajes();
    }
  }, [id_cliente])
  

  const columns = useMemo(
    () => [
      {
        accessorKey: "id_cliente_whatsapp",
        header: "Codigo Cliente",
        size: 150,
      },
      {
        accessorKey: "nombre",
        header: "Nombre Cliente",
        size: 150,
      },
      {
        header: 'Acciones',
        size: 150,
        Cell: ({ row }) => (
          <div>
            <Tooltip title="Deshabilitar">
              <IconButton
                color='primary'
              >
                <BlockIcon/>
              </IconButton>
            </Tooltip>
 
              <ModalAgregarNotificacion/>
     
          </div>
        )
      },
    ],
    []
  );


  // Configuración de la tabla
  const table = useMaterialReactTable({
    columns,
    data,
    enableExpandAll: false, // Deshabilitar el botón de expandir todo
    muiDetailPanelProps: () => ({
      sx: (theme) => ({
        backgroundColor:
          theme.palette.mode === "dark"
            ? "rgba(255,210,244,0.1)"
            : "rgba(0,0,0,0.1)",
      }),
    }),
    // Rotación personalizada del botón de expansión
    muiExpandButtonProps: ({ row, table }) => ({
      onClick: () => table.setExpanded({ [row.id]: !row.getIsExpanded() }), // Solo permitir un panel expandido a la vez
      sx: {
        transform: row.getIsExpanded() ? "rotate(180deg)" : "rotate(-90deg)",
        transition: "transform 0.2s",
      },
    }),
    // Renderización condicional del panel de detalles
    renderDetailPanel: ({ row }) =>
      row.original.id_cliente ? (
        <Box
          sx={{
            display: "grid",
            margin: "auto",
            gridTemplateColumns: "1fr",
            width: "100%",
          }}
        >
          <ListaNotificaciones rawData={[row.original]}/>
        </Box>
      ) : null,
  });

  return <MaterialReactTable table={table} />;
};

export default ListaClientes;
