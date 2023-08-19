import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../stores/todo";
import { openModal } from "../stores/Modal";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.Auth);
  console.log(todo);
  const editHandle = () => {
    dispatch(openModal({ name: "edit-todo", data: todo, open: true }));
  };

  const deleteHandle = () => {
    // setTodos(todos.filter((t) => t.id !== todo.id));
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className="flex items-center gap-2 justify-center">
      <li className="flex justify-between items-center w-[400px] p-2">
        <span style={{ textDecoration: todo.none ? "line-through" : false }}>
          {todo.title} - {todo.id}
        </span>
        {todo.user === user.id && (
          <div className="flex gap-2 ">
            <button className="bg-red-500 p-2" onClick={editHandle}>
              Düzenle
            </button>
            <button className="bg-red-500 p-2" onClick={deleteHandle}>
              Sil
            </button>
          </div>
        )}
      </li>
    </div>
  );
};

export default TodoItem;
