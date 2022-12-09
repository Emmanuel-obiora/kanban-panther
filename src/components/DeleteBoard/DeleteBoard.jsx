import React from 'react'
import './DeleteBoard.css'

const DeleteBoard = () => {

  function closeDeleteBoard(){
    const deleteBoard = document.getElementById('deleteBoardContainer');
    const modalClose = document.getElementById('modalC');
        
    modalClose.classList.remove('open-modal-blocker');
    deleteBoard.classList.remove('open-delete-board');
  }
  return (
    <div>
      <div className="delete-board-container" id="deleteBoardContainer">
        <h3>Delete board</h3>
        <p>Are you sure you want to delete the 'Roadmap' board? This 
            will remove all columns and tasks and cannot be reversed.
        </p>
        <button type='button' className='delete-board-btn'>Delete</button>
        <button type='button' className='exit-cancel' onClick={closeDeleteBoard}>Cancel</button>
      </div>
    </div>
  )
}

export default DeleteBoard
