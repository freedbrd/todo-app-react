import './App.scss';
import TodoForm from './components/TodoForm.tsx';
import TodoList from './components/TodoList.tsx';
import { useState } from 'react';

export interface Todo {
  id: string;
  title: string;
  complete: boolean;
}

function App() {
  const [todoList, setTodolist] = useState<Todo[]>([]);

  return (
      <>
        <div className="container">
          <TodoForm todoList={todoList} setTodolist={setTodolist}/>
          <TodoList todoList={todoList} setTodolist={setTodolist}/>
        </div>
      </>
  );
}

export default App;
