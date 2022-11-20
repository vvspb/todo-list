import { Todo } from '../../store/todoSlice';
import styles from './index.module.less'

interface NewTodoFormProps {
    title: string,
    description: string,
    date: string,
    updateTitle: (str: string) => void,
    updateText: (str: string) => void,
    updateDate: (str: string) => void,
    handleAction: () => void,
  }
  
  const NewTodoForm: React.FC<NewTodoFormProps> = ({ title, description, date, updateTitle, updateText, updateDate, handleAction }) => {
    
    return (
      <section className={styles.section}>
        <h2 className={styles.sectionSubTitle}>add new task</h2>
        <label className={styles.sectionLabel}>
          <span className={styles.sectionText}>task name</span>
          <input
            placeholder='add task'
            type='text' 
            value={title}
            onChange={(e) => updateTitle(e.target.value)}
          />
        </label>
        <label>
          <span className={styles.sectionText}>task description</span>
          <textarea
            placeholder='add description'
            name='description'
            cols= {50} 
            rows= {4}
            value={description}
            onChange={(e) => updateText(e.target.value)}
          />
        </label>
        <label>
          <span className={styles.sectionText}>task deadline</span>
            <input
              placeholder='add task deadline'
              type='date'
              value={date}
              onChange={(e) => updateDate(e.target.value)}
            /> 
        </label>
        <button onClick={handleAction}>add task</button>
      </section>
    );
  };
  
  export default NewTodoForm;

function updateTask(value: string): void {
  throw new Error('Function not implemented.');
}
