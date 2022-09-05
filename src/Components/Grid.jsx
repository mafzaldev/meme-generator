import React, { useState } from "react";
import EditSection from "./EditSection";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function Grid({ Memes, scrollRef }) {
  const [editSection, setEditSection] = useState(false);
  const [meme, setMeme] = useState(undefined);

  const handleImageClick = (meme) => {
    setEditSection(true);
    setMeme(meme);
    scroll();
  };

  const scroll = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="meme-area">
      {editSection && <EditSection meme={meme} />}
      <div className="grid-container">
        {Memes.map((meme) => (
          <div
            className="grid-item"
            key={meme.id}
            onClick={() => handleImageClick(meme)}
          >
            <img src={meme.url} alt={meme.name} />
            <div className="meme-name">{meme.name}</div>
          </div>
        ))}
      </div>
      <div className="up-btn" onClick={scroll}>
        <BsFillArrowUpCircleFill size={40} color={"#fff"} />
      </div>
    </div>
  );
}
