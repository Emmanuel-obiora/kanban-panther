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
    
        newForm.classList.remove('add-new-task');
        modalClose.classList.remove('open-modal-blocker');
        newBoard.classList.remove('new-board-form');
        editBoard.classList.remove('open-edit-board');
        deleteBoard.classList.remove('open-delete-board');
        disTask.classList.remove('show-task-cont');
      }
    
  return (
    <div>
      <div className="task-cover" id="modalC" onClick={closeNewTask}>
      </div>
    </div>
  )
}

export default ModalBlocker
