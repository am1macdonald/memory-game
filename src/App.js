import React, { useEffect, useState } from "react";
import Grid from "./components/GameGrid/Grid";
import CreditGrid from "./components/GameGrid/CreditGrid"
import TopBar from "./components/TopBar/TopBar";
import BottomBar from "./components/BottomBar/BottomBar";
import Rules from "./components/popups/Rules";
import background from "./erik-mclean-27kCu7bXGEI-unsplash.jpg";
import Announcement from "./components/popups/Announcement";

function App() {
  const [score, setScore] = useState(0);
  const [map, setMap] = useState({});
  const [rulesDisplay, setRulesDisplay] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [creditMode, setCreditMode] = useState(false);

  const endGame = () => {
    setScore(0);
    setMap({});
    setGameOver(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (Object.prototype.hasOwnProperty.call(map, e.target.id)
    ) {
      setGameOver(true);
      return;
    }
    setScore(score + 1);
    setMap((prevMap) => ({
      ...prevMap,
      [e.target.id]: undefined,
    }));
  };
  useEffect(() => {
    if (score === 10 ) {
      setGameOver(true);
      return;
    }
  })

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {rulesDisplay && <Rules toggle={() => setRulesDisplay(false)} />}
      {gameOver && <Announcement restart={endGame} winOrLose={score === 10} />}
      <TopBar
        title={"Comic Card Game"}
        score={score.toString()}
        incrementScore={() => setScore(score + 1)}
      />
      <div className="main center">
        {!creditMode && !rulesDisplay && !gameOver && <Grid handleClick={handleClick} />}

        {creditMode && !rulesDisplay && !gameOver && <CreditGrid />}
      </div>
      <BottomBar toggleCredits={() => setCreditMode(!creditMode)}/>
    </div>
  );
}

export default App;
