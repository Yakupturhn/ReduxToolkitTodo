import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  value: "",
};

const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos];
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title;
          todo.done = action.payload.done;
        }
        return todo;
      });
    },

    setValue: (state, action) => {
      state.value = action.payload;
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, editTodo, deleteTodo, setValue } = todos.actions;
export default todos.reducer;
