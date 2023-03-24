import React from 'react'
import { Link } from 'react-router-dom'

function Navbar () {
  return (
      <header>
        <div>
            <Link to="/">
              <button>Home</button> 
            </Link>
        </div> 
        <div>
               
               <button >Categoría</button>
               <button >Ciudad</button>
              <Link to="/login">
               <button >Sign In</button>
             </Link>
             <Link to="/registrate">
               <button >Sign Up</button>
             </Link>
             <Link to="/registrate">
               <button >Perfil</button>
             </Link>
             <Link to="/registrate">
               <button >Moon</button>
             </Link>
        </div>    
      </header>
  )
}

export default Navbar