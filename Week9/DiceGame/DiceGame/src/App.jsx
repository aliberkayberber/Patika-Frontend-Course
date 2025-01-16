import "./App.css";
import PlayerName from "./PlayerName";
import { useState } from "react";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const diceImages = [
  'public/images/dice1.png',
  'public/images/dice2.png',
  'public/images/dice3.png',
  'public/images/dice4.png',
  'public/images/dice5.png',
  'public/images/dice6.png',
]
function App() {
  const [playerName, setPlayerName] = useState("Player1");
  const [playerDice, setPlayerDice] = useState(0);
  const [computerDice, setComputerDice] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);

  const [computerScore, setComputerScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [rolling, setRolling] = useState(false);

  const [result, setResult] = useState("");

  const rollDice = async () => {
    setRolling(true);

    let randomPlayerDice = 0;
    let randomComputerDice = 0;
    for (let i = 0; i < 10; i++) {
      randomPlayerDice = Math.floor(Math.random() * 6) + 1;
      randomComputerDice = Math.floor(Math.random() * 6) + 1;

      setPlayerDice(randomPlayerDice);
      setComputerDice(randomComputerDice);
      await sleep(300);
      if (i === 9) {
        setRolling(false);
      }
    }

    if (randomPlayerDice > randomComputerDice) {
      setPlayerScore((prev) => prev + 1);
      setHighScore((prev) => prev + 1);
      setResult("Player Wins");
    } else if (randomPlayerDice < randomComputerDice) {
      setComputerScore((prev) => prev + 1);
      setResult("Computer Wins");
    }
    else {
      setResult("Draw");
    }
  };
  return (
    <>
      <h2>Dice Game</h2>
      <h1>{result}</h1>
      <div>
        <PlayerName  playerName={playerName} setPlayerName={setPlayerName}/>
        <h2>{playerName}</h2>
        <div>{playerDice > 0 && 
        (<img width={100} height={100} src={diceImages[playerDice - 1]} alt={`Dice ${playerDice}`} />)}</div>
        
      </div>
      <div>
        <h2>Computer</h2>
        <div>{computerDice > 0 && 
        (
            <img width={100} height={100} src={diceImages[computerDice - 1]} alt={`Dice ${computerDice}`} />
          )}</div>
      </div>
      <br />
      <button disabled={rolling} onClick={rollDice}>
        {rolling ? "Rolling..." : "Roll Dice"}
      </button>
      <div>
        <h2>Scores</h2>
        <p>{playerName} Score: {playerScore}</p>
        <p>Computer Score: {computerScore}</p>
        <p>High Score {highScore}</p>
      </div>
    </>
  );
}

export default App;
