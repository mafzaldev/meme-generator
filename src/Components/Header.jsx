import React from "react";

export default function Header({ scrollRef }) {
  return (
    <nav>
      <a href="/#">
        <h1 ref={scrollRef}>Meme Generator</h1>
      </a>
    </nav>
  );
}
