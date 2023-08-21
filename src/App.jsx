import { useState } from 'react';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseColaboradores } from './database/BaseColaboradores';
import Listado from './Componentes/Listado';
import Formulario from './Componentes/Formulario';
import Alert from './Componentes/Alert';
import Buscador from './Componentes/Buscador';

function App() {
  const [alert, setAlert] = useState ({msg: "", color: ""});
  const [colaboradores, setColaboradores] = useState (BaseColaboradores);
  const [search, setSearch] = useState("");

  const handleChange = (e) =>{
    setSearch(e.target.value);
  };

const filteredColaboradores = colaboradores.filter(c=>{
  if(
    c.nombre.toLocaleLowerCase().includes(search.toLowerCase()) ||
    c.correo.toLocaleLowerCase().includes(search.toLowerCase()) ||
    c.edad.toLocaleLowerCase().includes(search.toLowerCase()) ||
    c.cargo.toLocaleLowerCase().includes(search.toLowerCase()) ||
    c.telefono.toLocaleLowerCase().includes(search.toLowerCase()) 
    ){
      return true;
    }
    return false;
});

const handleSubmit = (nuevoColaborador) =>{
  const colaboradorConId = {...nuevoColaborador, id: colaboradores.length + 1,};

  setColaboradores([...colaboradores, colaboradorConId]);
  
};



  return (
    <>
      <h1>Lista de Colaboradores</h1>
      <Buscador onChange={handleChange} search={search} />
      <Listado colaboradores= {filteredColaboradores}/> 
      <h3>Agregar Colaborador</h3>
      <Formulario onSubmit={handleSubmit} setAlert = {setAlert} />
      {alert.msg && <Alert msg={alert.msg} color= {alert.color}/>}
    </>
  );
}

export default App;
