import React from "react"
import './index.css'

const TodoItem = (props) => {
    // console.log("found props:", props)
    const {todo, index, completeTodo, removeToDo} = props;
    return (
        <div className={`todo ${todo.isCompleted ? "complete" : "" }`}>
            {todo.text}
            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => removeToDo(index)}>X</button>
            </div>
        </div>
    );
}

export default TodoItem

