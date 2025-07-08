import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/shared/Menu";
import { BrowserRouter, Routes, Route } from "react-router";
import Footer from "./components/shared/Footer";
import Administrador from "./components/pages/Administrador";
import Error404 from "./components/pages/Error404";
import Inicio from "./components/pages/Inicio";
import Login from "./components/pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <main className="mb-3">
          <Routes>
            <Route path="/" element={<Inicio></Inicio>}></Route>
            <Route
              path="/login"
              element={<Login></Login>}
            ></Route>
            <Route
              path="/administrador"
              element={<Administrador></Administrador>}
            ></Route>
            <Route path="*" element={<Error404></Error404>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
