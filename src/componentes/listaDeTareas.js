import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./tarea";
import "../hojas-de-estilo/listaDeTareas.css";

function ListaDeTareas () {
const [tareas, setTareas] = useState ([]);

const agregarTarea= tarea => {
    console.log ("tarea agregada");
    console.log (tarea);
    if (tarea.texto.trim()) {/*verificamos que la cadena no este vacia--trim quita espacio del final o inicio */
    tarea.texto = tarea.texto.trim();/* quitado espacio innecesarios*/
    const tareasActualizadas = [tarea, ...tareas];/*generamos un arreglo con todas las tareas anteriores y la tarea nueva  */
    setTareas(tareasActualizadas);/*luego actualizamos el estado */
    }}
const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea =>tarea.id !== id);
    setTareas(tareasActualizadas);
}
const completarTarea = id => {
    const tareasActualizadas = tareas.map (tarea => {
        if (tarea.id === id) {
            tarea.completada = !tarea.completada;
        }
        return tarea;
    });
    setTareas(tareasActualizadas);
}


    return (
        <> 
        <TareaFormulario onSubmit = {agregarTarea} />
        <div className="tarea-lista-contenedor">
            {
            tareas.map((tarea) => /*map toma cada tarea y las va a pasar una por una como el argumenta pra otra funcion y va a hacer lo q indiquemos*/
            <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea} 
            eliminarTarea={eliminarTarea}/>
     )}

            </div>

        </>
    );}

export default ListaDeTareas;