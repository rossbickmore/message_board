import React, {useState} from 'react';
import Comment from './Comment'
import CommentForm from './CommentForm'

const Post = ({title, content, comments, id, comment, addComment, handleCommentChange}) => {
  const [expand, setExpand] = useState(true)

  return (
    <div>
      <h4 onClick={() => setExpand(!expand)}>{title}</h4>
      { !expand &&
      <div>
        <p>{content}</p>
        <div class="CommentBoard">
          <h5>Comments</h5>
          { comments.map( comment => (
            <Comment 
            key={comment.id}
            content={comment.content}
            />
          ))}
        <CommentForm 
        addComment={addComment}
        handleCommentChange={handleCommentChange}
        comment={comment}
        blogId={id}
        />
      </div>
      </div>
      }
    </div>
  )
};

export default Post;