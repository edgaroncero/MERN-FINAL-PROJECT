import { imgProfile } from "../config/icons-export"

function Profile () {
  return (
    <div className="profile-container">
      <h1>Bienvenido, username!</h1>
      <img src={imgProfile}/>
    </div>
  )
}

export default Profile