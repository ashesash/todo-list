import './App.css';
import {useState} from 'react';
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
    "Learn about React",
    "Meet friend for lunch",
    "Build really cool todo app",
  ]);

  const addToDo = (text) => {
    const newToDos = [...todos, text];
    setTodos(newToDos);
  }

  return (
    <div>
      <h1>My Todo list</h1>
      {todos.map((todo, index) => (
        <ToDoItem todo={todo} key={index} />

      ))}
      <ToDoForm addToDo={addToDo}/>
    </div>
  );

  }

export default App;
