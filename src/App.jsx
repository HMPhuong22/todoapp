import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Main from './components/Main'
import Home from './components/Home'
import News from './components/News'
import Contact from './components/Contact'
import About from './components/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}>
            <Route index element={<Home/>}/>
            <Route path='news' element={<News/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='about' element={<About/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
