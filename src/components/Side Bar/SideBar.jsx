import React from 'react'
import './SideBar.css'
import {AiFillEye} from 'react-icons/ai'

const SideBar = () => {

  function openNav(){
    const closing = document.getElementById('mainNav');
    const addition = document.getElementById('Header');
    const addition2 = document.getElementById('Header2');
    const scroller = document.getElementById('shiftR');

    closing.classList.add("close-nav");
    addition.classList.add("increase-width");
    addition2.classList.add("increase-width2");
    scroller.classList.add("scroller-open");
}

  return (
    <div>
        <span className="side" onClick={openNav}>< AiFillEye /></span>
    </div>
  )
}

export default SideBar
