import React, {Fragment, useContext} from 'react';
import projectContext from '../../context/project/projectContext';
import taskContext from '../../context/task/taskContext';
import Task from './Task';

const ListTask = () =>{

  const projectsContext = useContext(projectContext);
  const { actualProject, deleteProject } = projectsContext;

  const tasksContext = useContext(taskContext);
  const { tasksProjects } = tasksContext;

  if(!actualProject) return <h2>Select a project</h2>;

  const [actual] = actualProject;


  return(
    <Fragment>
      <h2>Project: {actual.name}</h2>

      <ul className="listado-tareas">
        {(tasksProjects.length === 0)
          ?
            <li className="tarea"><p>There are no tasks</p></li>
          :
            tasksProjects.map(task => (
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
