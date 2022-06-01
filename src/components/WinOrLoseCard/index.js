import './index.css'

const WinOrLoseCard = props => {
  const {isWon, onNextGame, score} = props

  return (
    <div className="win-lose-card">
      <div className="text-container">
        {isWon ? (
          <h1 className="win-lose-heading">You Won</h1>
        ) : (
          <h1 className="win-lose-heading">You Lose</h1>
        )}
        {isWon ? (
          <>
            <p className="win-lose-description">Best Score</p>
            <p className="score">12/12</p>
          </>
        ) : (
          <>
            <p className="win-lose-description">Score</p>
            <p className="score">{score}/12</p>
          </>
        )}
        <button
          type="button"
          className="play-again-button"
          onClick={onNextGame}
        >
          Play Again
        </button>
      </div>
      {isWon ? (
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
          className="win-lose-image"
        />
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
          className="win-lose-image"
        />
      )}
    </div>
  )
}

export default WinOrLoseCard
