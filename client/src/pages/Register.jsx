import '../styles/page-styles.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function  Register () {
   const [username, setUsername] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [repeatPassword, setRepeatPassword] = useState('')
   const [errors, setErrors] = useState('')

   const handleSubmit = (e) => {
      e.preventDefault()
   }

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
                    <div>
                       <label className='form-text'>
                       Nombre de Usuario
                       <input type="text" value={username} onChange={e => setUsername(e.target.value)}  />
                       </label>
                    </div>

                    <div>
                        <label className='form-text'>
                         Email
                         <input type="text" value={email} onChange={e => setEmail(e.target.value)}   />
                        </label>
                    </div>

                    <div>
                       <label className='form-text'>
                       Contraseña
                       <input type="text" value={password} onChange={e => setPassword(e.target.value)}  />
                       </label>
                    </div>

                    <div>
                       <label className='form-text'>
                       Repetir contraseña
                       <input type="text" value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)}  />
                       </label>
                    </div>
                       <button type='submit'>Crear cuenta</button>
                    </form>
                  </div>
                </div>
            </div>
         </div>
      </div>  
  )
}

export default  Register