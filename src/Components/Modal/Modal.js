import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss"; // Asegúrate de tener tu CSS aquí

const Modal = ({ isOpen, onClose, children, nameClass }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div id="modal-root" className={isOpen ? "open" : ""}>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className={`modal ${nameClass}`}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
