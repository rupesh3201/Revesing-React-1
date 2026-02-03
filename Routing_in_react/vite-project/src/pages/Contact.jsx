import React from 'react'
import Nav from '../component/Nav'
import Button from '../component/Button'

function Contact() {

  return (
    <>
      <Nav activeMenu="/contact" />

      <Button title="Call Now" variant="call" />

      <Button 
        title="Delete" 
        variant="delete" 
        onClick={()=>{
          alert("saved");
        }}
      />

      <div>Content of Contact</div>
    </>
  )
}

export default Contact
