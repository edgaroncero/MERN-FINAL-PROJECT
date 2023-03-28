import { useState } from "react"

export const useValidate = ({ email, password }) => {
    const [emailErrors, setEmailErrors] = useState('')
    const [passwordErrors, setPasswordErrors] = useState('')

  const validateForm = () => {
      const regex = '[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}'
        if (!email) {
          setEmailErrors('No puedes dejar este campo vacío')
        } else if (!email.match(regex)) {
          setEmailErrors('El correo electrónico no es correcto')
        } else {
          setEmailErrors('')
        }

        if (!password) {
          setPasswordErrors('No puedes dejar este campo vacío')
        } else if (password.length < 6) {
          setPasswordErrors('La contraseña debe tener al menos 6 caracteres')
        } else {
          setPasswordErrors('')
        }
      }

      return { emailErrors, passwordErrors, validateForm }
  }