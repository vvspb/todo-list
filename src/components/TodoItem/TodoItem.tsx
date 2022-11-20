import { useAppDispatch } from '../../hooks';
import { toggleComplete, removeTodo, editTodo } from '../../store/todoSlice';
import { Button } from '../Button/Button';


import styles from './index.module.less'

interface TodoItemProps {
  id: string,
  title: string,
  description: string,
  date: string,
  completed: boolean,
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, description, date, completed }) => {
  const dispatch = useAppDispatch();
  
  return (
        // <li className={styles.li}>
        //   <label>
        //     <input
        //       type='checkbox'
        //       checked={completed}
        //       onChange={() => dispatch(toggleComplete(id))}
        //     />
        //   </label>
        //   <input className={styles.liTitle} defaultValue={title}/>
        //   <textarea className={styles.liText} defaultValue={description} cols={50} rows={4}/>
        //   <input type='date' className={styles.liText} defaultValue= {date}/>
        //   <button onClick={() => dispatch(removeTodo(id))}>del task</button>
        //   <button>edit task</button>
        // </li>
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
          <Button 
            onClick={() =>dispatch(removeTodo(id))}
            color={'Red'}             
          >
            delete task
          </Button>
          <Button 
            color={'Orange'}             
          >
            edit task
          </Button>
        </li>
  );
};

export default TodoItem;

