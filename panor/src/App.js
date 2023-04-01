import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './components/Landing'
import SideTab from './components/SideTab'

const App = () => {
  return (
    <div>

   

     
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path="/profile/:id" element={<SideTab/>} />
      </Routes>
      
    </div>
  )
}

export default App