import ReactDOM from 'react-dom/client';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useContext, useEffect, useState } from 'react'
import { Login, Register, Profile, Home, Events, Footer, Navbar, News, Formulario, Event} from './config/pages-export'
import { LoginContext } from './context/login-context';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { isLogin, setIsLogin } = useContext(LoginContext)

  useEffect(() => {
       const token = localStorage.getItem('token')
       if (token) {
          setIsLogin(true)
       }
  }, [isLogin])
  
  return (
    <div className='main-container'>
    <header>
       <Navbar />
    </header>
      
    <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/:id" element={<Event />} />
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
