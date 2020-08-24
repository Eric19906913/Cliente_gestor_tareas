import {PROJECT_FORM,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM,
  ACTUAL_PROJECT,
  DELETE_PROJECT
} from '../../types';

export default (state, action) =>{
  switch(action.type){

    case PROJECT_FORM:
      return {
        ...state,
        formState: true
      }
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      }
    //agrego el nuevo proyecto que viene en el action al arreglo de pry que ya existe
    //copio los proyectos que ya existen mas el nuevo
    //pongo el form en false para que se oculte
    //seteo el error en false para que se oculte
    case ADD_PROJECT:
      return{
        ...state,
        projects: [...state.projects, action.payload],
        formState: false,
        errorForm: false
      }
    case VALIDATE_FORM:
      return{
        ...state,
        errorForm: true
      }
    case ACTUAL_PROJECT:
      return{
        ...state,
        actualProject: state.projects.filter(project => project.id === action.payload)
      }
    case DELETE_PROJECT:
      return{
        ...state,
        projects: state.projects.filter(project => project.id !== action.payload),
        actualProject: null
      }
    default:
      return state;
  }
}
