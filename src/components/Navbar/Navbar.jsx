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

        const todo = document.getElementById('shiftR');
        const leftSide = document.getElementById('leftSide');
        const nav = document.getElementById('mainNav');
        const header = document.getElementById('Header');
        const toggleIt = document.getElementById('toggleIt');
        const taskCover = document.getElementById('taskCover');
        const deleteBoardContainer = document.getElementById('deleteBoardContainer');
        const disTask = document.getElementById('disTask');
        const editBoard = document.getElementById('editBoard');
        const createNewBoard = document.getElementById('createNewBoard');
        const spareCol = document.getElementById('spareCol');

        if (toggled){
            todo.classList.remove('dark-bright-night');
            leftSide.classList.remove('light-bright-night');
            nav.classList.remove('light-bright-night6');
            header.classList.remove('light-bright-night2');
            toggleIt.classList.remove('light-bright-night4');
            taskCover.classList.remove('light-bright-night');
            deleteBoardContainer.classList.remove('light-bright-night');
            disTask.classList.remove('light-bright-night');
            editBoard.classList.remove('light-bright-night');
            createNewBoard.classList.remove('light-bright-night');
            spareCol.classList.remove('light-bright-night');
        }else{
            todo.classList.add('dark-bright-night');
            leftSide.classList.add('light-bright-night');
            nav.classList.add('light-bright-night6');
            header.classList.add('light-bright-night2');
            toggleIt.classList.add('light-bright-night4');
            taskCover.classList.add('light-bright-night');
            deleteBoardContainer.classList.add('light-bright-night');
            disTask.classList.add('light-bright-night');
            editBoard.classList.add('light-bright-night');
            createNewBoard.classList.add('light-bright-night');
            spareCol.classList.add('light-bright-night');
        }
        

    }


    function openBoard(){
        const newBoard = document.getElementById('createNewBoard');
        const modalClose = document.getElementById('modalC');
        const showing = document.getElementById('mainNav');
   
        newBoard.classList.add('new-board-form');
        modalClose.classList.add('open-modal-blocker');
        showing.classList.remove('show-resized-nav');
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
                    <li >
                        <VscTerminalTmux className='list-item'/>
                        <strong className='list-btn' type="button">Perform Launch</strong>
                    </li>
                    <li >
                        <VscTerminalTmux className='list-item'/>
                        <strong className='list-btn' type="button">Marketing Plan</strong>
                    </li>
                </ul>
                <div className="createBtn" onClick={openBoard}>
                    <VscTerminalTmux className='only'/>
                    <strong className='create-new' type="button">+Create New Board</strong>
                </div>
                <div className="slide-container" id='toggleIt'>
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
