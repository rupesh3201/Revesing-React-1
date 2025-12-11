import React from 'react'
import Nav from '../component/Nav'
import Button from '../component/Button'
function About() {
  return (
    <>
  
    <Nav activeMenu = "/about" />
    <Button title= "Click Me"/>
      <div> content of About</div>
    </>
  )
}

export default About