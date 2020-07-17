import React, {Fragment, useState} from 'react';

const CreateProject = () =>{

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
    if(name.trim() === '') return;

  }

  return(
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"

      >New Project</button>

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
    </Fragment>
  );
}

export default CreateProject;
