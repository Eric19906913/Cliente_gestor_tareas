import React from 'react';
import CreateProject from '../projects/CreateProject';
import ListProjects from '../projects/ListProjects';

const Sidebar = () =>{
  return(
    <aside>
      <h1>Tasks<span>manager</span></h1>

      <CreateProject />

      <div className="proyectos">
        <h2>Your projects</h2>
        <ListProjects/>
      </div>
    </aside>

  );
}

export default Sidebar;
