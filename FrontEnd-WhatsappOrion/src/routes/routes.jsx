import { Navigate } from "react-router-dom";
import EdicionMensajeView from "../components/EdicionMensaje/EdicionMensajeView";
import GestorClienteView from "../components/GestorCliente/GestorClienteView";
import ConfigDatos from "../components/ConfigDatosApi/ConfigDatosView";
import NuevaConfig from "../components/ConfigDatosApi/NuevaConfig";
import GestorFlujoView from "../components/GestorFlujos/GestorFlujoView";
import FlujoVentana from "../components/GestorFlujos/FlujoVentana";

const routes = [

    {
        path: '/EdicionMensaje',
        element: <EdicionMensajeView/>,
        protected: false,
    },
    {
        path: '/GestorCliente',
        element: <GestorClienteView />,
        protected: false, 
    },
    {
        path: '/ConfigDatos',
        element: <ConfigDatos/>,
        protected: false
    },
    {
        path: '/NuevaConfig',
        element: <NuevaConfig/>,
        protected: false
    },
    {
        path: '/GestorFlujo',
        element: <GestorFlujoView/>,
        protected: false
    },
    {
        path: '/FlujoVentana',
        element: <FlujoVentana/>,
        protected: false
    },
    {
        path: '/',
        element: <Navigate to="/" />, 
        protected: false,
    }

];

export default routes;