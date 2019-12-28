import React from 'react';

const CommentForm = ({blogId, addComment, handleCommentChange, comment}) => (
  <form onSubmit={(e) => addComment(e, blogId)}>
  leave a comment
  <div>
    <input type="text" value={comment} onChange={handleCommentChange}/>
  </div>
  <button type="submit">Submit</button>
  </form>
);

export default CommentForm;