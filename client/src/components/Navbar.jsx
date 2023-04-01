import { Arrow, dMoon, lMoon, Home, User} from '../config/icons-export'
import { Link } from 'react-router-dom'
import '../styles/component.styles.css'
import { useContext, useState } from 'react'
import { LoginContext } from '../context/login-context'

function Navbar () {
//  const [showCategories, setShowCategories] = useState(false)
//  const [showCities, setShowCities] = useState(false)
 const {isLogin} = useContext(LoginContext)

//  const handleShowCategories = () => setShowCategories(!showCategories)
//  const handleShowCities = () => setShowCities(!showCities)


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
             <button 
             className='header-a_btn'
             onClick={() => handleShowCategories()}
             > 
             <h4>Categorías</h4>
             <img src={Arrow} /> 
             </button> 
          </div>
          </Link>        
          <Link>
          <div className='btn-img'>
             <button 
             className='header-a_btn'
             onClick={() => handleShowCities()}
             >
             <h4>Ciudades</h4>
             <img src={Arrow} />
             </button> 
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