import React from 'react'
import Nav from '../component/Nav'
import Button from '../component/Button'
function Contact() {
  return (
    <>
   
     <Nav activeMenu = "/contact" />
        <Button title= "Call Now" variant="call"/>
        <Button title= "Call Now" variant="primary"/>
      <div>contant of Contact</div>
     </>
  )
}

export default Contact