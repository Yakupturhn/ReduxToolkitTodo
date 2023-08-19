import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../stores/Modal";
import modals from "../modals";

const Modal = () => {
  const { name, data } = useSelector((state) => state.Modal);

  console.log(useSelector((state) => state.Modal));

  const modal = modals.find((m) => m.name === name);

  const dispatch = useDispatch();

  const close = () => {
    dispatch(closeModal());
  };

  return (
    <div className="modal">
      <div className="modal-inner">
        <modal.element close={close} data={data}></modal.element>
      </div>
    </div>
  );
};

export default Modal;
