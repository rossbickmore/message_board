import React from 'react';
import Form from '../components/styles/Form'

const CommentForm = ({blogId, addComment, handleCommentChange, comment}) => (
  <Form onSubmit={(e) => addComment(e, blogId)}>
  <div className="form-item">
    <input type="text" value={comment} onChange={handleCommentChange}/>
  </div>
  <div className="form-item">
    <button type="submit">Submit</button>
  </div>
  </Form>
);

export default CommentForm;