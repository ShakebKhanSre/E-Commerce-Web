import React from "react";
import "./index.css";

const Modal = ({ headingText, buttonText, onButtonPress }) => {
  return (
    <div className="Modal">
      <div className="Details">
        <p>{headingText}</p>
        <button onClick={onButtonPress}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Modal;
