import React, {useContext, useState} from 'react';
import projectContext from '../../context/project/projectContext';
import taskContext from '../../context/task/taskContext';

const CreateTask = () =>{

  const projectsContext = useContext(projectContext);
  const { actualProject } = projectsContext;

  const tasksContext = useContext(taskContext);
  const { getTasks, addTask, validateTask, taskError } = tasksContext;

  const [task, saveTask] = useState({
    name:''
  })
  //extraer el nombre de la tarea
  const {name} = task;

  if(!actualProject) return null;

  const [actual] = actualProject;

  //manejar el cambio del nombre e ir guardandolo
  const handleChange = e =>{
    saveTask({
      ...task,
      [e.target.name] : e.target.value
    })
  }

  const onSubmit = e =>{
    e.preventDefault();
    //validar
    if(name.trim() === '') {
      validateTask();
      return;
    }
    //agregar la nueva tarea al state
    task.projectId = actual.id;
    task.status = false;
    addTask(task);

    //obtener las tareas del pry actual
    getTasks(actual.id);

    //reiniciar el form
    saveTask({
      name:''
    })
  }
  return(
    <div className="formulario">
      <form
        onSubmit={onSubmit}
      >
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Task name"
            name="name"
            value={name}
            onChange={handleChange}
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
      {taskError ? <p className="mensaje error">You have to set a name for the task</p> : null}
    </div>
  );
}

export default CreateTask;
