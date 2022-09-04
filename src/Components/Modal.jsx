import React, { useState, createRef } from "react";
import Caption from "./Caption";
import { VscChromeClose } from "react-icons/vsc";
import { exportComponentAsPNG } from "react-component-export-image";

export default function Modal({ meme, handleClose }) {
  const [captions, setCaptions] = useState(0);
  const memeRef = createRef();

  return (
    <div className="modal">
      <div className="meme-image">
        <div ref={memeRef} style={{ width: "500px", height: "500px" }}>
          {Array(captions)
            .fill(0)
            .map((e) => (
              <Caption />
            ))}
          <img src={meme.url} alt={meme.name} />
        </div>
      </div>
      <div className="meme-text">
        <span className="close-icon" onClick={() => handleClose()}>
          <VscChromeClose color="#FFF" />
        </span>
        <button
          className="add-text"
          onClick={() => setCaptions((prev) => prev + 1)}
        >
          Add text
        </button>
        <button
          className="save-meme"
          onClick={() => exportComponentAsPNG(memeRef)}
        >
          Save meme
        </button>
      </div>
    </div>
  );
}
