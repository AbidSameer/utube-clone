import React, { useState } from 'react'
import Navbar from './Comp/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Vedios from './Pages/Vedios/Vedios'
const App = () => {
  const [sidebar,setSidebar]=useState(true);
  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>}></Route>
        <Route path='/vedio/:categoryId/:vedioId' element={<Vedios/>}></Route>
      </Routes>
    </div>
  )
}

export default App