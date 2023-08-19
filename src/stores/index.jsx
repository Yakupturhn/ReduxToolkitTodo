import { configureStore } from "@reduxjs/toolkit";

import todos from "./todo";
import Auth from "./Auth";
import Modal from "./Modal";
import theme from "./theme";

const store = configureStore({
  reducer: {
    todo: todos,
    Auth,
    Modal,
    theme,
  },
});

export default store;
