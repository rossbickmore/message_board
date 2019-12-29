import React from 'react'
import Form from '../components/styles/Form'

const LoginForm = ({
  handleSubmit,
  handleUsernameChange,
  handlePasswordChange,
  username,
  password
 }) => {
 return (
   <div>
     <Form onSubmit={handleSubmit}>
       <div className="form-item">
         <p>Username</p>
         <input
           value={username}
           onChange={handleUsernameChange}
         />
       </div>
       <div className="form-item">
         <p>Password</p>
         <input
           type="password"
           value={password}
           onChange={handlePasswordChange}
         />
     </div>
      <div className="form-item">
       <button type="submit">login</button>
      </div>
     </Form>
   </div>
 )
}

export default LoginForm