import { Link } from 'react-router-dom'

function Login () {
  return (
    
    <div className='container' >
         <div className='main' >
            <div className='login' >
                <div className='title'>
                   <h2>Iniciar sesión</h2>
                 <p>Te damos la bienvenida!</p>
                </div>
                <div className='logindiv'>
                <form>
                   <div>
                     <label>Nombre de Usuario</label>
                     <input type="text"   />
                   </div>
                   <div>
                     <label>Contraseña</label>
                     <input type="text"   />
                   </div>
                    <button>Iniciar sesión</button>
                </form>     
                <p>¿No tienes una cuenta?
                   <Link to='/registrate'>
                      Registrate
                   </Link>
                 </p>        
                </div>
            </div>
         </div>
       </div>  
  )
}

export default Login