import React, {Fragment, useState, useContext} from 'react';
import projectContext from '../../context/project/projectContext';

const CreateProject = () =>{

  const projectsContext = useContext(projectContext);
  const { formState, showForm, addProject, errorForm, showError } = projectsContext;

  const [project, saveProject] = useState({
    name:''
  });
  const { name } = project;

  const onChangeProject = e =>{
    saveProject({
      ...project,
      [e.target.name]: e.target.value
    });
  }

  const onSubmitProject = e =>{
    e.preventDefault();
    if(name.trim() === ''){
      showError();
      return;
    }


    //envio el proyecto al state
    addProject(project);
    //reiniciar el formulario
    saveProject({
      name:''
    });
    //seteo el nombre como vacio para que se resetee ese campo

  }

  return(
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={showForm}

      >New Project</button>

      {
        (formState)
        ?
          <form
            className="formulario-nuevo-proyecto"
            onSubmit={onSubmitProject}
          >
            <input
              type="text"
              className="input-text"
              placeholder="Project name"
              name="name"
              value={name}
              onChange={onChangeProject}
            />
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Create project"
            />
          </form>
        :
          null
      }
      {(errorForm) ? <p className="mensaje error">A project name is required</p> :null}
    </Fragment>
  );
}

export default CreateProject;
