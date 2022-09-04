import React from "react";

export default function Navbar({ scrollRef }) {
  return (
    <nav>
      <h1 ref={scrollRef}>Meme Generator</h1>
    </nav>
  );
}
