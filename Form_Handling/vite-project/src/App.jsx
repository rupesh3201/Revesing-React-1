import React, { useState } from 'react'
import "./App.css"
function App() {
  const [Name , setName] = useState("Buddy");
  const saveName = ()=>{
    if (!Name ){
      alert("pls enter your name");
      return;
    }
    localStorage.setItem("Name", Name);

  };
  return (
    <div>
      <h1>Hii , {Name}</h1>
    <input type="text"
     placeholder='Enter your Name' 
    className='InputName'
     value={Name}
    onChange={(e)=>{
      setName(e.target.value)
    }}/>
    <div className='Btn_container'>
    <button className='btn' onClick={()=>{
      saveName()
    }}>Save</button>
    <button className='btn'
    onClick={()=>{
    setName("")}}
     >Clear</button>
    </div>
    </div>
  )
}

export default App