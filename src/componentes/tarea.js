import React from "react";
import "../hojas-de-estilo/tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div
      className={
        completada ? "tarea-contenedor completada" : "tarea-contenedor"
      }
    >
      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div className="tarea-contenedor-icono"
      onClick={() => eliminarTarea (id)}>
        <AiOutlineCloseCircle className="tarea-iconos" />
      </div>
    </div>
  );
}

export default tarea;
