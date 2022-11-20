import { useState } from 'react';
import { useAppDispatch } from './hooks';

import { addTodo } from './store/todoSlice';
import NewTodoForm from './components/NewTodoForm/NewTodoForm';
import TodoList from './components/TodoList/TodoList';

import styles from './index.module.less';
import { Header } from './components/Header/Header';
import { Todo } from './store/todoSlice';


function App() {
  const [description, setDescription] = useState<Todo['description']>('');
  const [title, setTitle] = useState<Todo['title']>('');
  const [date, setDate] = useState<Todo['date']>('');


  const dispatch = useAppDispatch();

  const handleAction = () => {
    if ((title.trim().length) && (description.trim().length) && (date.trim().length)) {
   
      console.log( date, 'title', title, 'descrip', description);
      dispatch(addTodo({
        id: date,
        title: title,
        description: description,
        date: date,
        completed: false
      }));
      setDescription('');
      setDate('');
      setTitle('');
    }
  }

  return (
    <>
     <Header/>     
      <NewTodoForm
        title={title}
        description={description}
        date={date}

        updateTitle={setTitle}
        updateText={setDescription}
        updateDate={setDate}

        handleAction={handleAction} 
      />
      <TodoList />
    </>
  );
}

export default App;
