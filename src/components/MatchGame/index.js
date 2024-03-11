import {Component} from 'react'

import TabItem from '../TabItem'
import GameItem from '../GameItem'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

const tabsList = [
  {tabId: 'FRUIT', displayText: 'Fruits'},
  {tabId: 'ANIMAL', displayText: 'Animals'},
  {tabId: 'PLACE', displayText: 'Places'},
]

class MatchGame extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
    clickedEmojisList: [],
    isGameInProgress: true,
    topScore: 0,
  }
  resetGame = () => {
    this.setState({clickEmojisList: [], isGameInProgress: true})
  }
  renderScoreCard = () => {
    const {imagesList} = this.props
    const {clickEmojisList} = this.state
    const isWon = clickEmojisList.length === imagesList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={clickEmojisList.length}
      />
    )
  }
  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, isGameInProgress: false})
  }
  clickEmoji = id => {
    const {imagesList} = this.props
    const {clickedEmojisList} = this.props
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length
    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (imagesList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(imagesList.length)
      }
      this.setState(previousState => ({
        clickedEmojisList: [...previousState.clickedEmojisList, id],
      }))
    }
  }
  getShuffledEmojisList = () => {
    const {imagesList} = this.props
    return imagesList.sort(() => Math.random() - 0.5)
  }
  renderEmojisList = () => {
    const ShuffledEmojisList = this.getShuffledEmojisList()
    return (
      <ul className="emojis-list-container">
        {ShuffledEmojisList.map(emojiObject => (
          <GameItem
            key={emojiObject.id}
            emojiDetails={emojiObject}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }
  render() {
    const {clickedEmojisList, isGameInProgress, topScore} = this.state

    return (
      <div className="container">
        <NavBar
          currentScore={clickedEmojisList.length}
          isGameInProgress={isGameInProgress}
          topScore={topScore}
        />
        <div className="emoji-game-body">
          {isGameInProgress ? this.renderEmojisList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
  setActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }
  render() {
    const {activeTabId} = this.state

    return (
      <div className="app-container">
        <div className="game-store">
          <ul className="tabs-list">
            {tabsList.map(eachTab => (
              <TabItem
                key={eachTab.tabId}
                tabDetails={eachTab}
                setActiveTabId={this.setActiveTabId}
                isActive={activeTabId === eachTab.tabId}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MatchGame
