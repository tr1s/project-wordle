import React from "react";
import GuessInput from "../GuessInput/";
import GuessResults from "../GuessResults/GuessResults";
import WonBanner from "../WonBanner/";
import LostBanner from "../LostBanner/";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every page load.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // running || won || lost
  const [gameStatus, setGameStatus] = React.useState("running");
  const [guesses, setGuesses] = React.useState([]);
  console.log("guesses", guesses);

  function handleSubmitGuess(tentativeGuess) {
    // Set guesses with previous state then add the latest guess.
    // This method uses an object w/ ID and the guess, not necessary for this game.
    // setGuesses((prev) => [
    //   ...prev,
    //   { id: crypto.randomUUID(), tentativeGuess: tentativeGuess },
    // ]);
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
