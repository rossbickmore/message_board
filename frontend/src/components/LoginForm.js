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
       <div>
         Username
         <input
           value={username}
           onChange={handleUsernameChange}
         />
       </div>
       <div>
         Password
         <input
           type="password"
           value={password}
           onChange={handlePasswordChange}
         />
     </div>
       <button type="submit">login</button>
     </Form>
   </div>
 )
}

export default LoginForm