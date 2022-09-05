import React from "react";
import { VscChromeClose } from "react-icons/vsc";

const Modal = ({ handleModal }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <span className="close-icon">
          <VscChromeClose color="#000" onClick={handleModal} />
        </span>
        <h2>Instructions</h2>
        <ol className="instructions">
          <li>Click on any image from the grid to choose as template</li>
          <li>Click on the "Add text" button to add text</li>
          <li>Double click on the text to change text, size and color</li>
          <li>Double click on the text to hide the text properties</li>
          <li>Click on the "Add text" to add more text</li>
          <li>Click on the "Save meme" button to save the meme</li>
        </ol>
      </div>
    </div>
  );
};

export default Modal;
