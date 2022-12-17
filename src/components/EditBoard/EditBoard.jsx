import React from 'react'
import './EditBoard.css'
import { AiOutlineClose } from 'react-icons/ai'

const EditBoard = () => {

  const [editTks, setEditTks] = React.useState([])
  const [editT, setEditT] = React.useState("")

  React.useEffect(() => {
    const temp = localStorage.getItem("editTks")
    const loadedTodos = JSON.parse(temp)

    if(loadedTodos){
        setEditTks(loadedTodos);
    }
  },[])

  React.useEffect(() => {
      const temp = JSON.stringify(editTks)
      localStorage.setItem("editTks", temp)
  },[editTks])


  function addEditSubTask(){
    const newSubTask = {
        id: new Date().getTime(),
        text: editT,
    }
    setEditTks([...editTks].concat(newSubTask))
    setEditT("")
}

function deleteEditSubT(id){ 
  const updatedEditTks = [...editTks].filter((editT) => editT.id !==id)
  setEditTks(updatedEditTks)
}

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

            {editTks.map((editT) => <div key={editT.id}>
              <div className="column-now">
                  <input type="text" placeholder='' />
                  <AiOutlineClose className="close-edit-task" onClick = {() => deleteEditSubT (editT.id)} />
              </div>
            </div>)}

        </div>

        <button type='button' className='edit-add-column' onClick={() => addEditSubTask (editT.id)}>+AddNewColumn</button>
        <button type='button' className='edit-save'>Save Changes</button>
      </div>
    </div>
  )
}

export default EditBoard
