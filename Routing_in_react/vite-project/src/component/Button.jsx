import React from 'react'
import "../css/Button.css"
function Button({title, variant, size}) {
  return (
    
    <button className={`button btn-${variant} btn-${size}`}>{title}{size}</button>
  )
}

export default Button