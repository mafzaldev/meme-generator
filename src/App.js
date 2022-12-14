import "./App.css";

import { useEffect, useState, useCallback, useRef } from "react";
import Header from "./Components/Header";
import Grid from "./Components/Grid";
import Credits from "./Components/Credits";
import Modal from "./Components/Modal";

function App() {
  const [memes, setMemes] = useState([]);
  const [modal, setModal] = useState(false);
  const scrollRef = useRef();

  const shuffleMemes = (array) => {
    let m = array.length,
      t,
      i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  };

  const handleModal = () => {
    setModal((prev) => !prev);
  };

  const getMemes = useCallback(async () => {
    let tempMemes = [];
    const response = await fetch("https://api.imgflip.com/get_memes");
    const data = await response.json();
    tempMemes = data.data.memes;
    const anotherTemp = shuffleMemes(tempMemes);
    setMemes(anotherTemp);
  }, []);

  useEffect(() => {
    getMemes();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      {modal && <Modal handleModal={handleModal} />}
      <Header scrollRef={scrollRef} handleModal={handleModal} />
      <Grid Memes={memes} scrollRef={scrollRef} />
      <Credits />
    </div>
  );
}

export default App;
