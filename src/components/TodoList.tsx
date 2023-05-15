import TodoItem from './TodoItem.tsx';
import { Todo } from '../App.tsx';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  todoList: Todo[]
  setTodolist: Dispatch<SetStateAction<Todo[]>>,
};

export default function TodoList({todoList, setTodolist}: Props) {
  const handleDeleteItem = (id: string) => {
    setTodolist(todoList?.filter(item => item?.id !== id));
  };

  const handleToggleItem = (id: string) => {
    setTodolist(todoList?.map(item => {

      return {
        ...item,
        complete: item?.id === id ? !item?.complete : item?.complete,
      };
    }));
  };

  return (
      <>
        <ul>
          {todoList?.length ? (
              <ul>
                {todoList?.map(item => (
                    <TodoItem
                        onDeleteItem={handleDeleteItem}
                        onToggleComplete={handleToggleItem}
                        key={item?.id}
                        item={item}
                    />
                ))}
              </ul>
          ) : (
              <p>No items found</p>
          )}
        </ul>
      </>
  );
}
