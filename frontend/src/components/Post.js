import React, { useState } from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'
import Card from '../components/styles/Card'
import styled from 'styled-components'
import { formatDate } from '../helpers/dateFunctions'
import { FaThumbsUp, FaCommentAlt, FaComment } from 'react-icons/fa'

const Title = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  font-weight: 100;
`

const ContentContainer = styled.div`
   min-height: 100px;
   display: flex;
   flex-direction: column;
   align-items: space-around;
`

const ButtonContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${props => props.theme.red}
`

const Post = ({ title, content, likes, addLike, comments, id, comment, user, date, currentUser, addComment, handleCommentChange }) => {
  const [expand, setExpand] = useState(false)
  return (
    <Card>
      <Title>
        <h1>{title}</h1>
        <div>
          <p>A post by {user.username}</p>
          <p>{formatDate(date)}</p>
        </div>
      </Title>
      <hr></hr>
      <ContentContainer>
        <p>{content}</p>
      </ContentContainer>
      <hr></hr>
      <h2>{likes} Likes </h2>
      { currentUser &&
        <ButtonContainer>
          <p onClick={() => addLike(id)}>Like <FaThumbsUp/></p>
          <p onClick={() => setExpand(true)}>Leave a comment <FaCommentAlt/></p>
        </ButtonContainer>
      }
      { expand && currentUser && comments.map( comment => (
        <Comment
          key={comment.id}
          content={comment.content}
          user={comment.user.username}
          date={comment.date}
        />
      ))
      }
      { expand && currentUser &&
        <CommentForm
          addComment={addComment}
          handleCommentChange={handleCommentChange}
          comment={comment}
          postId={id}
        />
      }
      { !currentUser && <a style={{ color: 'grey' }} href="/login">Login to leave a comment</a> }
    </Card>
  )
}

export default Post