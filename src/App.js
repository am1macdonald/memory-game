import React, { useState } from "react";
import Grid from "./components/GameGrid/Grid";
import TopBar from "./components/TopBar/TopBar";
import BottomBar from "./components/BottomBar/BottomBar";

function App() {
  const [score, setScore] = useState(0);
  const [map, setMap] = useState({});

  const endGame = () => {
    console.log("Game over!!");
    setScore(0);
    setMap({});
  };

  const handleClick = (e) => {
    e.preventDefault();
    setScore(score + 1);
    if (
      score === 10 ||
      Object.prototype.hasOwnProperty.call(map, e.target.id)
    ) {
      endGame();
    }
    setMap((prevMap) => ({
      ...prevMap,
      [e.target.id]: undefined,
    }));
  };

  return (
    <div className="app">
      <TopBar
        title={"Character Memory Game"}
        score={score.toString()}
        incrementScore={() => setScore(score + 1)}
      />
      <div className="main center">
        <Grid handleClick={handleClick} />
      </div>
      <BottomBar />
    </div>
  );
}

export default App;
