import React from 'react'
import './NewBoard.css'
import {AiOutlineClose} from 'react-icons/ai'

const NewBoard = () => {
    function closeBoard(){
        const closeBoard = document.getElementById('createNewBoard');

        closeBoard.classList.remove('new-board-form');
    }


  return (
    <div>
        <div className="created " id="createNewBoard" onClick={closeBoard}>
            <div className="overlay-c">
                <div className="created-content">
                    <h2>Add New Board</h2>
                    <div className="board-name">
                        <label for="">Board Name</label>
                        <input type="text" name="Board Name" placeholder='e.g Web Design' />
                    </div>

                    <div className="board-columns">
                        <label for="">Board Columns</label>
                        <div className="column-list">
                            <input type="text" name="Todo" placeholder='e.g Todo' />
                            <AiOutlineClose />
                        </div>
                        <div className="column-list">
                            <input type="text" name="Doing" placeholder='e.g Doing' />
                            <AiOutlineClose />
                        </ div>
                    </div>

                    <button type="button" className='addNewColumn'>+ Add New Column</button>

                    <button onClick={closeBoard} type="button" className='new-board'>Create New Board</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewBoard