import React from 'react';
import Form from '../components/styles/Form'

const CommentForm = ({blogId, addComment, handleCommentChange, comment}) => (
  <Form onSubmit={(e) => addComment(e, blogId)}>
  leave a comment
  <div>
    <input type="text" value={comment} onChange={handleCommentChange}/>
  </div>
  <button type="submit">Submit</button>
  </Form>
);

export default CommentForm;