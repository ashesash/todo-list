import './App.css';
import { useState } from 'react';
import ToDoItem from './components/ToDoItem';
import ToDoForm from './components/ToDoForm';

function App() {
  // return (
  //   <div>
  //     <h1>My To Do List</h1>
  //     < TodoItem todo={ "have a shower"} />
  //     < TodoItem todo={ "eat a donut"} />
  //   </div>

  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
    },
  ]);

  const addToDo = (text) => {
    const newToDos = [...todos, { text }];
    setTodos(newToDos);
  };

  const removeToDo = (index) => {
    const newToDos = [...todos];
    newToDos.splice(index, 1);
    setTodos(newToDos);
  }

  const completeTodo = (index) => {
    const newToDos = [...todos];
    newToDos[index].isCompleted = true;
    setTodos(newToDos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        <h1>My Todo list</h1>
        {todos.map((todo, index) => (
          <ToDoItem todo={todo} key={index} completeTodo={completeTodo} index={index} removeToDo={removeToDo}/>

        ))}
        <ToDoForm addToDo={addToDo} />
      </div>
    </div>
  );

}

export default App;
