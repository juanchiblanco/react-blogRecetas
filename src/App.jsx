import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/shared/Menu";
import { BrowserRouter, Routes, Route } from "react-router";
import Footer from "./components/shared/Footer";
import Administrador from "./components/pages/Administrador";
import Error404 from "./components/pages/Error404";
import Inicio from "./components/pages/Inicio";
import Login from "./components/pages/Login";
import DetalleReceta from "./components/pages/DetalleReceta";
import { useState } from "react";
import ProtectorAdmin from "./components/ProtectorAdmin";
import { useEffect } from "react";

function App() {
  const usuarioLogueado = JSON.parse(sessionStorage.getItem("userKey")) || {}
  const [usuarioAdmin, setUsuarioAdmin] = useState(usuarioLogueado);

  useEffect(()=>{
    sessionStorage.setItem('userKey', JSON.stringify(usuarioAdmin))
  }, [usuarioAdmin])

  return (
    <>
      <BrowserRouter>
        <Menu
          usuarioAdmin={usuarioAdmin}
          setUsuarioAdmin={setUsuarioAdmin}
        ></Menu>
        <main className="mb-3">
          <Routes>
            <Route path="/" element={<Inicio></Inicio>}></Route>
            <Route
              path="/detalle/:id"
              element={<DetalleReceta></DetalleReceta>}
            ></Route>
            <Route
              path="/login"
              element={<Login setUsuarioAdmin={setUsuarioAdmin}></Login>}
            ></Route>
            <Route
              path="/administrador"
              element={
                <ProtectorAdmin usuarioAdmin={usuarioAdmin}></ProtectorAdmin>
              }
            >
              <Route index element={<Administrador></Administrador>}></Route>
            </Route>
            <Route path="*" element={<Error404></Error404>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
