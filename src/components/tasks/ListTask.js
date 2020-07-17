import React, {Fragment} from 'react';
import Task from './Task';

const ListTask = () =>{

  //dummy data
  const tasks = [
    {name:'Choose Theme', status: true},
    {name:'Select personal', status: true},
    {name:'Pay for rent', status: false},
    {name:'Rent a car', status: false}
  ]

  return(
    <Fragment>
      <h2>Project: Startup</h2>

      <ul className="listado-tareas">
        {(tasks.length === 0)
          ?
            <li className="tarea"><p>There are no tasks</p></li>
          :
            tasks.map(task => (
              <Task
                key={task.name}
                task={task}
              />
        ))}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
      >Delete Project &times;</button>
    </Fragment>
  );
}

export default ListTask;
