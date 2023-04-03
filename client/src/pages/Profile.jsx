import { useContext } from "react"
import { imgProfile } from "../config/icons-export"
import { LoginContext } from "../context/login-context"
import { useNavigate } from "react-router-dom"
import Cart from "../components/Cart"
import '../styles/Profile.css'

function Profile () {
  const name = localStorage.getItem('name')
  const lastname = localStorage.getItem('lastname')
  
  return (
    <div className="profile-main-container ">
        <div className="profile-container">
          <h2>{`Bienvenido/a ${name} ${lastname}!`}</h2>
          <img className="iconProfile" src={imgProfile}/>
          <Cart />
        </div>
    </div>
);
}

export default Profile