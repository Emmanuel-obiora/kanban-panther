import React from 'react'
import './EditBoard.css'
import { AiOutlineClose } from 'react-icons/ai'

const EditBoard = () => {
  return (
    <div>
      <div className="edit-board_form" id="editBoard">
        <h2>Edit Board</h2>
        <div className="edit-board-name">
            <label>Board Name</label>
            <input type="text" />
        </div>
        <div className="edit-board-columns">
            <label>Board Columns</label>
            <div className="column-now">
                <input type="text" placeholder='Now' />
                <AiOutlineClose className="close-edit-task" />
            </div>
            <div className="column-now">
                <input type="text" placeholder='Next' />
                <AiOutlineClose className="close-edit-task" />
            </div>
            <div className="column-now">
                <input type="text" placeholder='Later' />
                <AiOutlineClose className="close-edit-task" />
            </div>
        </div>
        <button type='button' className='edit-add-column'>+AddNewColumn</button>
        <button type='button' className='edit-save'>Save Changes</button>
      </div>
    </div>
  )
}

export default EditBoard
