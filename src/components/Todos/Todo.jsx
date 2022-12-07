import React from 'react'
import {BsFillCircleFill} from 'react-icons/bs'
import './Todo.css'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Component } from 'react';
import HeaderRight from '../HeaderRight/HeaderRight'


function Todo(){

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
            <HeaderRight />
            <div className="scrollers" id="shiftR">
                {/* <ColoredScrollbars universal autoHeight
                    autoHeightMin={100}
                    autoHeightMax={528}
                    style={{zIndex: '1'}}
                > */}
                    <div className="todos-container">
                        <article className="each-todo">
                            <div className="each-todo-heading">
                                <BsFillCircleFill className="light-blue"/>
                                <h3>Todo </h3>
                                <span>(</span> <span>4</span> <span>)</span>
                            </div>
                            <div className="each-todo-content">
                                <article>
                                    <h3>Lorem ipsum dolor sit amet.</h3>
                                    <span>1 of <span>3</span> task</span>
                                </article>
                                <article>
                                    <h3>Lorem ipsum dolor sit amet.</h3>
                                    <span>1 of <span>3</span> task</span>
                                </article>
                                <article>
                                    <h3>Lorem ipsum dolor sit amet.</h3>
                                    <span>1 of <span>3</span> task</span>
                                </article>
                            </div>
                        </article>

                        <article className="each-todo">
                            <div className="each-todo-heading">
                                <BsFillCircleFill className="light-purple"/>
                                <h3>Doing</h3>
                                <span>(</span> <span>4</span> <span>)</span>
                            </div>
                            <div className="each-todo-content">
                                <article>
                                    <h3>Lorem ipsum dolor sit amet.</h3>
                                    <span>1 of <span>3</span> task</span>
                                </article>
                                <article>
                                    <h3>Lorem ipsum dolor sit amet.</h3>
                                    <span>1 of <span>3</span> task</span>
                                </article>
                                <article>
                                    <h3>Lorem ipsum dolor sit amet.</h3>
                                    <span>1 of <span>3</span> task</span>
                                </article>
                                <article>
                                    <h3>Lorem ipsum dolor sit amet.</h3>
                                    <span>1 of <span>3</span> task</span>
                                </article>
                            </div>
                        </article>

                        <article className="each-todo">
                            <div className="each-todo-heading">
                                <BsFillCircleFill className="light-green"/>
                                <h3>Done</h3>
                                <span>(</span> <span>4</span> <span>)</span>
                            </div>
                            <div className="each-todo-content">
                                <article>
                                    <h3>Lorem ipsum dolor sit amet.</h3>
                                    <span>1 of <span>3</span> task</span>
                                </article>
                                <article>
                                    <h3>Lorem ipsum dolor sit amet.</h3>
                                    <span>1 of <span>3</span> task</span>
                                </article>
                                <article>
                                    <h3>Lorem ipsum dolor sit amet.</h3>
                                    <span>1 of <span>3</span> task</span>
                                </article>
                                <article>
                                    <h3>Lorem ipsum dolor sit amet.</h3>
                                    <span>1 of <span>3</span> task</span>
                                </article>
                                <article>
                                    <h3>Lorem ipsum dolor sit amet.</h3>
                                    <span>1 of <span>3</span> task</span>
                                </article>
                                <article>
                                    <h3>Lorem ipsum dolor sit amet.</h3>
                                    <span>1 of <span>3</span> task</span>
                                </article>
                                <article>
                                    <h3>Lorem ipsum dolor sit amet.</h3>
                                    <span>1 of <span>3</span> task</span>
                                </article>
                            </div>
                        </article>

                        <article className="each-todo2">
                            <h1>+ New Column</h1>
                        </article>

                    </div>
                {/* </ColoredScrollbars> */}
            </div>

        </div>
    );
}

export default Todo
