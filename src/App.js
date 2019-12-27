import React, {useState, useEffect} from 'react';

function App() {
  const [posts, setPosts] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
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
      content: content
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

  return (
    <div className="App">
      <h1>Message Board</h1>
      <form onSubmit={addPost}>
        Title
        <input value={title} onChange={ ({target}) => setTitle(target.value)}/>
        Content
        <input value={content} onChange={ ({target}) => setContent(target.value)}/>
        <button type="submit">Create post</button>
      </form>
      <div>
        { posts && posts.map( post => (
          <div>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
