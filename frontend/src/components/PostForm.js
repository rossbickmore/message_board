import React from 'react';
import Form from '../components/styles/Form'

const PostForm = ({title, content, onTitleChange, onContentChange, addPost}) => (
  <div>
    <Form onSubmit={addPost}>
      <div>
        Title
        <input value={title} onChange={onTitleChange}/>
      </div>
      <div>
        Content
        <textarea value={content} onChange={onContentChange}/>
      </div>
      <button type="submit">Create post</button>
    </Form>
  </div>
  );

export default PostForm;