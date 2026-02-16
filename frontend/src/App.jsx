import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { Routes } from 'react-router-dom'
function App() {
  
 return (
 <main className='main-content'>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
 </main>
);
}


export default App
