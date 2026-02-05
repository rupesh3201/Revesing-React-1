export default function EmojiList({ setSelectedEmoji }) {
  const emojis = ["😀", "😂", "😍", "🔥", "😎", "🥳", "❤️", "👍"];

  return (
    <div className="emoji-list">
      {emojis.map((emoji, index) => (
        <button
          key={index}
          className="emoji-btn"
          onClick={() => setSelectedEmoji(emoji)}
        >
          {emoji}
        </button>
      ))}
    </div>
  );
}
