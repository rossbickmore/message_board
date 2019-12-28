import React from 'react';

const PostForm = ({title, content, onTitleChange, onContentChange, addPost}) => (
  <div>
    <form onSubmit={addPost}>
      <div>
        Title
        <input value={title} onChange={onTitleChange}/>
      </div>
      <div>
        Content
        <input value={content} onChange={onContentChange}/>
      </div>
      <button type="submit">Create post</button>
    </form>
  </div>
  );

export default PostForm;