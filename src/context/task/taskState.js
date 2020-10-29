import React, {useReducer} from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import {TASKS_PROJECT,
        ADD_TASK,
        VALIDATE_TASK
      } from '../../types';

const TaskState = props =>{
  //inicial state como array vacio de tareas
  const initialState = {
    tasks: [
      {name:'Choose Theme', status: true, projectId: 1},
      {name:'Select personal', status: true, projectId: 1},
      {name:'Pay for rent', status: false, projectId: 2},
      {name:'Rent a car', status: false, projectId: 3}
    ],
    tasksProjects: null,
    taskError: false
  }

  //crear dispatch
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  //Funciones CRUD
  //obtener las tareas de un project
  const getTasks = projectId =>{
    dispatch({
      type: TASKS_PROJECT,
      payload: projectId
    })
  }

  //agregar una tarea
  const addTask = task =>{
    dispatch({
      type: ADD_TASK,
      payload: task
    })
  }
  //valida y muestra un error
  const validateTask = () =>{
    dispatch({
      type: VALIDATE_TASK
    })
  }


  //retorno el provider con los childrens
  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        tasksProjects: state.tasksProjects,
        taskError: state.taskError,
        getTasks,
        addTask,
        validateTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}


export default TaskState;
