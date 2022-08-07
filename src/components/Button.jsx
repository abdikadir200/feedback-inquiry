import React from 'react'

function Button({children, version, type, isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}> 
    {children}
    </button>
    
  )
}

Button.defaultProps = {
    type: "button",
    isDisabled: false,
    version: "primary"
}

export default Button;