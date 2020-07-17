import React from 'react';

const CreateTask = () =>{
  return(
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Task name"
            name="task"
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-block btn-submit"
            value="Add task"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
