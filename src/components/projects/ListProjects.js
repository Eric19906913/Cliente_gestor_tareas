import React, {useContext, useEffect} from 'react';
import Project from './Project';
import projectContext from '../../context/project/projectContext';

const ListProjects = () =>{

  //extraer context y extraer la lista de proyectos del state
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;

  useEffect(()=>{
    getProjects();
    // eslint-disable-next-line
  },[])

  if(projects.length === 0) return <h2>Create a new proyect</h2>;

  return(
    <ul className="listado-proyectos">
      {projects.map(project =>(
        <Project
          key={project.id}
          project={project}
        />
      ))}
    </ul>
  );
}

export default ListProjects;
