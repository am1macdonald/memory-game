import React, { useState } from "react";
import Grid from "./components/GameGrid/Grid";
import TopBar from "./components/TopBar/TopBar";
import BottomBar from "./components/BottomBar/BottomBar";
import Rules from "./components/popups/Rules";
import background from "./erik-mclean-27kCu7bXGEI-unsplash.jpg";

function App() {
  const [score, setScore] = useState(0);
  const [map, setMap] = useState({});
  const [rulesDisplay, setRulesDisplay] = useState(true);

  const endGame = () => {
    console.log(score === 10 ? "You win!" : "Game over!!");
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
    <div className="app" style={{  
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      {rulesDisplay && <Rules toggle={() => setRulesDisplay(false)} />}
      <TopBar
        title={"Character Memory Game"}
        score={score.toString()}
        incrementScore={() => setScore(score + 1)}
      />
      <div className="main center">
        {!rulesDisplay && <Grid handleClick={handleClick} />}
      </div>
      <BottomBar />
    </div>
  );
}

export default App;
