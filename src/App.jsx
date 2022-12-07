import React from 'react'
import SideBar from './components/Side Bar/SideBar'
import Navbar from './components/Navbar/Navbar'
import Todo from './components/Todos/Todo'
import AddNewTask from './components/AddNewTask/AddNewTask'


function App() {

  return (
      <div>
        <SideBar />
        <Navbar />
        <Todo />
        <AddNewTask />
      </div>
  )
}

export default App
