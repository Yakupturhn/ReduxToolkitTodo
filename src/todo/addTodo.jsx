import React, { useState } from "react";
import { addTodo, setValue } from "../stores/todo";
import { useDispatch, useSelector } from "react-redux";

const AddTodo = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.Auth);
  const { value } = useSelector((state) => state.todo);

  const submitHandle = (e) => {
    e.preventDefault();

    if (value.trim() !== "") {
      dispatch(
        addTodo({
          title: value,
          done: false,
          id: Math.floor(Math.random() * 100),
        })
      );
      dispatch(setValue(""));
    }
  };

  const handleValue = (e) => {
    dispatch(setValue(e.target.value));
  };

  return (
    <form
      onSubmit={submitHandle}
      className="flex items-center gap-2 justify-center"
    >
      <input
        type="text"
        className=" border-2 p-2 w-[400px]"
        value={value}
        onChange={handleValue}
      />
      <button
        disabled={!value || !user}
        className="bg-red-500 p-2 "
        type="submit"
      >
        Ekle
      </button>
    </form>
  );
};

export default AddTodo;
