import { Dispatch, SetStateAction, useState } from 'react';
import { Todo } from '../App.tsx';

type Props = {
  setTodolist: Dispatch<SetStateAction<Todo[]>>,
  todoList: Todo[]
}

export default function TodoForm({setTodolist, todoList}: Props) {
  const [title, setTitle] = useState('');

  const addTitle = () => {

    setTodolist([
      ...todoList,
      {id: Date.now().toString(), title, complete: false},
    ]);

    setTitle('');
  };

  const onChangeInput = (value: string) => {
    setTitle(value);
  };

  return (
      <>
        <h1>Todo App</h1>
        <form>
          <input type="text"
                 value={title}
                 onChange={(event) => onChangeInput(event?.target?.value)}
                 placeholder="Add a task..."/>
          <button onClick={addTitle}
                  type="button"
                  className="submit-btn">Add Task
          </button>
        </form>
      </>
  );
}
