import React from "react";
import { ToastContainer as ToastContainerDefault } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastContainer({ autoClose }) {
  return (
    <ToastContainerDefault
      autoClose={autoClose}
      className="toast-container"
      toastClassName="toast"
      closeButton={false}
      hideProgressBar
    />
  );
}
