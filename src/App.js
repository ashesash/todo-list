import './App.css';
import TodoItem from './components/todoitem';

function App() {
  return (
    <div>
      <h1>My To Do List</h1>
      < TodoItem todo={ "have a shower"} />
      < TodoItem todo={ "eat a donut"} />
    </div>
    

  );
}

export default App;
