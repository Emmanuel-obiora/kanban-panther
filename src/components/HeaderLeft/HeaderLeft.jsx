import React from 'react'
import Logo from '../../assets/logo.svg'
import './HeaderLeft.css'

const HeaderLeft = () => {
  return (
    <div className="header-left" id="Header">
        <div className="logo">
        <img src={Logo} alt="Kanban Logo" />
        </div>
    </div>
  )
}

export default HeaderLeft
