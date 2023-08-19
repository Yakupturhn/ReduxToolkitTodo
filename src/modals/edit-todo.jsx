import React, { useState } from "react";
import { editTodo } from "../stores/todo";
import { useDispatch } from "react-redux";

const EditTodo = ({ close, data }) => {
  const [todo, setTodo] = useState(data.title);
  const [done, setDone] = useState(data.done);
  const dispatch = useDispatch();

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(
      editTodo({
        id: data.id,
        title: todo,
        done,
      })
    );
    close();
  };
  return (
    <div>
      {JSON.stringify(data)}
      <form onSubmit={submitHandle}>
        <input
          className="border b-2 border-black p-2"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <br />
        <label htmlFor="">
          <input
            type="checkbox"
            value={done}
            onChange={(e) => setDone(e.target.value)}
          />
          Tamamlandı olarak işaretle
        </label>
        <br />
        <button
          className="border border-gray-500 px-4 py-2 rounded-md"
          type="submit"
        >
          Kaydet
        </button>
      </form>

      <button
        className="border border-gray-500 px-4 py-2 rounded-md "
        onClick={close}
      >
        Kapat
      </button>
    </div>
  );
};

export default EditTodo;
