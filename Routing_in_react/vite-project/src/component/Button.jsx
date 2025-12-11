import React from 'react'
import "../css/Button.css"
function Button({title, variant}) {
  return (
    
    <button className={`button btn-${variant}`}>{title}</button>
  )
}

export default Button