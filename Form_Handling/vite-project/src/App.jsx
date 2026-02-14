import React, { useEffect, useState } from 'react'
import "./App.css"
function App() {
  const [Data,setData] = useState(
  )
  const[Error, setError] = useState ("");
  const [Name , setName] = useState("");
    const [Age ,SetAge] = useState("");
  useEffect(()=>{const NameFromLocalStorage = localStorage.getItem("Name");
    if(NameFromLocalStorage){
      setName(NameFromLocalStorage);
    }
  },[])

  useEffect(()=>{const AgeFromLocalStorage = localStorage.getItem("Age");
    if(AgeFromLocalStorage){
      SetAge(AgeFromLocalStorage);
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
   
    if (!Age) {
    alert("pls enter your age");
    return;
  }
   localStorage.setItem("Age", Age);
    
  };
  return (
    <div>
    <h1>Hii ,{Name}</h1>
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
    setName("")

  }}
     >Clear</button>
    </div>
</div>
  )
}

export default App