import React, { useState } from 'react'
import signUpService from '../services/signUp'
import { Redirect } from 'react-router-dom';

const SignUpForm = ({ handleLogin }) => {
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [signedUp, setSignedUp] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const handleSignUp = async (event) => {
    event.preventDefault()
    try {
      await signUpService.signUp({
        username, password, name
      })
      setUsername('')
      setPassword('')
      setName('')
      setSignedUp(true)
    } catch (exception) {
      setErrorMessage('Invalid details')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const signUpForm = () => (
    <div>
    <h2>SignUp</h2>
    <form onSubmit={handleSignUp}>
      <div>
        create username
        <input
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        create name
        <input
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
      </div>
      <div>
        create password
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
    </div>
      <button type="submit">login</button>
    </form>
  </div>
  )

 return (
   <div>
     {signedUp ? <Redirect to='/login' /> : signUpForm()}
   </div>
 )
}

export default SignUpForm