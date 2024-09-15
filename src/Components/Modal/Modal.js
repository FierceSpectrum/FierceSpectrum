import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

const Modal = ({ isOpen, onClose, children, nameClass }) => {
  const modalRef = useRef(null);
  const firstFocusDone = useRef(false); // Para rastrear si es la primera vez que se presiona Tab

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Deshabilitar scroll de la página

      const focusableElementsString =
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const modal = modalRef.current;
      const focusableElements = modal.querySelectorAll(focusableElementsString);
      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement =
        focusableElements[focusableElements.length - 1];

      const trapFocus = (e) => {
        if (e.key === "Tab") {
          if (!firstFocusDone.current && firstFocusableElement) {
            // Si es la primera vez que se presiona Tab, enfocar el botón de cerrar
            firstFocusDone.current = true;
            e.preventDefault();
            firstFocusableElement.focus();
            return;
          }

          if (e.shiftKey) {
            // Si se presiona Shift + Tab
            if (document.activeElement === firstFocusableElement) {
              e.preventDefault();
              lastFocusableElement.focus(); // Mover al último elemento
            }
          } else {
            // Si se presiona solo Tab
            if (document.activeElement === lastFocusableElement) {
              e.preventDefault();
              firstFocusableElement.focus(); // Mover al primer elemento
            }
          }
        }

        // Cerrar modal con Escape
        if (e.key === "Escape") {
          onClose();
        }
      };

      document.addEventListener("keydown", trapFocus);

      return () => {
        document.removeEventListener("keydown", trapFocus);
        document.body.style.overflow = "auto"; // Restaurar scroll de la página
        firstFocusDone.current = false; // Resetear el control de primer Tab
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div id="modal-root" className={isOpen ? "open" : ""}>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className={`modal ${nameClass}`} ref={modalRef}>
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
