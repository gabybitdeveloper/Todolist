import React, { useState } from 'react'
import Listgroup from './Listgroup';

function TodoList() {
    const [inputValue, setInputValue] = useState ("");
    const [tarea, setTarea] = useState ([]);
    
    function handleClick ( event ) {
      event.preventDefault();
      console.log(inputValue);
      //tarea.push(tareaInput);
      //spread operator
      setTarea([...tarea, inputValue]);
    }
  
    function handleDelete (index) {
      // tareas = ["ordenar", "limpiar", "etc"];
      const listatareasNueva = [...tarea];
      listatareasNueva.splice(index, 1);
      setTarea(listatareasNueva);
    };


    return (
    <form class="row g-3">
        <div class="col-3"></div>
        <div class="col-4 mt-5">
            <label for="tarea" class="">Tareas</label>
            <div class="d-flex justify-content-inline">
                <input type="text" class="form-control mt-2" id="tarea" placeholder='Escribe tu tarea' onChange= { (event) => setInputValue(event.target.value)} />
                <button type="button" class="btn btn-info mt-2" onClick={ (event) => handleClick(event)}>Enviar</button>
            </div>
            <div class="row">
          <div class="col-3"></div> 
          <div class="col-4 mt-5"></div>
          </div>
            <Listgroup listatareas={tarea} handleDelete={handleDelete} />
        </div>
    </form>
        

  )
}

export default TodoList