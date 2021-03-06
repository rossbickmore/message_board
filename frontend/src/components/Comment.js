import React from 'react'
import styled from 'styled-components'
import { timeSince } from '../helpers/dateFunctions'

const CommentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  .username {
    color: ${props => props.theme.red};
    font-weight: 900;
  }
  .left {
    display: flex;
  }
  .right {
    font-weight: 100;
    color: ${props => props.theme.grey};
    font-size: 8px;
    min-width: 100px;
  }
`
const Comment = ({ content, user, date }) => (
  <CommentContainer>
    <div className="left">
      <p className="username">{user}</p>
      <p>{content}</p>
    </div>
    <div className="right">
      <p>{timeSince(date)}</p>
    </div>
  </CommentContainer>
)

export default Comment