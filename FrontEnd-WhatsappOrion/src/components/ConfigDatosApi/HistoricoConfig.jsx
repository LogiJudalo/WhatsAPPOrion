import { useEffect, useMemo, useState } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { IconButton, Tooltip } from '@mui/material';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import PageviewIcon from '@mui/icons-material/Pageview';
import ConfigApiService from '../../services/ConfigDatosApi/ConfigDatosServ';



const HistoricoConfig = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const result = await ConfigApiService.getAllConfigs();
        setData(result);
      } catch (err) {
        console.error('Error fetch todas las configuraciones', err)
      };
      fetchData();
    };
  }, [])
  

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id', 
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
