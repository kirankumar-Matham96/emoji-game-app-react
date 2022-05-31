import './index.css'

const NavBar = props => {
  const {score, topScore} = props

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <p className="logo-name">Emoji Games</p>
      </div>
      <div className="nav-items">
        <p className="nav-item">Score: {score}</p>
        <p className="nav-item">Top Score: {topScore}</p>
      </div>
    </nav>
  )
}

export default NavBar
