import React, { useState } from "react";
import "./App.css"
import EmojiBtn from "./EmojiBtn";
import ColourBtn from "./ColourBtn";

function App() {
  const [emoji,setEmoji] = useState ("🤖");
   const [SilderVal,setSilderVal] = useState (50);
  
  return (
    <div className="min-h-screen w-full relative bg-white">

      {/* Background Glow (Behind Everything) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(
              circle at top center,
              rgba(70, 130, 180, 0.5),
              transparent 70%
            )
          `,
          filter: "blur(80px)",
        }}
      />
      <div>

      {/* Main Content (Above Background) */}
      <div className="relative z-10  justify-center items-center min-h-screen">
     <div className='"w-full shadow-sm"'> 
      <h1 className='max-w-7xl mx-auto px-6 py-4 text-center text-2xl md:text-3xl font-semibold text-gray-800'>Emoji Picker With Using <span className="font-extrabold ml-2 text-red-900" >UseState</span> </h1> 
      <p className='text-2xl font-medium text-center text-black-800'>This a Simple React App That Demonstrates How UseState Works</p> </div> 
          <div className="Emoji-Container" style={{
            fontSize:`${SilderVal}px`
          }}> {emoji}</div>
          <div className="SilderContainer">
            <input type="range" min="50" max ="200"className="slider" onChange={(e)=>{setSilderVal(e.target.value);

            }
            }
            value={SilderVal}
            />
            
          </div>
          <div className="Emoji-keypad">
          <div className="EmojiPicker">
            {/* Emoji comp */}
        <EmojiBtn emoji = {"👑"} setEmoji = {setEmoji}/>
        <EmojiBtn emoji = {"💫"} setEmoji = {setEmoji}/>
        <EmojiBtn emoji = {"🥂"} setEmoji = {setEmoji}/>
         <EmojiBtn emoji = {"🖤"} setEmoji = {setEmoji}/>
        <EmojiBtn emoji = {"🔥"} setEmoji = {setEmoji}/>
        <EmojiBtn emoji = {"🪐"} setEmoji = {setEmoji}/>
         <EmojiBtn emoji = {"🎧"} setEmoji = {setEmoji}/>
        <EmojiBtn emoji = {"💫"} setEmoji = {setEmoji}/>
        <EmojiBtn emoji = {"🚀"} setEmoji = {setEmoji}/>
        <EmojiBtn emoji = {"🧿"} setEmoji = {setEmoji}/>
        <EmojiBtn emoji = {"⛓️"} setEmoji = {setEmoji}/>       
        </div>
        </div>

        <div className="colour-keypad">
          <div className="colourPicker">
            {/* Emoji comp */}
         <EmojiBtn emoji = {"🖤"} setEmoji = {setEmoji}/>
        <EmojiBtn emoji = {"🔥"} setEmoji = {setEmoji}/>
        <EmojiBtn emoji = {"🪐"} setEmoji = {setEmoji}/>
         <EmojiBtn emoji = {"🎧"} setEmoji = {setEmoji}/>
        <EmojiBtn emoji = {"💫"} setEmoji = {setEmoji}/>
        <EmojiBtn emoji = {"🚀"} setEmoji = {setEmoji}/>
        <EmojiBtn emoji = {"🧿"} setEmoji = {setEmoji}/>
        <EmojiBtn emoji = {"⛓️"} setEmoji = {setEmoji}/>       
        </div>
        </div>
  </div> 
    </div>
    </div>
  );
}

export default App;
