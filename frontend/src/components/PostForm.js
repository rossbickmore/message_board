import React from 'react';
import Form from '../components/styles/Form'
import { FaPaperPlane } from 'react-icons/fa';

const PostForm = ({title, content, onTitleChange, onContentChange, addPost}) => (
  <div>
    <Form onSubmit={addPost}>
      <div class="form-item">
        Title
        <input value={title} onChange={onTitleChange}/>
      </div>
      <div class="form-item">
        Content
        <textarea value={content} onChange={onContentChange}/>
      </div>
      <div class="form-item">
        <button type="submit">Submit</button>
      </div>
    </Form>
  </div>
  );

export default PostForm;