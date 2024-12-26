import React, { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Box, IconButton, Tooltip } from "@mui/material";
import ListaNotificaciones from "./ListaNotificaciones";
import BlockIcon from '@mui/icons-material/Block';

// Datos de ejemplo
const data = [
  {
      "id_cliente": "0070",
      "nombre_cliente": "ASCEND LABORATORIES S.A.S",
      "plantillas": [
          {
              "id_plantilla_cab": 1,
              "nombre_plantilla": "0",
              "titulo": "Pruebas",
              "mensaje": "Esta es una prueba de verificacion de funcionalidad de mensajes",
              "check_url": 1,
              "url": "http://localhost/orion/",
              "estado": 1,
              "numero_variables_mensajes": "3",
              "fecha": "2024-12-13 08:38:33",
              "usuario": "DREY",
              "id_cliente": "0070",
              "nombre_cliente": "ASCEND LABORATORIES S.A.S",
              "id_flujo": "1",
              "id_flujo_proceso": "2"
          },
          {
              "id_plantilla_cab": 7,
              "nombre_plantilla": "Cajas Originales",
              "titulo": "Pruebas",
              "mensaje": "Esta es una prueba de verificacion de funcionalidad de mensajes",
              "check_url": 1,
              "url": "http://localhost/orion/",
              "estado": 2,
              "numero_variables_mensajes": "3",
              "fecha": "2024-12-13 10:48:28",
              "usuario": "DLOZANO",
              "id_cliente": "0070",
              "nombre_cliente": "ASCEND LABORATORIES S.A.S",
              "id_flujo": "1",
              "id_flujo_proceso": "2"
          },
          {
              "id_plantilla_cab": 9,
              "nombre_plantilla": "0",
              "titulo": "Pruebas",
              "mensaje": "Esta es una prueba de verificacion de funcionalidad de mensajes",
              "check_url": 1,
              "url": "http://localhost/orion/",
              "estado": 1,
              "numero_variables_mensajes": "4",
              "fecha": "2024-12-13 08:38:33",
              "usuario": "DREY",
              "id_cliente": "0070",
              "nombre_cliente": "ASCEND LABORATORIES S.A.S",
              "id_flujo": "1",
              "id_flujo_proceso": "2"
          },
          {
              "id_plantilla_cab": 11,
              "nombre_plantilla": "0",
              "titulo": "Pruebas",
              "mensaje": "Esta es una prueba de verificacion de funcionalidad de mensajes",
              "check_url": 1,
              "url": "http://localhost/orion/",
              "estado": 1,
              "numero_variables_mensajes": "8",
              "fecha": "2024-12-13 08:38:33",
              "usuario": "DREY",
              "id_cliente": "0070",
              "nombre_cliente": "ASCEND LABORATORIES S.A.S",
              "id_flujo": "1",
              "id_flujo_proceso": "2"
          }
      ]
  },
  {
      "id_cliente": "0053",
      "nombre_cliente": "BAM SA",
      "plantillas": [
          {
              "id_plantilla_cab": 2,
              "nombre_plantilla": "0",
              "titulo": "Pruebas",
              "mensaje": "Esta es una prueba de verificacion de funcionalidad de mensajes",
              "check_url": 1,
              "url": "http://localhost/orion/",
              "estado": 1,
              "numero_variables_mensajes": "4",
              "fecha": "2024-12-13 08:38:33",
              "usuario": "DREY",
              "id_cliente": "0053",
              "nombre_cliente": "BAM SA",
              "id_flujo": "1",
              "id_flujo_proceso": "2"
          },
          {
              "id_plantilla_cab": 3,
              "nombre_plantilla": "0",
              "titulo": "Pruebas",
              "mensaje": "Esta es una prueba de verificacion de funcionalidad de mensajes",
              "check_url": 1,
              "url": "http://localhost/orion/",
              "estado": 1,
              "numero_variables_mensajes": "5",
              "fecha": "2024-12-13 08:38:33",
              "usuario": "DREY",
              "id_cliente": "0053",
              "nombre_cliente": "BAM SA",
              "id_flujo": "1",
              "id_flujo_proceso": "2"
          },
          {
              "id_plantilla_cab": 5,
              "nombre_plantilla": "0",
              "titulo": "Pruebas",
              "mensaje": "Esta es una prueba de verificacion de funcionalidad de mensajes",
              "check_url": 1,
              "url": "http://localhost/orion/",
              "estado": 1,
              "numero_variables_mensajes": "1",
              "fecha": "2024-12-13 08:38:33",
              "usuario": "DREY",
              "id_cliente": "0053",
              "nombre_cliente": "BAM SA",
              "id_flujo": "1",
              "id_flujo_proceso": "2"
          }
      ]
  },
  {
      "id_cliente": "0054",
      "nombre_cliente": "MSN LABS AMERICA SAS",
      "plantillas": [
          {
              "id_plantilla_cab": 4,
              "nombre_plantilla": "0",
              "titulo": "Pruebas",
              "mensaje": "Esta es una prueba de verificacion de funcionalidad de mensajes",
              "check_url": 1,
              "url": "http://localhost/orion/",
              "estado": 1,
              "numero_variables_mensajes": "7",
              "fecha": "2024-12-13 08:38:33",
              "usuario": "DREY",
              "id_cliente": "0054",
              "nombre_cliente": "MSN LABS AMERICA SAS",
              "id_flujo": "1",
              "id_flujo_proceso": "2"
          },
          {
              "id_plantilla_cab": 6,
              "nombre_plantilla": "0",
              "titulo": "Pruebas",
              "mensaje": "Esta es una prueba de verificacion de funcionalidad de mensajes",
              "check_url": 1,
              "url": "http://localhost/orion/",
              "estado": 1,
              "numero_variables_mensajes": "2",
              "fecha": "2024-12-13 08:38:33",
              "usuario": "DREY",
              "id_cliente": "0054",
              "nombre_cliente": "MSN LABS AMERICA SAS",
              "id_flujo": "1",
              "id_flujo_proceso": "2"
          },
          {
              "id_plantilla_cab": 8,
              "nombre_plantilla": "0",
              "titulo": "Pruebas",
              "mensaje": "Esta es una prueba de verificacion de funcionalidad de mensajes",
              "check_url": 1,
              "url": "http://localhost/orion/",
              "estado": 1,
              "numero_variables_mensajes": "6",
              "fecha": "2024-12-13 08:38:33",
              "usuario": "DREY",
              "id_cliente": "0054",
              "nombre_cliente": "MSN LABS AMERICA SAS",
              "id_flujo": "1",
              "id_flujo_proceso": "2"
          },
          {
              "id_plantilla_cab": 10,
              "nombre_plantilla": "0",
              "titulo": "Pruebas",
              "mensaje": "Esta es una prueba de verificacion de funcionalidad de mensajes",
              "check_url": 1,
              "url": "http://localhost/orion/",
              "estado": 1,
              "numero_variables_mensajes": "9",
              "fecha": "2024-12-13 08:38:33",
              "usuario": "DREY",
              "id_cliente": "0054",
              "nombre_cliente": "MSN LABS AMERICA SAS",
              "id_flujo": "1",
              "id_flujo_proceso": "2"
          }
      ]
  },
  {
      "id_cliente": null,
      "nombre_cliente": null,
      "plantillas": [
          {
              "id_plantilla_cab": 12,
              "nombre_plantilla": "Cajas Originales",
              "titulo": "Pruebas",
              "mensaje": "Esta es una prueba de verificacion de funcionalidad de mensajes",
              "check_url": 1,
              "url": "http://localhost/orion/",
              "estado": 1,
              "numero_variables_mensajes": "7",
              "fecha": "2024-12-13 11:01:17",
              "usuario": "DLOZANO",
              "id_cliente": null,
              "nombre_cliente": null,
              "id_flujo": null,
              "id_flujo_proceso": null
          }
      ]
  }
]

const ListaClientes = ({ dato }) => {
  const lista = dato;

  const columns = useMemo(
    () => [
      {
        accessorKey: "id_cliente",
        header: "Codigo Cliente",
        size: 150,
      },
      {
        accessorKey: "nombre_cliente",
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
