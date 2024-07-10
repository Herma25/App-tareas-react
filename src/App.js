import "./App.css";
import harryPotterLogo from "./imagenes/hermaz-logo.webp";
import ListaDeTareas from "./componentes/listaDeTareas";

function App() {
  return (
    <div className="Aplicacion-tarea">
      <div className="harrypotter-logo-contenedor">
        <img src={harryPotterLogo} className="harrypoter-logo" />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
