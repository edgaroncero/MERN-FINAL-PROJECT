
import { Link } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { LoginContext } from '../context/login-context'
import { useNavigate } from 'react-router-dom'
import { useValidate } from '../hooks/form-validation'


import Test from '../components/Test'

function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {setIsLogin, setUserLogged} = useContext(LoginContext)

  const navigate = useNavigate()

  const { emailErrors, passwordErrors, validateForm } = useValidate({email, password})

  const handleSubmit = (e) => {
      e.preventDefault()
      validateForm()
      fetch('https://eventasia-server.vercel.app/users/login', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({email, password})
      })
      .then(res => res.json())
      .then(data => {
        if (data.data.token) {
          const { token } = data.data
          const { name, lastname } = data.data.user
           localStorage.setItem('token', token)
           localStorage.setItem('name', name)
           localStorage.setItem('lastname', lastname)
           console.log(`Token recibido + ${token}`)
           setIsLogin(true)
           navigate('/')

           const getToken = localStorage.getItem('token')
        }
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='container' >
         <div className='main' >
            <div className='login' >
                <div className='title'>
                   <h2>Iniciar sesión</h2>
                 <p>Te damos la bienvenida!</p>
                </div>
                <div className='logindiv'>
                <form onSubmit={handleSubmit}>
                   <div>
                     <label>Correo Electrónico
                     <input value={email || ''} type="text" onChange={(e) => setEmail(e.target.value)} />
                     {emailErrors && <span className='error'>{emailErrors}</span> }
                     </label>
                   </div>
                   <div>
                     <label>Contraseña
                     <input value={password || ''} type="text" onChange={(e) => setPassword(e.target.value)} />
                     {passwordErrors && <span className='error'>{passwordErrors}</span> }
                     </label>
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