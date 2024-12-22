import React from "react";

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");
  console.log(gameStatus);

  function handleGuessSubmit(event) {
    event.preventDefault();

    // Pass the guess state up to the <Game />
    handleSubmitGuess(tentativeGuess);

    // Clear the form after submit.
    setTentativeGuess("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleGuessSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={tentativeGuess}
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word."
        disabled={gameStatus !== "running"}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
      />
      <code>{tentativeGuess}</code>
    </form>
  );
}

export default GuessInput;
