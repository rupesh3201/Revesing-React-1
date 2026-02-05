export default function EmojiDisplay({ selectedEmoji }) {
  return (
    <div className="display-box">
      <h3>Selected Emoji:</h3>
      <p className="big-emoji">{selectedEmoji || "None 😅"}</p>
    </div>
  );
}
