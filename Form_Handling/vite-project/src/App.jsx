import React, { useEffect, useState } from 'react'
import "./App.css"
function App() {
  const[Error, setError] = useState ("");
  const [Name , setName] = useState("");
  useEffect(()=>{const NameFromLocalStorage = localStorage.getItem("Name");
    if(NameFromLocalStorage){
      setName(NameFromLocalStorage);
    }
  },[])

  useEffect(()=>{
    if(Name.length > 0 && Name.length < 3)
    {
      setError("Name Should be at least 3 char long");
    }else
    setError("");
  },[Name])

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
    <p style={{ color: "red" }}>{Error}</p>    
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