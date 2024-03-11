const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <nav className="nav-bar">
      <div className="title-score">
        <div className="logo-and-title">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
        </div>
        {isGameInProgress && (
          <div className="score-container">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
