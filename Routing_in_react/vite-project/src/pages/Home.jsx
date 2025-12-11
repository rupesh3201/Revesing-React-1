import React from 'react'
import Nav from '../component/Nav'
import Button from '../component/Button'

function Home() {
  return (
    <>
   
     <Nav activeMenu = "/" />
        <Button title= "Login" variant="login" />

      <div>content of Home</div>
    </>
  )
}

export default Home