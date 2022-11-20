import { useAppDispatch } from '../../hooks';
import { toggleComplete, removeTodo } from '../../store/todoSlice';

import styles from './index.module.less'

interface TodoItemProps {
  id: string,
  title: string,
  description: string,
  date: string,
  completed: boolean,
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, description,  date, completed }) => {
  const dispatch = useAppDispatch();

  
  return (
    <li className={styles.li}>
      <label>
        <input
          type='checkbox'
          checked={completed}
          onChange={() => dispatch(toggleComplete(id))}
        />
      </label>
      <span className={styles.liTitle}>{title}</span>
      <span className={styles.liText}>{description}</span>
      <span className={styles.liText}>{date}</span>
      <span onClick={() => dispatch(removeTodo(id))}>&times;</span>
    </li>
  );
};

export default TodoItem;