import React from "react"

const TodoItem = (props) => {
    console.log("found props:", props)
    return (
        <div>
            {props.todo}
        </div>
    );
}

export default TodoItem

