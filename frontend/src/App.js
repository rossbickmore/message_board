import React, {useState, useEffect} from 'react';

function App() {
  const [posts, setPosts] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [comment, setComment] = useState("")
  const [expand, setExpand] = useState(true)
  const baseUrl = "http://localhost:3000/posts"
  
  useEffect( () => {
    const getPosts = async () => {
      const response = await fetch(baseUrl)
      return response.json()
    }
    getPosts().then( data => setPosts(data))
  })

  const addPost = e => {
    e.preventDefault()
    const newPost = {
      title: title,
      content: content,
      id: posts.length + 1
    }
    const create = async (object) => {
      const options = {
        method: "POST",
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(object)
      }
      const response = await fetch(baseUrl, options)
      console.log(response)
    }
    create(newPost)
    setPosts(posts.concat(newPost))
  }

  const addComment = (e, id) => {
    e.preventDefault()
    const newComment = {
      content: comment,
    }
    const create = async (object, id) => {
      const options = {
        method: "POST",
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(object)
      }
      const response = await fetch(`${baseUrl}/${id}/comments`, options)
      console.log(response)
    }
    create(newComment,id)
    const postToAddCommentTo = posts.find( post => post.id === id )
    postToAddCommentTo.comments.concat(newComment)
    setComment("")
  }

  return (
    <div>
      <h1>Message Board</h1>
      <div class="PostForm">
        <form onSubmit={addPost}>
        <div>
          Title
          <input value={title} onChange={ ({target}) => setTitle(target.value)}/>
        </div>
        <div>
          Content
          <input value={content} onChange={ ({target}) => setContent(target.value)}/>
        </div>
        <button type="submit">Create post</button>
        </form>
      </div>
      <div class="PostBoard">
        { posts && posts.map( post => (
          <div class="Post" key={post.id}>
            <h4 onClick={() => setExpand(!expand)}>{post.title}</h4>
            { !expand &&
            <div>
              <p>{post.content}</p>
              <div class="CommentBoard">
              <h5>Comments</h5>
              { post.comments.map( comment => (
                <p>{comment.content}</p>
              ))}
              <div class="CommentForm">
                <form onSubmit={(e) => addComment(e, post.id)}>
                  leave a comment
                <div>
                  <input type="text" value={comment} onChange={ ({target}) => setComment(target.value)}/>
                </div>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
            </div>
            }
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
