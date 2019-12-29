import React from 'react';
import Form from '../components/styles/Form'

const PostForm = ({title, content, addPost}) => (
    <Form onSubmit={addPost}>
      <div class="form-item">
        <p>Title</p>
        <input {...title} reset=""/>
      </div>
      <div class="form-item">
        <p>Content</p>
        <textarea {...content} reset=""/>
      </div>
      <div class="form-item">
        <button type="submit">Submit</button>
      </div>
    </Form>
  );

export default PostForm;