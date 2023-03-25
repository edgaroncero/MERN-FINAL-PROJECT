import '../styles/page-styles.css'
import { Link } from 'react-router-dom'

function  Register () {
  return (
    <div>
       <div className='container' >
         <div className='main' >
            <div className='login' >
                <div className='title'>
                   <h2>Únete a Eventasia</h2>
                   <p>¿Ya tienes una cuenta? 
                   <Link to='/login'>
                      Inicia sesión
                   </Link>
                   </p>
                </div>
                  <div className='logindiv'>
                    <form>
                       <label className='form-text'>Nombre de Usuario</label>
                       <input type="text"   />
                       <label className='form-text'>Email</label>
                       <input type="text"   />
                       <label className='form-text' >Contraseña</label>
                       <input type="text"  />
                       <button type='submit' > Crear cuenta </button>
                    </form>
                  </div>
                </div>
            </div>
         </div>
      </div>  
  )
}

export default  Register