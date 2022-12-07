import React from 'react'
import { useState } from "react"
import './HeaderRight.css'


const HeaderRight = () => {
    const [drop, setDrop] = useState(false);

    const toggleDrop = () => {
        setDrop (!drop);
    };

  return (
        <div className='App'>
            <div className="header-right" id='Header2'>
                <div className="left-side">
                    <h2>Platform Launch</h2>
                    <div className="clickables">
                        <button>+AddNewTask</button>
                        <div class="toggle" onClick={toggleDrop}>
                            <span class="bars"></span>
                        </div>
                        {drop && (
                        <nav className="drop">
                            <ul>
                                <li className="edit-board">Edit Board</li>
                                <li>Delete Board</li>
                            </ul>
                        </nav>
                        )}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default HeaderRight
