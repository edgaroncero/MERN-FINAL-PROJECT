import { useContext } from "react"
import { imgProfile } from "../config/icons-export"
import { LoginContext } from "../context/login-context"
import { Navigate, useNavigate } from "react-router-dom"
import Cart from "../components/Cart"
import '../styles/Profile.css'

function Profile () {
  const { isLogin, setIsLogin, userLogged } = useContext(LoginContext)

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
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="profile-main-container ">
        <div className="profile-container">
          <h2>{`Bienvenido/a, ${userLogged}!`}</h2>
          <button onClick={handleLogout}> Logout </button>
          <img src={imgProfile}/>
          <Cart />
        </div>
    </div>
);
}

export default Profile