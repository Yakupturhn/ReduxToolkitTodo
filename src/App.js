import { useState } from "react";
import "./App.css";
import Header from "./todo/header";
import AddTodo from "./todo/addTodo";
import Todolist from "./todo/todolist";
import Modal from "./todo/Modal";
import ToggleButton from "./todo/toggleButton";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const { open: isModalOpen } = useSelector((state) => state.Modal);
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  return (
    <div className={`App ${isDarkTheme ? "dark-theme" : ""}`}>
      {isModalOpen && <Modal></Modal>}
      <ToggleButton />
      <Header></Header>
      <AddTodo></AddTodo>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
