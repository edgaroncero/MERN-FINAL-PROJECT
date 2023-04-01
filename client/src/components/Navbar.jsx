import { Arrow, dMoon, lMoon, Home, User} from '../config/icons-export'
import { Link } from 'react-router-dom'
import '../styles/component.styles.css'
import { useContext } from 'react'
import { LoginContext } from '../context/login-context'

//Chakra
//import { IconButton } from "@chakra-ui/button";
//import { useColorMode } from "@chakra-ui/color-mode";
//import { FaSun, FaMoon } from "react-icons/fa";

function Navbar () {
 const {isLogin} = useContext(LoginContext)

   //Chkra
//   const { colorMode, toggleColorMode } = useColorMode(); 
//   const isDark = colorMode === "dark";
//
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
          <Link>
          <div className='btn-img'>
             <button className='header-a_btn'> <h4>Categoría</h4><img src={Arrow} /> </button> 
          </div>
          </Link>        
          <Link>
          <div className='btn-img'>
             <button className='header-a_btn'><h4>Ciudad</h4><img src={Arrow} /></button> 
          </div>
          </Link>  
          <Link to="/login">
            <button className='header-a_btn'><h4>Sign In</h4></button>
         </Link>
         <Link to="/registrate">
           <button className='header-a_btn'><h4>Sign Up</h4></button>
         </Link>
         { isLogin && (<Link to="/profile">
           <button className='header-a_btn'>
             <img src={User}/>
           </button>
         </Link>)}
         <button className='header-a_btn'>
             <img src={dMoon}/>
           </button>  
        </div>    
      </header>
  )
}

export default Navbar