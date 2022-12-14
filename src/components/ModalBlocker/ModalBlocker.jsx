import React from 'react'
import './ModalBlocker.css'

const ModalBlocker = () => {

    function closeNewTask(){
        const newForm = document.getElementById('taskCover');
        const modalClose = document.getElementById('modalC');
        const newBoard = document.getElementById('createNewBoard');
        const editBoard = document.getElementById('editBoard');
        const deleteBoard = document.getElementById('deleteBoardContainer');
        const disTask = document.getElementById('disTask');
        const showing = document.getElementById('mainNav');
    
        newForm.classList.remove('add-new-task');
        modalClose.classList.remove('open-modal-blocker');
        newBoard.classList.remove('new-board-form');
        editBoard.classList.remove('open-edit-board');
        deleteBoard.classList.remove('open-delete-board');
        disTask.classList.remove('show-task-cont');
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
      <div className="task-cover" id="modalC" onClick={() => {
          closeNewTask();
          closeNav();
        }}>
      </div>
    </div>
  )
}

export default ModalBlocker
