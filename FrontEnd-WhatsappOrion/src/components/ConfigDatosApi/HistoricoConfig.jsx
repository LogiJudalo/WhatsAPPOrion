import { useMemo } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { IconButton, Tooltip } from '@mui/material';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import PageviewIcon from '@mui/icons-material/Pageview';

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

const HistoricoConfig = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'Id Configuracion', 
        header: 'Id Configuracion',
        size: 150,
      },
      {
        accessorKey: 'Numero Verificacion',
        header: 'Numero Verificacion',
        size: 150,
      },
      {
        accessorKey: 'Fecha', 
        header: 'Fecha',
        size: 200,
      },
      {
        accessorKey: 'Usuario',
        header: 'Usuario',
        size: 150,
      },
      {
        accessorKey: 'Estado',
        header: 'Estado',
        size: 150,
      },
      {
        header: 'Acciones',
        size: 150,
        Cell: ({ row }) => (
          <div>
            <Tooltip title="Estado">
                <IconButton
                    color='primary'
                >
                    <ToggleOffIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Probar">
                <IconButton
                    color='primary'
                >
                    <PageviewIcon/>
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

export default HistoricoConfig;
