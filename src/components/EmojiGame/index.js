/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

const selectedEmojisList = []

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, isLost: false, isWon: false}

  render() {
    const {score, topScore, isLost, isWon} = this.state
    const {emojisList} = this.props

    console.log({score, topScore, isLost, isWon})

    const shuffledEmojisList = id => {
      if (selectedEmojisList.includes(id) && score !== 12) {
        this.setState({isLost: true})
      } else if (selectedEmojisList.includes(id) && score === 12) {
        this.setState({isWon: true})
      } else if (!selectedEmojisList.includes(id)) {
        selectedEmojisList.push(id)
        console.log({selectedEmojisList})

        emojisList.sort(() => Math.random() - 0.5)
        this.setState(prevState => ({
          score: prevState.score + 1,
          topScore:
            prevState.score + 1 > prevState.topScore
              ? prevState.score + 1
              : prevState.topScore,
        }))
      }
    }

    return (
      <div className="container bg-container">
        <NavBar score={score} topScore={topScore} />
        <div className="main-container">
          {isLost || isWon ? (
            <WinOrLoseCard />
          ) : (
            <ul className="emoji-list-container">
              {emojisList.map(eachEmoji => (
                <EmojiCard
                  emojiDetails={eachEmoji}
                  shuffledEmojisList={shuffledEmojisList}
                  key={eachEmoji.id}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
