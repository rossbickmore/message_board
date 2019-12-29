import React from 'react';
import Comment from './Comment'
import CommentForm from './CommentForm'
import Card from '../components/styles/Card'
import styled from 'styled-components'
import { formatDate } from '../utils/dateFunctions'

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

const Post = ({title, content, likes, addLike, comments, id, comment, user, date, currentUser, addComment, handleCommentChange}) => {

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
      <div>
        <ContentContainer>
          <p>{content}</p>
        </ContentContainer>
        <hr></hr>
        <h2>{likes} Likes </h2>
        <button onClick={() => addLike(id)}>Add like</button>
        <ContentContainer>
          <h2>Comments</h2>
          { comments.map( comment => (
            <Comment 
            key={comment.id}
            content={comment.content}
            user={comment.user.username}
            date={comment.date}
            />
          ))}
        { currentUser && 
        <CommentForm 
        addComment={addComment}
        handleCommentChange={handleCommentChange}
        comment={comment}
        postId={id}
        />
        }
        { !currentUser && <a style={{color: "grey"}} href="/login">Login to leave a comment</a> }
        </ContentContainer>
      </div>
    </Card>
  )
};

export default Post;