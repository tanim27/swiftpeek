import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import HomePage from './Pages/HomePage/HomePage'
import ServicePage from './Pages/ServicePage/ServicePage'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/swiftpeek-services' element={<ServicePage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
