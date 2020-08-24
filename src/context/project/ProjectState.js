import React, {useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {PROJECT_FORM,
   GET_PROJECTS,
   ADD_PROJECT,
   VALIDATE_FORM,
   ACTUAL_PROJECT,
   DELETE_PROJECT
} from '../../types';



const ProjectState = props =>{

  const projects = [
      {id: 1, name:'Startup'},
      {id: 2, name:'e-commerce'},
      {id: 3, name:'drug dealer'}
  ];

  const initialState = {
    projects : [],
    formState: false,
    errorForm: false,
    actualProject: null
  }

  //dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(projectReducer, initialState);

  //funciones para el CRUD
  const showForm = () =>{
    dispatch({
      type: PROJECT_FORM
    })
  }

  //get ProjectS
  const getProjects = () =>{
    dispatch({
      type: GET_PROJECTS,
      payload: projects
    })
  }
  //agregar un nuevo proyecto
  const addProject = project =>{
    project.id = uuidv4();
    //Insertar proyecto en el state usandodispatch
    dispatch({
      type: ADD_PROJECT,
      payload: project
    })
  }

  //manejar error en el form
  const showError = () =>{
    dispatch({
      type: VALIDATE_FORM
    })
  }

  //selecciona proyecto al darle click
  const selectProject = projectId =>{
    dispatch({
      type: ACTUAL_PROJECT,
      payload: projectId
    })
  }

  //borrar un proyecto
  const deleteProject = projectId =>{
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId
    })
  }

  return(
    <projectContext.Provider
      value={{
        projects: state.projects,
        formState: state.formState,
        errorForm: state.errorForm,
        actualProject: state.actualProject,
        showForm,
        selectProject,
        getProjects,
        addProject,
        deleteProject,
        showError

      }}
    >
      {props.children}
    </projectContext.Provider>
  );
}

export default ProjectState;
