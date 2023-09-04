import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PokeDetail from './components/PokeDetail/PokeDetail'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/detail/:id' element={<PokeDetail/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
