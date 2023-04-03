import '../styles/page-styles.css'
import { Link } from 'react-router-dom'
import { useReducer, useState } from 'react'
import { useValidate } from '../hooks/form-validation'
import { useNavigate } from "react-router-dom"

const initialState = {
  name: '',
  lastname: '',
  username: '',
  email: '',
  password: ''
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload
      }
    case 'SET_LASTNAME':
      return {
        ...state,
        lastname: action.payload
      }
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.payload
      }
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.payload
      }
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.payload
      }
    default:
      return state
  }
}

function Register() {
  const [emailRegisterError, setEmailRegisterError] = useState('')
  const [userRegisterError, setUserRegisterError] = useState('')
  const [state, dispatch] = useReducer(reducer, initialState)
  const { name, lastname, username, email, password } = state
  const { nameErrors, lastnameErrors, emailErrors, passwordErrors, usernameErrors, validateForm } = useValidate(state)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    validateForm()
    fetch('https://eventasia-server.vercel.app/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, lastname, username, email, password })
    })
      .then((res => res.json()))
      .then(data =>  {
         if (data.message === "New User created") {
         navigate('/login') }
         if (data.message === "This username already exist"){
          setUserRegisterError('Ya existe un usuario así')
         }
         else if (data.message === "This email already exist"){
          setEmailRegisterError('Este correo electronico ya está registrado')
         }
         console.log(data)}
      )
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
                           <input type="text" value={name} onChange={e => dispatch({ type: 'SET_NAME', payload: e.target.value })}  />
                           {nameErrors && <span className='error'>{nameErrors}</span> }
                           </label>
                        </div>
    
                        <div className='form-text_username'>
                           <label className='form-text'>
                           Primer Apellido
                           <input type="text" value={lastname} onChange={e => dispatch({ type: 'SET_LASTNAME', payload: e.target.value })}  />
                           {lastnameErrors && <span className='error'>{lastnameErrors}</span> }
                           </label>
                        </div>
                    </div>
                     <div>
                           <label className='form-text'>
                           Nombre de Usuario
                           <input type="text" value={username} onChange={e => dispatch({ type: 'SET_USERNAME', payload: e.target.value })}  />
                           {usernameErrors && <span className='error'>{usernameErrors}</span> }
                           {userRegisterError && <span className='error'>{userRegisterError}</span> }
                           </label>
                        </div>
                    <div>
                        <label className='form-text'>
                         Email
                         <input type="text" value={email} onChange={e => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}    />
                         {emailErrors && <span className='error'>{emailErrors}</span> }
                         {emailRegisterError && !emailErrors && <span className='error'>{emailRegisterError}</span> }
                        </label>
                    </div>

                    <div>
                       <label className='form-text'>
                       Contraseña
                       <input type="password" value={password} onChange={e => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}   />
                       {passwordErrors && <span className='error'>{passwordErrors}</span> }
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

