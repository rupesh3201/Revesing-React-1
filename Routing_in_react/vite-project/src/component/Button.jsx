import React from 'react'
import "../css/Button.css"

function Button({title, variant, size , onClick}) {
  return (
    
    <button className={`button btn-${variant} btn-${size}   `}>{title}{size} onClick{onClick}</button>
  )
}

export default Button