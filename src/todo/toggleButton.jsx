import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../stores/theme";

function ToggleButton() {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  console.log(useSelector((state) => state));
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <button className="border b-2 border-green-500 p-2" onClick={handleClick}>
      {isDarkTheme ? "Light Theme" : "Dark Theme"}
    </button>
  );
}

export default ToggleButton;
