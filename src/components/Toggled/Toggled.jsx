import React from 'react'
import './Toggled.css'

const Toggled = ({toggled, onClick}) => {

  return (
    <div>
        <div onClick={onClick} className={`modeToggle ${toggled ? "night" : ""}`}>
            <div className="notch"></div>
        </div>
    </div>
  )
}

export default Toggled
