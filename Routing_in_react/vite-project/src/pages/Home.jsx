import React, { useState } from 'react'
import Nav from '../component/Nav'
import Button from '../component/Button'

function Home() {

  
  
  const  [ count , setCount] = useState (0);
  return (
    <>
   
     <Nav activeMenu = "/" />
        <Button title= "Login" variant="login" />
         &nsbp;<h1>Value : {count}</h1>
         <button onClick={()=>{
        setCount( count + 1);
          console.log(count);
         }}>Increase</button> 

        
          <button onClick={()=>{
            setCount( count - 1);
          console.log(count);
          }}>Decrease</button>


      <div>content of Home</div>
    </>
  )


}



export default Home