import styled, { keyframes } from 'styled-components'

const Form = styled.form`
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  padding: 5px;
  line-height: 1.5;
  font-weight: 600;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 0;
  }
  button,
  input[type='submit']{  
    display: inline-block;  
    border-radius: 4px;  
    background-color: #f4511e;  
    border: none;  
    background-color: ${props => props.theme.red};  
    color: white;
    text-align: center;
    font-size: 12px;
    padding: 10px 0;  
    width: 10%;  
    transition: all 0.5s;  
    cursor: pointer;  
    }
  .form-item {
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  button:hover {
    opacity: 0.5;
  }
`

export default Form
