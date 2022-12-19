import React from 'react'
import './HeaderRight.css'
import DottedNav from '../DottedNav/DottedNav'
import { BsPlusLg } from 'react-icons/bs'


const HeaderRight = () => {
    
    function addNewTask(){
        const newForm = document.getElementById('taskCover');
        const modalClose = document.getElementById('modalC');
    
        newForm.classList.add('add-new-task');
        modalClose.classList.add('open-modal-blocker');
      }


  return (
        <div className='App'>
            <div className="header-right" id='Header2'>
                <div className="left-side" id="leftSide">
                    <h2><span id='clicks'>Platform Launch</span></h2>
                    <div className="clickables">
                        <button type='button' onClick={addNewTask}>+AddNewTask</button>
                        <div className='small-add-new' onClick={addNewTask}>
                            <BsPlusLg />
                        </div>
                        <DottedNav />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default HeaderRight
