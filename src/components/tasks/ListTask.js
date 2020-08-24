import React, {Fragment, useContext} from 'react';
import projectContext from '../../context/project/projectContext';
import Task from './Task';

const ListTask = () =>{

  const projectsContext = useContext(projectContext);
  const { actualProject, deleteProject } = projectsContext;

  if(!actualProject) return <h2>Select a project</h2>;

  const [actual] = actualProject;

  //dummy data
  const tasks = [
    {name:'Choose Theme', status: true},
    {name:'Select personal', status: true},
    {name:'Pay for rent', status: false},
    {name:'Rent a car', status: false}
  ]

  return(
    <Fragment>
      <h2>Project: {actual.name}</h2>

      <ul className="listado-tareas">
        {(tasks.length === 0)
          ?
            <li className="tarea"><p>There are no tasks</p></li>
          :
            tasks.map(task => (
              <Task
                key={task.name}
                task={task}
              />
        ))}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={() => deleteProject(actual.id)}
      >Delete Project &times;</button>
    </Fragment>
  );
}

export default ListTask;
