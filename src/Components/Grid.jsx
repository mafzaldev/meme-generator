import React from "react";
import Modal from "./Modal";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function Grid({ Memes, scrollRef }) {
  const [modal, setModal] = React.useState(false);
  const [meme, setMeme] = React.useState(undefined);

  const handleImageClick = (meme) => {
    setModal(true);
    setMeme(meme);
    scroll();
  };

  const scroll = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleClose = () => {
    setModal(false);
  };

  return (
    <div className="meme-area">
      {modal && <Modal meme={meme} handleClose={handleClose} />}
      <div className="grid-container">
        {Memes.map((meme) => (
          <div
            className="grid-item"
            key={meme.id}
            onClick={() => handleImageClick(meme)}
          >
            <img src={meme.url} alt={meme.name} />
          </div>
        ))}
      </div>
      <div className="up-btn" onClick={scroll}>
        <BsFillArrowUpCircleFill size={40} color={"#fff"} />
      </div>
    </div>
  );
}
