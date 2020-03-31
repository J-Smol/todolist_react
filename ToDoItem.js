import React from 'react';
import './ToDoItem.css';

const ToDoItem = props => {
    const resolvedClass = {
        textDecoration : 'line-through',
        fontWeight: 200
    }
    return (
        <div className="todo__item">
            <div className="input__wrapper">
                <input 
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={props.handleChange}
                />
            </div>
            <div className="description__wrapper">
                <p 
                    style={props.completed == true ? resolvedClass : {}} 
                >
                    {props.description}
                </p>
            </div>
            <button onClick={props.deleteTask}>X</button>
        </div>
    )
}

export default ToDoItem;