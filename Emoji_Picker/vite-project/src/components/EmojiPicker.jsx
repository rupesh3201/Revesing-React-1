import { useState } from "react";
import EmojiList from "./EmojiList";
import EmojiDisplay from "./EmojiDisplay";

export default function EmojiPicker() {
  const [selectedEmoji, setSelectedEmoji] = useState("");

  return (
    <div className="picker-box">
      <h2>Select an Emoji 👇</h2>

      {/* Emoji List */}
      <EmojiList setSelectedEmoji={setSelectedEmoji} />

      {/* Display Selected Emoji */}
      <EmojiDisplay selectedEmoji={selectedEmoji} />
    </div>
  );
}
