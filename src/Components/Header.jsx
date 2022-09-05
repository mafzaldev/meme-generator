import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";

export default function Header({ scrollRef, handleModal }) {
  return (
    <nav>
      <a href="/#">
        <h1 ref={scrollRef}>Meme Generator</h1>
      </a>
      <span className="inst-icon">
        <IoMdInformationCircleOutline
          color="#fff"
          size={35}
          onClick={handleModal}
        />
      </span>
    </nav>
  );
}
