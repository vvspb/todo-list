import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export type Todo = {
  id: string;
  title: string;
  description: string;
  date: string;
  completed: boolean;
}

export type TodosState = {
  list: Todo[],
}

const initialState: TodosState = {
  list: [],
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.list.push({
        id: new Date().toISOString(),
        title: action.payload.title,
        description: action.payload.description,
        date: new Date().toISOString(),
        completed: false,
      })
    },
    toggleComplete(state, action: PayloadAction<Todo['id']>) {
      const toggledTodo = state.list.find(todo => todo.id === action.payload);
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed
      }
      
    },
    removeTodo(state, action: PayloadAction<Todo['id']>) {
      state.list = state.list.filter( todo =>  todo.id !== action.payload)
    },
    editTodo(state, action: PayloadAction<Todo>) {
      state.list.forEach(task => {
        if ((task.id == action.payload.id)) {
            (task.title !== action.payload.title)? task.title = action.payload.title : task.title;
            (task.description !== action.payload.description)? task.description= action.payload.description : task.description;
            (task.date !== action.payload.date)? task.date = action.payload.date : task.date;
        }
      })
    }
}
});


export const {addTodo, toggleComplete, removeTodo, editTodo} = todoSlice.actions;

export default todoSlice.reducer;
