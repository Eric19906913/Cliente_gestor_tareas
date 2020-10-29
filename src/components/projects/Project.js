import React, {useContext} from 'react';
import projectContext from '../../context/project/projectContext';
import taskContext from '../../context/task/taskContext';

const Project = ({project}) =>{

  const projectsContext = useContext(projectContext);
  const { selectProject } = projectsContext;

  const tasksContext = useContext(taskContext);
  const { getTasks } = tasksContext;

  //funcion para agregar el proyecto actual
  const selectActualProject = id =>{
    selectProject(id); //fijar proyecto actual
    getTasks(id); //filtrar las tareas
  }
  return(
    <li>
      <button
        type="button"
        className="btn btn-black"
        onClick={() => selectActualProject(project.id) }
      >{project.name}</button>
    </li>
  );
}

export default Project;
