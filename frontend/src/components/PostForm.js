import React from 'react'
import Form from '../components/styles/Form'

const PostForm = ({ title, onTitleChange, onContentChange, content, addPost }) => (
  <Form onSubmit={addPost}>
    <div className="form-item">
      <p>Title</p>
      <input value={title} onChange={onTitleChange}/>
    </div>
    <div className="form-item">
      <p>Content</p>
      <textarea value={content} onChange={onContentChange}/>
    </div>
    <div className="form-item">
      <button type="submit">Submit</button>
    </div>
  </Form>
)

export default PostForm