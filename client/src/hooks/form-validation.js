import { useState } from "react"

export const useValidate = ({ name, lastname, username, email, password }) => {
    const [lastnameErrors, setLastameErrors] = useState('')
    const [nameErrors, setNameErrors] = useState('')
    const [usernameErrors, setUsernameErrors] = useState('')
    const [emailErrors, setEmailErrors] = useState('')
    const [passwordErrors, setPasswordErrors] = useState('')

  const validateForm = () => {
      const emailRegex = '[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}'
      const passwordRegex = '/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/';

      if (!name) {
        setNameErrors('No puedes dejar este campo vacío.')
       } else {
        setNameErrors('')
       }

      if (!lastname) {
        setLastameErrors('No puedes dejar este campo vacío.')
       } else {
        setLastameErrors('')
       }
      
      if (!username) {
        setUsernameErrors('No puedes dejar este campo vacío.')
       } else {
        setUsernameErrors('')
       }

      if (!email) {
          setEmailErrors('No puedes dejar este campo vacío')
        } else if (!email.match(emailRegex)) {
          setEmailErrors('El correo electrónico no es válido.')
        } else {
          setEmailErrors('')
        }

        if (!password) {
          setPasswordErrors('No puedes dejar este campo vacío')
        } else if (!password.match(passwordRegex)) {
          setPasswordErrors('La contraseña tiene que tener mas de 8 caracteres, mayúsculas y minúsculas.')
        } else {
          setPasswordErrors('')
        }
      }
      return { nameErrors ,lastnameErrors, emailErrors, passwordErrors, usernameErrors, validateForm }
  }