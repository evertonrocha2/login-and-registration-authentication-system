// App.js

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Layout from "./pages/Layout";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";

function App() {
  const [usuario, setUsuario] = useState({ id: '', email: '', senha: '' }); // Inicializa como null

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={usuario ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={<LoginComponent setUsuario={setUsuario} />}
        />
        <Route
          path="/register"
          element={<RegisterComponent />}
        />
        <Route
          path="/dashboard"
          element={usuario ? <Layout usuario={usuario} setUsuario={setUsuario} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
