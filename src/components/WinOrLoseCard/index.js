import './index.css'

const WinOrLoseCard = () => (
  <div className="win-card">
    <div className="text-container">
      <h1 className="win-lose-heading">You Won</h1>
      <p className="win-lose-description">Best Score</p>
      <p className="score">12/12</p>
      <button type="button" className="play-again-button">
        Play Again
      </button>
    </div>
    <img src="" alt="" className="win-lose-image" />
  </div>
)

export default WinOrLoseCard
