import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./sidebar/SidebarView";
import routes from "../routes/routes";



function LayoutContent() {
  const isAuthenticated = false;

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <>
      <div className="app-container">
        <Router>
          <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
          <div className="main-content">
            <Routes>
              {routes.map((route, index) =>
                route.protected ? (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      isAuthenticated ? (
                        route.element
                      ) : (
                        <Navigate to="/GestorCliente" />
                      )
                    }
                  />
                ) : (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                )
              )}
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default LayoutContent;
