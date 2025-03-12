import React, { FC } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ onClose, children }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button
          onClick={onClose}
          className="modal-close-button"
        >
          Close
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;