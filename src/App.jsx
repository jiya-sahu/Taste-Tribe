import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Success  from './pages/Success.jsx'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>}></Route>
        <Route path='/success' element={<Success/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
