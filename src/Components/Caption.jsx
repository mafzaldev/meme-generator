import React, { useState } from "react";
import Draggable from "react-draggable";

const Caption = () => {
  const [editMode, setEditMode] = useState(false);
  const [caption, setCaption] = useState("Double click to edit caption");
  const [textSize, setTextSize] = useState(25);
  const [color, setColor] = useState("#000");

  const styles = { color: color, fontSize: `${textSize}px` };

  const changeEditMode = () => {
    setEditMode((prev) => !prev);
  };

  return (
    <>
      {editMode && (
        <div>
          <input
            type="text"
            placeholder="Type caption here"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
          <input
            type="number"
            placeholder="Font size"
            value={textSize}
            onChange={(e) => setTextSize(e.target.value)}
          />
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      )}
      <Draggable>
        <div className="caption" style={styles} onDoubleClick={changeEditMode}>
          {caption}
        </div>
      </Draggable>
    </>
  );
};

export default Caption;
