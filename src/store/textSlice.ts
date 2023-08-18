import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoItem {
  id: string;
  title: string;
  textContent: string;
  completed: boolean;
  createdAt: string;
  updateAt: string;
}

interface TextState {
  todos: TodoItem[];
}

const initialState: TextState = {
  todos: [],
};

const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{
        title: string;
        textContent: string;
        createdAt?: string;
        updateAt?: string;
      }>
    ) => {
      const newTodo: TodoItem = {
        id: Date.now().toString(),
        title: action.payload.title,
        textContent: action.payload.textContent,
        completed: false,
        createdAt: Date.now().toString(),
        updateAt: Date.now().toString(),
      };
      state.todos.push(newTodo);
    },
    editTodo: (
      state,
      action: PayloadAction<{
        id: string;
        title: string;
        textContent: string;
        createdAt?: string;
        updateAt?: string;
      }>
    ) => {
      const todo = state.todos.find((item) => item.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
        todo.textContent = action.payload.textContent;
        todo.updateAt = Date.now().toString();
      }
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((item) => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        todo.updateAt = Date.now().toString();
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, editTodo } = textSlice.actions;
export const textReducer = textSlice.reducer;
