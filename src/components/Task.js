import React from 'react';

const Task = (props) => {
    const {id, text, date, active, finishDate } = props.task;

    const important = {
        color:'red',
    }
    const finish = new Date(finishDate).toLocaleDateString()

    return ( 
        <>
            <li key={props.key} style={(active && props.task.important) ? important : null }>{text} - do: <strong>{date}</strong>
            <br/>
            {finishDate ? <span>-potwierdzenie wykonania {finish}</span> : null}
            {active ? <button onClick={() => props.done(id)}>Zostało zrobione</button> : null}
            <button onClick={() => props.delete(id)}>X</button>
            </li> 
        </>
     );
}
 
export default Task