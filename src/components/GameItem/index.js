import './index.css'

const GameItem = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, imageUrl, thumbnailUrl, category} = emojiDetails

  const onClickGameItem = () => {
    clickEmoji(id)
  }
  return (
    <li className="emojis-list">
      <button type="button" className="btn" onClick={onClickGameItem}>
        <img src={imageUrl} alt="match" />
        <img src={thumbnailUrl} alt="thumbnail" />
      </button>
      <p className="category">{category}</p>
    </li>
  )
}

export default GameItem
