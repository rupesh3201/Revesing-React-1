import React from 'react'
import "./App.css"
function EmojiBtn({ emoji, setEmoji }) {
  return (
    <div className="EmojiBtn" onClick={()=>{setEmoji(emoji)}}>{emoji}</div>
  )
}

export default EmojiBtn;