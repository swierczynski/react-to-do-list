import React from 'react';
import Task from './Task'

const TaskList = (props) => {

    const activeTasks = props.tasks.map(task => {
        if(task.active) {
        return (
            <Task key={task.id} task={task} delete={props.delete} done={props.done} />
        )
        }
    });
    const doneTasks = props.tasks.map( task => {
        if(!task.active) {
            return (
                <Task id={task.id} task={task} delete={props.delete} done={props.done}/>
            )
        }
    })

    return ( 
        <>
            <div className="active">
                <h1>Zadania do zrobienia</h1>
                <ul>
                    {activeTasks.length >0 ? activeTasks : <h2>Brak zadań do robienia</h2>   }
                </ul>
            </div>
            <hr/>
            <div className="done">
                <h3>Zadania zrobione <span>({doneTasks.length})</span></h3>
                <ul>
                    {doneTasks.slice(0 , 5)}
                </ul>
            </div>
        </>
     );
}
 
export default TaskList;