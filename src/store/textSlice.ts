// textSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoItem {
  id: string;
  title: string;
  textContent: string;
  completed: boolean;
  optionalDate?: string; // Novo campo opcional para a data
  optionalTime?: string; // Novo campo opcional para o horário
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
        optionalDate?: string; // Novo campo opcional para a data
        optionalTime?: string; // Novo campo opcional para o horário
      }>
    ) => {
      const newTodo: TodoItem = {
        id: Date.now().toString(),
        title: action.payload.title,
        textContent: action.payload.textContent,
        completed: false,
        optionalDate: action.payload.optionalDate, // Novos campos do payload
        optionalTime: action.payload.optionalTime, // Novos campos do payload
      };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((item) => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = textSlice.actions;
export const textReducer = textSlice.reducer;
