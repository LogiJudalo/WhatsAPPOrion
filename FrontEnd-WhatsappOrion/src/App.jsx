import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import GestorClienteView from './components/GestorCliente/GestorClienteView';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import routes from './routes/routes';

function App() {
  const isAuthenticated = false;

  return (
    <>
      <Router>
        <Routes>

        {routes.map((route, index) => (
          route.protected ? (
            <Route
              key={index}
              path={route.path}
              element={isAuthenticated ? route.element : <Navigate to="/GestorCliente" />}
            />
          ) : (
            <Route key={index} path={route.path} element={route.element} />
          )
        ))}


        </Routes>
      </Router>
    </>
  )
}

export default App
