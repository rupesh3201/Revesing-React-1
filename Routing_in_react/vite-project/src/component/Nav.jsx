import React from 'react'
import "../css/Navbar.css"
function Nav({activeMenu}) {
  return (
   <div className='navbar'>
     <a href="/" className={activeMenu == "/" ? "active" :"" }>Home </a> &nbsp;
    <a href="/about"className={activeMenu == "/about" ? "active" :"" }>About</a> &nbsp;
     <a href="/contact"className={activeMenu == "/contact" ? "active" :"" }>Contact </a> &nbsp;
    </div>
  )
}

export default Nav