import React from 'react'
import Nav from '../component/Nav'
import Button from '../component/Button'
function About() {
  return (
    <>
  
    <Nav activeMenu = "/about" />
    <Button title= "Click Me" variant="click" size="big"/>
      <div> content of About</div>
    </>
  )
}

export default About