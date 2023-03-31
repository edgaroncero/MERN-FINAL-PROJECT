import '../styles/page-styles.css'
import { Link } from 'react-router-dom'

function  Register () {
   const [name, setName] = useState('')
   const [lastname, setLastname] = useState('')
   const [username, setUsername] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   
   // const [repeatPassword, setRepeatPassword] = useState('')
   const [errors, setErrors] = useState('')

   const handleSubmit = (e) => {
      e.preventDefault()

      fetch('https://eventasia-server.vercel.app/users/register', {
         method: 'POST',
         headers: {
            'Content-Type':'application/json'
         },
         body: JSON.stringify({name, lastname, username, email, password})
      }) 
      .then((res => res.json()))
      .then(data => console.log(data))
      .catch(err => console.log(err))
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
                    <form onSubmit={handleSubmit}>
                    <div className='username-section'>
                        <div className='form-text_username'>
                           <label className='form-text'>
                           Nombre
                           <input type="text" value={name} onChange={e => setName(e.target.value)}  />
                           </label>
                        </div>
    
                        <div className='form-text_username'>
                           <label className='form-text'>
                           Primer Apellido
                           <input type="text" value={lastname} onChange={e => setLastname(e.target.value)}  />
                           </label>
                        </div>
                    </div>
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

                    {/* <div>
                       <label className='form-text'>
                       Repetir contraseña
                       <input type="text" value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)}  />
                       </label>
                    </div> */}
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