import React from 'react'
import './AddNewTask.css'
import { AiOutlineClose } from 'react-icons/ai'
import { Scrollbars } from 'react-custom-scrollbars-2';
import {Component} from 'react';
import { SlArrowDown } from 'react-icons/sl'

const AddNewTask = () => {
  class ColoredScrollbars extends Component {

    constructor(props, ...rest) {
        super(props, ...rest);
        this.renderThumb = this.renderThumb.bind(this);
    }

    renderThumb({ style, ...props }) {
        const thumbStyle = {
            backgroundColor: `var(--color-secondary)`
        };
        return (
            <div
                style={{ ...style, ...thumbStyle }}
                {...props}/>
        );
    }

    render() {
        return (
            <Scrollbars
                renderThumbHorizontal={this.renderThumb}
                renderThumbVertical={this.renderThumb}
                {...this.props}/>
        );
    }
}

  return (
    <div>
        <div className="new-task-container" id="taskCover">
          <ColoredScrollbars universal autoHeight
                    autoHeightMin={100}
                    autoHeightMax={550}
                    style={{zIndex: '1'}}
          >
            <h2>Add New Task</h2>
            <div className="task-title pad-all">
              <small>Title</small>
              <input type="text" placeholder=' e.g Take coffee break'/>
            </div>
            <div className="task-description pad-all">
              <small>Description</small>
              <textarea rows="7" type="text" placeholder=" e.g It's always good to take a break. This 15 minutes will recharge the batteries a little."></textarea>
            </div>
            <div className="task-subtask pad-all">
              <small>Subtasks</small>
              <div className="task-subtask_input">
                <input type="text" placeholder=' e.g Make coffee' />
                <AiOutlineClose className="close-task" />
              </div>
              <div className="task-subtask_input">
                <input type="text" placeholder=' e.g Drink coffee & smile' />
                <AiOutlineClose className="close-task" />
              </div>
              <div className="task-subtask_input">
                <input type="text" placeholder=' e.g Drink coffee & smile' />
                <AiOutlineClose className="close-task" />
              </div>
            </div>
            <div  className='new-subtask pad-all'>
              <button type="button">+AddNewSubtask</button>
            </div>
            <div className="task-status pad-all">
              <small>Status</small>
              <div className="drop-down_container">
                <select title="list drop down" className='list__items'>
                    <option value="Todo">Todo</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
                <SlArrowDown className="new-drop-down" />
              </div>
            </div>
            <div className="create-task pad-all">
              <button type='button'>Create Task</button>
            </div>
          </ColoredScrollbars>
        </div>
    </div>
  )
}

export default AddNewTask
