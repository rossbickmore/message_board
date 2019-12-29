import React from 'react';
import Form from '../components/styles/Form'

const CommentForm = ({postId, addComment, handleCommentChange, comment}) => (
  <div>
    <Form onSubmit={(e) => addComment(e, postId)}>
    <div className="form-item">
      <input type="text" value={comment} onChange={handleCommentChange}/>
    </div>
    <div className="form-item">
      <button type="submit">Submit</button>
    </div>
    </Form>
  </div>
);

export default CommentForm;