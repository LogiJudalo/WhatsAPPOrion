import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";


import LoginView from "./components/Login/LoginView";
import LayoutContent from "./components/layout";

function App() {
  const [showLayout, setShowLayout] = useState(false);

  const handleLogin = () => {
    setShowLayout(true)
  }

  return (
    <>
      {showLayout ? (
        <LayoutContent/>
      ): (
        <LoginView handleLogin={handleLogin}/>
      )}

   

    </>
  );
}

export default App;
