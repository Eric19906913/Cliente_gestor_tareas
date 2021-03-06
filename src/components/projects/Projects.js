import React from 'react';
import Sidebar from '../layout/Sidebar';
import NavBar from '../layout/NavBar';
import CreateTask from '../tasks/CreateTask';
import ListTask from '../tasks/ListTask';

const Projects = () =>{
  return(
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <NavBar />
        <main>
          <CreateTask />
          <div className="contenedor-tareas">
            <ListTask />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Projects;
