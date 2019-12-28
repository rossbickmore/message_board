import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border: 1px solid ${props => props.theme.offWhite};
  position: relative;
  padding: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default Card;
