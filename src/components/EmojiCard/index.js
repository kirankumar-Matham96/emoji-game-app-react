import './index.css'

const EmojiCard = props => {
  const {emojiDetails, shuffledEmojisList} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onSelectEmoji = () => {
    shuffledEmojisList(id)
  }

  return (
    <li className="emoji-card-container">
      <button type="button" onClick={onSelectEmoji} className="button">
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
