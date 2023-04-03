import { Arrow, dMoon, lMoon, Home, User} from '../config/icons-export'
import { Link } from 'react-router-dom'
import '../styles/component.styles.css'
import { useContext, useState } from 'react'
import { LoginContext } from '../context/login-context'
import { useNavigate } from 'react-router-dom'

function Navbar () {

  const { isLogin, setIsLogin } = useContext(LoginContext)
  const navigate = useNavigate()

const handleLogout = () => {
  fetch('https://eventasia-server.vercel.app/users/logout', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then(res => res.json())
  .then(data => {
    if (data) {
      localStorage.removeItem('token')
      setIsLogin(false)
      navigate('/login')
    } else {
      throw new Error('Logout error')
    }º
  })
  .catch(err => console.log(err))
}

  return (
      <header>
        <div className='header-a'>
          <Link to="/">
            <button className='header-a_btn'>
              <img src={Home}/>
            </button> 
          </Link>
        </div> 
        <div className='header-b'>   
         
          { isLogin ? (
            <button onClick={() => handleLogout()}  className='header-a_btn'> {/* onClick={() => handleLogout()} */}
              <h4>Logout</h4>
           </button>
          ) : (
            <>
            <Link to="/login">
               <button className='header-a_btn'><h4>Sign In</h4></button>
            </Link>
            <Link to="/registrate">
              <button className='header-a_btn'><h4>Sign Up</h4></button>
            </Link>
           </>
          )}
         
           
         { isLogin && (<Link to="/profile">
           <button className='header-a_btn'>
             <img src={User}/>
           </button>
         </Link>)} 
        </div>    
      </header>
  )
}

export default Navbar
