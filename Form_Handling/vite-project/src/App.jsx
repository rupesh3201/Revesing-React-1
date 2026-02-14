import React, { useEffect, useState } from 'react'
import "./App.css"
function App() {
  const [Data,setData] = useState(
  )
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);
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

  },[Name] [Age])



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
  const calculateExactAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust days
    if (days < 0) {
      months--;
      const prevMonthDays = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
      days += prevMonthDays;
    }

    // Adjust months
    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months, days };
  };

  useEffect(() => {
    if (dob) {
      setAge(calculateExactAge(dob));
    }
  }, [dob]);


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

     <div style={{ padding: "20px" }}>
      <h2>Find Actual Age  Calculator 🎂</h2>

      <input
  type="date"
  value={dob}
  onChange={(e) => setDob(e.target.value)}
  className="dob-input"
/>


      {age && (
        <h3>
          Your Age is: {age.years} Years, {age.months} Months, {age.days} Days
        </h3>
      )}
    </div>
</div>
  )
}

export default App