import React, { useState } from 'react'
import './NewBoard.css'
import {AiOutlineClose} from 'react-icons/ai'
// import { v4 as uuid } from 'uuid';

const NewBoard = () => {
    const [boardName, setBoardName] = useState("");
    const [boardCol, setBoardCol] = useState("");
    const [boardCol2, setBoardCol2] = useState("");

    const boardSubmit = (e) => {
        e.preventDefault();
        console.log(boardName, boardCol, boardCol2);
        
    //     if(boardName && boardCol && boardCol2){
    //       addBoard({
    //             id: uuid(),
    //             boardName,
    //             boardCol,
    //             boardCol2,
    //             time: new Date().toLocalDateString(),
    //         })
    //     }
    }


  return (
    <div>
                <form onSubmit={(e) => boardSubmit(e)} className="created-content" id="createNewBoard">
                    <h2>Add New Board</h2>
                    <div className="board-name">
                        <label for="">Board Name</label>
                        <input type="text" name="Board Name" value={boardName}
                            onChange={(e) => setBoardName(e.target.value)} placeholder=' e.g Web Design' 
                        />
                    </div>

                    <div className="board-columns">
                        <label for="">Board Columns</label>
                        <div className="column-list">
                            <input type="text" name="Todo" value={boardCol}
                                onChange={(e) => setBoardCol(e.target.value)} placeholder='e.g Todo' />
                            <AiOutlineClose />
                        </div>
                        <div className="column-list">
                            <input type="text" name="Doing" value={boardCol2}
                                onChange={(e) => setBoardCol2(e.target.value)} placeholder='e.g Doing' />
                            <AiOutlineClose />
                        </ div>

                        <button type="button" className='addNewColumn'>+ Add New Column</button>
                    </div>

                    <button type="submit" className='new-board'>Create New Board</button>
                </form>
    </div>
  )
}

export default NewBoard
