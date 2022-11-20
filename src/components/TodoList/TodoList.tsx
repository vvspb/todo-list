import { useAppSelector } from '../../hooks';
import TodoItem from '../TodoItem/TodoItem';

import styles from './index.module.less'

const TodoList: React.FC = () => {
  const tasks = useAppSelector(state => state.todos.list);  

  return (
    <section className={styles.section}>
        <h2 className={styles.sectionSubTitle}>todo list</h2>
        <ul>
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              {...task}
            />
          ))}
       </ul>
    </section>
  );
};

export default TodoList;