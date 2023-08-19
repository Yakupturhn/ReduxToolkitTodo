import React from "react";
import TodoItem from "./item";
import { useSelector } from "react-redux";

const Todolist = () => {
  const { todos } = useSelector((state) => state.todo);

  return (
    <ul>
      {todos.map((todo, key) => (
        <TodoItem
          
          key={key}
          todo={todo}
        
        ></TodoItem>
      ))}
    </ul>
  );
};

export default Todolist;
