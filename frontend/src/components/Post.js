import React, {useState} from 'react';
import Comment from './Comment'
import CommentForm from './CommentForm'
import Card from '../components/styles/Card'
import styled from 'styled-components'

const Title = styled.h1`
  cursor: pointer;
`
const Post = ({title, content, comments, id, comment, user, addComment, handleCommentChange}) => {
  const [expand, setExpand] = useState(true)

  return (
    <Card>
      <Title onClick={() => setExpand(!expand)}>{title}</Title>
      { !expand &&
      <div>
        <p>{content}</p>
        <div class="CommentBoard">
          <h2>Comments</h2>
          { comments.map( comment => (
            <Comment 
            key={comment.id}
            content={comment.content}
            />
          ))}
        { user && 
        <CommentForm 
        addComment={addComment}
        handleCommentChange={handleCommentChange}
        comment={comment}
        blogId={id}
        />
        }
        { !user && <a style={{color: "grey"}} href="/login">Login to leave a comment</a> }
      </div>
      </div>
      }
    </Card>
  )
};

export default Post;