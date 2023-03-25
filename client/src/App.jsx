import ReactDOM from 'react-dom/client';
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { Login, Register, Profile, Home, Events, Footer, Navbar, News, Formulario} from './config/pages-export'

function App() {
  return (
    <div className='main-container'>
    <header>
       <Navbar />
    </header>
      
    <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registrate" element={<Register />} />
          <Route path="/login" element={ <Login />} />
          <Route path="/profile" element={ <Profile />} />
        </Routes>
    </main>
     <Footer></Footer> 
    </div>
  )
}

export default App
