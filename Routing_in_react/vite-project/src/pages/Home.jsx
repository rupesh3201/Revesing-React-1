import React, { useState } from 'react'
import Nav from '../component/Nav'
import Button from '../component/Button'

function Home() {

  const price = 500 ;
  const  [ count , setCount] = useState (0);
  return (
    <>
   
     <Nav activeMenu = "/" />
        <Button title= "Login" variant="login" />
         &nbsp; <h1>Quantity: {count}</h1> &nbsp; <h1> price : {price}</h1>
         <button onClick={()=>{
        setCount( count + 1);
          console.log(count);
         }}>Increase</button> 

         &nbsp; 
          <button onClick={()=>{
            setCount( count - 1);
          console.log(count);
          }}>Decrease</button>
          
          <h1> Total bill is  {price *count}</h1>

      <div>content of Home</div>
    </>
  )


}



export default Home