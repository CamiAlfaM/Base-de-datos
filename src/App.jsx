import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseColaboradores } from './database/BaseColaboradores';
import Listado from './Componentes/Listado';
import Formulario from './Componentes/Formulario';
function App() {

  return (
    <>
      <Listado colaboradores= {BaseColaboradores}/> 
      <Formulario />
    </>
  )
}

export default App;
