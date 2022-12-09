import React from 'react'
import { useState } from "react"
import './DottedNav.css'

const DottedNav = () => {
    const [drop, setDrop] = useState(false);

    const toggleDrop = () => {
        setDrop (!drop);
    };

    function openEditForm() {
        const editForm = document.getElementById('editBoard');
        const modalClose = document.getElementById('modalC');
        const disTask = document.getElementById('disTask');

        disTask.classList.remove('show-task-cont');
        editForm.classList.add('open-edit-board');
        modalClose.classList.add('open-modal-blocker');
    }

    function openDeleteForm() {
        const deleteForm = document.getElementById('deleteBoardContainer');
        const modalClose = document.getElementById('modalC');
        const disTask = document.getElementById('disTask');

        disTask.classList.remove('show-task-cont');
        deleteForm.classList.add('open-delete-board');
        modalClose.classList.add('open-modal-blocker');
    }


  return (
    <div>
        <div class="toggle" onClick={toggleDrop}>
            <span class="bars"></span>
        </div>
        {drop && (
                    <div>
                        <nav className="drop">
                            <ul>
                                <li className="edit-board" onClick={openEditForm}>Edit Board</li>
                                <li onClick={openDeleteForm}>Delete Board</li>
                            </ul>
                        </nav>
                        <div className="movable" onClick={toggleDrop}></div>
                    </div>
                )}
    </div>
  )
}

export default DottedNav
