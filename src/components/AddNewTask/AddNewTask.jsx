import React from 'react'
import './AddNewTask.css'
import { AiOutlineClose } from 'react-icons/ai'
import { Scrollbars } from 'react-custom-scrollbars-2';
import {Component} from 'react';
import {DropDownListComponent} from '@syncfusion/ej2'

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

const divStyle = {
  margin: 100,
  width: 250
}

  return (
    <div>
      <div className="task-cover">
        <div className="new-task-container">
          <ColoredScrollbars universal autoHeight
                    autoHeightMin={100}
                    autoHeightMax={528}
                    style={{zIndex: '1'}}
          >
            <h2>Add New Task</h2>
            <div className="task-title pad-all">
              <small>Title</small>
              <input type="text" placeholder=' e.g Take coffee break'/>
            </div>
            <div className="task-description pad-all">
              <small>Description</small>
              <textarea rows="6" type="text" placeholder=" e.g It's always good to take a break. This 15 minutes will recharge the batteries a little."></textarea>
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
            </div>
            <div  className='new-subtask pad-all'>
              <button type="button">+AddNewSubtask</button>
            </div>
            <div className="task-status pad-all">
              <small>Status</small>
              <div style={divStyle}>
                <DropDownListComponent />
              </div>
            </div>
          </ColoredScrollbars>
        </div>
      </div>
    </div>
  )
}

export default AddNewTask
