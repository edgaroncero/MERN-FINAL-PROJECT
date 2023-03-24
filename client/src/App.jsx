import ReactDOM from 'react-dom/client';
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { Login, Register, Profile, Home, Events, Footer, Navbar, News, Search } from './config/pages-export'

function App() {
  return (
    <div className='main-container'>
    <header>
       <Navbar />
    </header>
    <main>
      <Search />
      <Events />
      <News />
    </main>
    </div>
  )
}

export default App
