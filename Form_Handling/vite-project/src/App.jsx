import React, { useEffect, useState } from 'react'
import "./App.css"
function App() {
  const [Data,setData] = useState(
  )
  const[Error, setError] = useState ("");
  const [Name , setName] = useState("");
    const [Age ,SetAge] = useState("");
  // useffect Load when Page Load 
  useEffect(()=>{const NameFromLocalStorage = localStorage.getItem("Name");
    if(NameFromLocalStorage){
      setName(NameFromLocalStorage);
    }
  },[])
 // useffect Load for age 
  useEffect(()=>{const AgeFromLocalStorage = localStorage.getItem("Age");
    if(AgeFromLocalStorage){
      SetAge(AgeFromLocalStorage);
    }
  },[])


  // useffect Load when Name Change
  useEffect(()=>{
    if(Name.length > 0 && Name.length < 3)
    {
      setError("Name Should be at least 3 char long");
    }else
    setError("");

  },[Name])

  // useffect Load when AGE Change
  useEffect(()=>{
    if (!Age || Age < 0 || Age > 100) {
  setError("Please enter a valid age");
} 
else if (Age <= 18 ) {
  setError("Age must be greater than 18");
} 
else {
  setError("");
}
;
  },[Age])

  const saveName = ()=>{
    if (!Name ){
      alert("pls enter your name");
      return;
    }
    localStorage.setItem("Name", Name);
   
    if (!Age) {
    alert("pls enter your age");
    return;
  }
   localStorage.setItem("Age", Age);
    
  };


  return (
    <div>
    <h1>Hello, {Name}! Hope Your Doing Well</h1>
    <p>You are {Age?Age : 'Unkown '} years Old</p>
    <input type="text"
     placeholder='Enter your Name' 
    className='InputName'
     value={Name}
    onChange={(e)=>{
      setName(e.target.value)
    }}/>
 &nbsp;
    <input 
    type='number'
    placeholder='Enter Your Age'
    className='InputName'
    value={Age}
      onChange={(e)=>{
      SetAge(e.target.value)
    }}/>
    <p style={{ color: "red" }}>{Error}</p>    
    <div className='Btn_container'>

      {/* save btn */}
    <button className={`btn ${Error ? 'btndisable' : ''}`} onClick={()=>{
      saveName()
  
    }}>Save</button> 

    {/* clear btn */}
    <button className='btn'
    onClick={()=>{
    setName("");
    SetAge("");
    localStorage.clear();
    setError("");

  }}
     >Clear</button>
    </div>
</div>
  )
}

export default App