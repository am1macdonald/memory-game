import React, { useState } from "react";
import Grid from "./components/GameGrid/Grid";
import TopBar from "./components/TopBar/TopBar";

function App() {
  const [score, setScore] = useState(0);

  const endGame = () => {
    console.log("Game over!!");
  };

  const handleClick = (e) => {
    e.preventDefault();
    setScore(score + 1);
    if (score === 10) {
      endGame();
    }
  };

  return (
    <div>
      <TopBar
        title={"Character Memory Game"}
        score={score.toString()}
        incrementScore={() => setScore(score + 1)}
      />
      <Grid handleClick={handleClick} />

      <input
        type="button"
        name="incrementScore"
        id="incrementScore"
        value="Increment Score"
        onClick={handleClick}
      />
    </div>
  );
}

export default App;
