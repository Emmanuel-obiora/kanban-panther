import React from 'react'
import DottedNav from '../DottedNav/DottedNav'
import './DisplayTask.css'
// import { Scrollbars } from 'react-custom-scrollbars-2';
// import {Component} from 'react';
import { SlArrowDown } from 'react-icons/sl'

const DisplayTask = () => {

    // class ColoredScrollbars extends Component {

    //     constructor(props, ...rest) {
    //         super(props, ...rest);
    //         this.renderThumb = this.renderThumb.bind(this);
    //     }
    
    //     renderThumb({ style, ...props }) {
    //         const thumbStyle = {
    //             backgroundColor: `var(--color-secondary)`
    //         };
    //         return (
    //             <div
    //                 style={{ ...style, ...thumbStyle }}
    //                 {...props}/>
    //         );
    //     }
    
    //     render() {
    //         return (
    //             <Scrollbars
    //                 // renderThumbHorizontal={this.renderThumb}
    //                 renderThumbVertical={this.renderThumb}
    //                 {...this.props}/>
    //         );
    //     }
    // }


  return (
    <div>
        <div className="display-task-container" id="disTask">
        {/* <ColoredScrollbars universal autoHeight
                    autoHeightMin={100}
                    autoHeightMax={500}
                    style={{zIndex: '1'}}
        > */}
                <div className="display-task-cont-head">
                    <h3>Build UI for onboarding flow</h3>
                    <DottedNav />
                </div>
                <div className="display-task-cont-subtask">
                    <span>Subtasks (<span>0</span>of <span>3</span>)</span>
                    <div className="subtask-house">
                        <input type="checkbox" />
                        <small>Sign up page</small>
                    </div>
                    <div className="subtask-house">
                        <input type="checkbox" />
                        <small>Review page</small>
                    </div>
                    <div className="subtask-house">
                        <input type="checkbox" />
                        <small>Welcome page</small>
                    </div>
                </div>
                <div className="display-task-cont-current">
                    <span>Current Status</span>
                    <div className="select-current-stat">
                        <select name="Current Status" id="">
                            <option value="">Todo</option>
                            <option value="">Doing</option>
                            <option value="">Done</option>
                        </select>
                        <SlArrowDown className="current-stat-drop-down" />
                    </div>
                </div>
            {/* </ColoredScrollbars> */}
        </div>
    </div>
  )
}

export default DisplayTask
