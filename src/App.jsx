import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./shared/Menu";
import { BrowserRouter } from "react-router";

function App() {

  return (
    <>
    <BrowserRouter>
    <Menu></Menu>
      <h1>Hola Mundo</h1>
      </BrowserRouter>
    </>
  )
}

export default App
