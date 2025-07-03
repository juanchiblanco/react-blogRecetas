import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./shared/Menu";
import { BrowserRouter } from "react-router";
import Footer from "./shared/Footer";

function App() {

  return (
    <>
    <BrowserRouter>
    <Menu></Menu>
    <main className="container my-3">
      <h1 className="text-center">Hola Mundo</h1>
      </main>
      <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
