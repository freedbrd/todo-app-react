import { Todo } from '../App.tsx';

type Props = {
  item: Todo,
  onDeleteItem: (index: string) => void
  onToggleComplete: (index: string) => void
}

export default function TodoItem({item, onDeleteItem, onToggleComplete}: Props) {
  return (
      <>
        <li>
          <input onChange={() => onToggleComplete(item?.id)} type="checkbox"/>
          <label className={item?.complete ? 'completed' : ''}>{item?.title}</label>
          <button onClick={() => onDeleteItem(item?.id)}>Delete</button>
        </li>
      </>
  )
}
