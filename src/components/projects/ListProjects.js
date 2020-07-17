import React from 'react';
import Project from './Project';

const ListProjects = () =>{

  const projects = [
    {name:'Startup'},
    {name:'e-commerce'},
    {name:'drug dealer'}
  ]
  return(
    <ul className="listado-proyectos">
      {projects.map(project =>(
        <Project
          key={project.name}
          project={project}
        />
      ))}
    </ul>
  );
}

export default ListProjects;
