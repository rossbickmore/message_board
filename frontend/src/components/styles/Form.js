import styled, { keyframes } from 'styled-components';

const Form = styled.form`
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  padding: 5px;
  line-height: 1.5;
  font-weight: 600;
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
  input[type='submit'] {
    width: auto;
    background: red;
    color: white;
    border: 0;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }
`;

export default Form;
