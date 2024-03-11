import './index.css' 

const RESET_IMAGE = 'https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png' 
const TROPHY_IMAGE = 'https://assets.ccbp.in/frontend/react-js/match-game-trophy.png' 

const WinOrLoseCard = props => {
    const {isWon, onClickPlayAgain, score} = props 
    const imageUrl = isWon ? WON_IMAGE : RESET_IMAGE
    const gameStatus = isWon ? 'You Won' : 'Restart'
    const scoreLabel = isWon ? 'Best Score' : 'Score' 

    return (
        <div className="win-or-lose-container">
        <div className="details-section">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="current-score">{scoreLabel}</p>
        <button type="button" className="play-button" onClick={onClickPlayAgain}>Play Again</button>
        </div>
        <div className="image">
        <img src={imageUrl} />
        </div>
        </div>
    )
}
export default WinOrLoseCard