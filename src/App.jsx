import React from 'react'
import SideBar from './components/Side Bar/SideBar'
import Navbar from './components/Navbar/Navbar'
import Todo from './components/Todos/Todo'
import AddNewTask from './components/AddNewTask/AddNewTask'
import ModalBlocker from './components/ModalBlocker/ModalBlocker'
import EditBoard from './components/EditBoard/EditBoard'
import DeleteBoard from './components/DeleteBoard/DeleteBoard'
import DisplayTask from './components/DisplayTask/DisplayTask'


function App() {

  return (
      <div>
        <SideBar />
        <Navbar />
        <Todo />
        <AddNewTask />
        <ModalBlocker />
        <EditBoard />
        <DeleteBoard />
        <DisplayTask />
      </div>
  )
}

export default App
