import React from 'react';
import { useState } from 'react';

function ToDoForm(props) {
    const { addToDo } = props;
    const [value, setValue] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value) {
            return;
        }
        addToDo (value);
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* <input type = "text" placeholder="Add to do" onChange={(event) => console.log(event.target.value)}/> */}
            <input type="text" placeholder="Add to do" onChange={(event) => setValue(event.target.value)} />
        </form>
    )
};

export default ToDoForm;