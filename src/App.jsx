import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
const App = () => {
  return (
    <div>
          <Header />
    <div className='flex'>
      <div>
      <Sidebar />
      </div>
      <div className='flex-1'>
        <Outlet />
      </div>
    </div>
    </div>
  )
}

export default App