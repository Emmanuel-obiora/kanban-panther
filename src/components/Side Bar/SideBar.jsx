import React from 'react'
import './SideBar.css'
import {AiFillEye} from 'react-icons/ai'
import { SlArrowDown } from 'react-icons/sl'

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

function showResizedNav(){
  const showing = document.getElementById('mainNav');
  const modalOpen = document.getElementById('modalC');

  showing.classList.add('show-resized-nav');
  modalOpen.classList.add('open-modal-blocker');
}

  return (
    <div>
        <span className="side" onClick={openNav}>< AiFillEye /></span>
        <SlArrowDown className="side-drop-arrow" onClick={showResizedNav} />
    </div>
  )
}

export default SideBar
