import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { IconButton, Tooltip } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import EditarFlujoModal from './EditarFlujoModal';
import BlockIcon from "@mui/icons-material/Block";



//example data
const data = [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Omaha',
    state: 'Nebraska',
  },
];



const ListaFlujos = () => {
  //should be memoized or stable
  const navigate = useNavigate();
  const columns = useMemo(
    () => [
      {
        accessorKey: 'ID', 
        header: 'ID',
        size: 150,
      },
      {
        accessorKey: 'NameFlujo',
        header: 'Nombre del flujo',
        size: 150,
      },
      {
        accessorKey: 'NameCliente', 
        header: 'Nombre del cliente',
        size: 200,
      },
      {
        accessorKey: 'Fecha',
        header: 'Fecha',
        size: 150,
      },
      {
        header: 'Acciones',
        size: 150,
        Cell: ({ row }) => (
          <div>
            <Tooltip title="Ver">
                <IconButton
                    color='primary'
                    onClick={() => navigate(`/FlujoVentana` )}
                >
                    <VisibilityIcon/>
                </IconButton>
            </Tooltip>
    
            <EditarFlujoModal/>

            {/* <Tooltip title="Eliminar">
              <IconButton
                color='primary'
              >
                <DeleteIcon/>
              </IconButton>
            </Tooltip> */}

            <Tooltip title="Deshabilitar">
              <IconButton color="primary">
                <BlockIcon />
              </IconButton>
            </Tooltip>
          </div>
          
        )
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return <MaterialReactTable table={table} />;
};

export default ListaFlujos;