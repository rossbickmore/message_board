import React from 'react'
import Form from '../components/styles/Form'

const LoginForm = ({
  handleSubmit,
  username,
  password,
 }) => {
 return (
   <div>
     <Form onSubmit={handleSubmit}>
       <div className="form-item">
         <p>Username</p>
         <input
           {...username}
           reset=""
         />
       </div>
       <div className="form-item">
         <p>Password</p>
         <input
           {...password}
           reset=""
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