import React, { useState } from "react";
import Grid from "./components/GameGrid/Grid";
import TopBar from "./components/TopBar/TopBar";

function App() {
  const [score, setScore] = useState(0);
  const [map, setMap] = useState({});

  const endGame = () => {
    console.log("Game over!!");
    setScore(0);
    setMap({})
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
    console.log(map)
  };

  return (
    <div>
      <TopBar
        title={"Character Memory Game"}
        score={score.toString()}
        incrementScore={() => setScore(score + 1)}
      />
      <Grid handleClick={handleClick} />
    </div>
  );
}

export default App;
