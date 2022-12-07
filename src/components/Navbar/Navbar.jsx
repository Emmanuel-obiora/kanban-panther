import React from 'react'
import './Navbar.css'
import {VscTerminalTmux} from 'react-icons/vsc'
import {FiEyeOff} from 'react-icons/fi'
import {BsFillSunFill} from 'react-icons/bs'
import {BsMoonStarsFill} from 'react-icons/bs'
import Toggled from '../Toggled/Toggled'
import HeaderLeft from '../HeaderLeft/HeaderLeft'
import NewBoard from '../NewBoard/NewBoard'



const Navbar = () => {

    const [toggled, setToggled] = React.useState(false);
    const handleClick = () => {
        setToggled((s) => !s);
    }

    function openBoard(){
        const newBoard = document.getElementById('createNewBoard');

        newBoard.classList.add('new-board-form');
    }

    function closeNav(){
        const closing = document.getElementById('mainNav');
        const addition = document.getElementById('Header');
        const addition2 = document.getElementById('Header2');
        const scroller = document.getElementById('shiftR');

        closing.classList.remove("close-nav");
        addition.classList.remove("increase-width");
        addition2.classList.remove("increase-width2");
        scroller.classList.remove("scroller-open");
    }


  return (
        <div>
            <HeaderLeft />
            <nav className='main-nav' id="mainNav">
                <h5>ALL BOARDS <span>(</span> <span>3</span> <span>)</span></h5>
                <ul className="board-list">
                    <li active>
                        <VscTerminalTmux className='list-item'/>
                        <button className='list-btn' type="button">Perform Launch</button>
                    </li>
                    <li>
                        <VscTerminalTmux className='list-item'/>
                        <button className='list-btn' type="button">Marketing Plan</button>
                    </li>
                </ul>
                <div className="createBtn" onClick={openBoard}>
                    <VscTerminalTmux className='only'/>
                    <button className='create-new' type="button">+Create New Board</button>
                </div>
                <div className="slide-container">
                    <BsFillSunFill />
                    <Toggled toggled={toggled} onClick={handleClick} />
                    <BsMoonStarsFill />
                </div>
                <div class="hide-side" onClick={closeNav}>
                    < FiEyeOff />
                    <span>Hide Sidebar</span>
                </div>
            </nav>
            <NewBoard />
        </div>
  )
}

export default Navbar
